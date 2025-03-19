interface weatherForeCastInterface{
    name:string,
    weather:{
        description:string,
        icon:string
    }[],
    main:{
        temp:number,
        temp_min:number,
        temp_max:number
    }
}

interface fiveDayForecastInterface{
    list:[{
        main:{
            temp_min:number,
            temp_max:number
        },
        weather:{
            description:string,
            icon:string
        }[],
    }]
}
