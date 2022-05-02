import React, { useState, useEffect, useReducer } from "react";
import { TYPES } from "../actions/crudAction";
import { helpHttp } from "../helpers/helpHttp";
import { crudInitalState, crudReducer } from "../reducers/crudReducer";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  //const [db, setDb] = useState(null);
  const [state, dispatch] = useReducer(crudReducer, crudInitalState);
  const { db } = state;

  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  //
  let api = helpHttp();
  let url = "http://localhost:5000/santos";
  useEffect(() => {
    setLoader(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          //setDb(res);
          dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
          setError(null);
        } else {
          //setDb(null);
          dispatch({ type: TYPES.NOT_DATA });
          setError(res);
        }
        setLoader(false);
      });
  }, [url]);
  //
  function createData(data) {
    data.id = Date.now();
    //console.log(data);
    let options = {
      body: data,
      headers: { "Content-Type": "application/json" },
    };
    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        //setDb([...db, res]);
        dispatch({ type: TYPES.CREATE_DATA, payload: res });
      } else {
        setError(res);
      }
    });
    //setDb([...db, data]);
  }
  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: { "Content-Type": "application/json" },
    };
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        //let newData = db.map((el) => (el.id === data.id ? data : el));
        //setDb(newData);
        dispatch({ type: TYPES.UPDATE_DATA, payload: data });
      } else {
        setError(res);
      }
    });
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Are you sure you want to delete the data? ${id}`
    );
    let options = {
      headers: { "Content-Type": "application/json" },
    };
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          //let newData = db.filter((el) => el.id !== id);
          //setDb(newData);
          dispatch({ type: TYPES.DELETE_DATA, payload: id });
        } else {
          //setDb(res);
        }
      });
    } else {
      return;
    }
  };
  //
  return (
    <div>
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loader && <Loader />}
        {error && (
          <Message
            msj={`Error: ${error.status} ${error.statusText}`}
            bgColor="#dc3445"
          />
        )}

        {db && (
          <CrudTable
            data={db}
            deleteData={deleteData}
            setDataToEdit={setDataToEdit}
          />
        )}
      </article>
    </div>
  );
};
export default CrudApi;
