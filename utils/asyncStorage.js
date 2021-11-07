import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearAsyncStorage = async() => {
  AsyncStorage.clear();
}
export const  storeData = async (key,number,name,gen) => {
  try {
    
    const object = {
      number : number,
      name: name,
      gen: gen
    };

    const jsonValue = JSON.stringify(object)
    await AsyncStorage.setItem(key, jsonValue)

  } catch (e) {
    // lance une erreur
  }
}

export const getData = async (setTask) => {
    try {
      const keys = await AsyncStorage.getAllKeys()
      const allResults = await AsyncStorage.multiGet(keys)
      
      if(allResults != null){
        const list = []
        allResults.map( res => {
          list.push(JSON.parse(res[1]))          
        })
        setTask(list)
      }else{
        console.log("vide")
      }
  
    } catch(err ) {
      // lance une erreur
      console.log(err)
    }
  }
