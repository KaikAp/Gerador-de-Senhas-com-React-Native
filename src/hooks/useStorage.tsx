import AsyncStorage from "@react-native-async-storage/async-storage"

 const useStorage = () => {
    const getItem = async(key: any) => {
        try{
            const passwords = await AsyncStorage.getItem(key);
            if (passwords != null)return JSON.parse(passwords);
            return [];
        }catch(error){
            return [];
        }
    }

const saveItem = async (key: any, value: any) => {
    try{
        let passwords = await getItem(key);
        passwords.push(value);
        await AsyncStorage.setItem(key,JSON.stringify(passwords))
    }catch(error){

    }
}


const removeItem = async(key:any, item:any) => {
    try{
        let passwords = await getItem(key);
        let myPasswords = passwords.filter((passwords: any) => {
            return(passwords !== item)
        })

        await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
        return myPasswords;
    }catch(error){

    }
}

return{
    getItem,
    saveItem,
    removeItem,
}
}
export default useStorage;