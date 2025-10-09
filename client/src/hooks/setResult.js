import * as Action from '../components/redux/result_reducer'

export const pushAnswer=(result)=>async(dispatch)=>{
    try{
        await dispatch(Action.pushResultAction(result))
    }catch(error){
        console.log(error);
    }
}