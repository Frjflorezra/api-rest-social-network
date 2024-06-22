import {connect} from 'mongoose'

const connection = async () => {
  try {
    await connect("mongodb://localhost:27017/bd_socialnet");
    console.log("conectado correctamente a la base de datos");
  } catch (error) {
    console.log(error);
    throw new error("!No se ha podido conectar con la base de datos");
  }
};

export default connection;
