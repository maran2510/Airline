import { City } from "../City/City";
import { Flight } from "../Flight/Flight";
import { Passenger } from "../Passenger/Passenger";
import { Seat } from "../Seat/Seat";

export class Transaction
{
    trId:number=0;
    passangerId:string="";
    flightNo:string="";
    bookingDate:string="";
    cityId:number=0;
    seatNo:string="";
    tfair:number=0;
    pstatus:string=""; 
    
    // constructor(trId:number, passangerId:string, flightNo:string, bookingDate:string, cityId:number, seatNo:string,  tfair:number, pstatus:string)
    // {
    //     this.trId = trId;
    //     this.passangerId = passangerId;
    //     this.flightNo = flightNo;
    //     this.bookingDate = bookingDate;
    //     this.cityId = cityId;
    //     this.seatNo = seatNo;
    //     this.tfair = tfair;
    //     this.pstatus = pstatus;
    // }
}