import {DocumentDefinition,FilterQuery,UpdateQuery,QueryOptions} from "mongoose"
import {AdminModels} from "../models/index"
import {userInterface} from "../models/adminModel/ModelNewUser"

export  function create(input:DocumentDefinition<userInterface>,model:any){
 return model.create(input)
}
