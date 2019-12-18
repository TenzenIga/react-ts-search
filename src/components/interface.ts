export interface IAction{
  type:string,
  payload:any
}

export interface IState{
  suggestions:ISuggestion[],
  selected:ISuggestion, 
  savedOrgs:ISuggestion[]
}

export interface ISuggestion{
    value: string
    unrestricted_value: string
    data: IOrgData
  }
  export interface IOrgData{
    kpp:number
    inn:number
    ogrn:number
    address:IOrgAddress
    management:IOrgManagement
  }
   export interface IOrgAddress{
     unrestricted_value:string
     data:IAddressData
   }
  export interface IOrgManagement{
    name?:string
  }  
  export interface IAddressData{
    city: string
  }