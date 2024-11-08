function range(start,end,step){
    const myArray = [];
    for(let i=start;i<=end;i+=step){
        myArray.push(i);
    }
    return myArray;

    }
console.log(range(1,10,1));

//Classes in java.util.Date : LocalDateTime, LocalDate, LocalTime, ZonedDateTime. 
    // methods: .now(), .of(YYYY,MM,DD,HH:HH,MM:MM,SS:SS,NN:NN), of(LocalDate,LocalTime), ZoneId.of(Time_zone)
            // plus(temporalAmount), minus(temporalAmount), plus{Time_Unit}, minus{Time_Unit}
    // constructors: all of theses class use private constructors which are called by a static factory method, so we cannot initiate by using new ClassName(args)
    //immutable, needs to be assigned to a variable -> allow method chaining
// Classes to express time duration: Period ( for date type time Unit), Duration( for hour type time Unit )
    //methods: of{Time_Unit}, plus,minus
    // methods- Duration specific: , of(num, ChronoUnit.{Time_Unit}),multipliedBy, dividedBy, toHours, toMinutes,toSeconds,etc, 
// Duration vs ChronoUnit: both can be use to calculate the period of time between start_time and end_time
                        // ChronoUnit is used for simpler calculation, data is truncated so result is always whole number and positive
                                //methods: ChronoUnit.Hours.between(a,b)
                        // Duration is used for accurately time duration calculation, can be converted to other time unit
                                //method: Duration.between(a,b)
