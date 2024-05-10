import { Component, OnInit, OnDestroy, HostListener, ElementRef, ViewChild } from '@angular/core';
import { DefaultService } from "../default.service";
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthenticationService } from '../services/authentication.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
// import { Socket } from 'ngx-socket-io';
import { io } from 'socket.io-client';
import { SocketioService } from "../socket.service";
import { ContractService } from 'src/app/services/contract.service';
import { ethers } from 'ethers';

declare let window: any;

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @ViewChild('myModal') modalContent!: ElementRef;
  constructor(private contractservice:ContractService, private modalService: NgbModal){
    

  }
  maxTickets: number = 3;
  private provider: ethers.BrowserProvider | undefined;
  private signer: any;
  tickets_bought:any;
  isButtonDisabled: boolean = false;
  ticketsLeft:any;
  ticketPrice:any;
  ticketsToBuy:any = 0;
  ticketsToSell:any = 0;
  ticketsToCancel:any = 0;
  isSell:boolean = false;
  async buyTickets(){
    console.log(this.ticketsToBuy)
    await this.contractservice.depositFunds(this.ticketsToBuy,this.ticketsToBuy*this.ticketPrice*1e18); 
  }
  async cancelTicket() {
    await this.contractservice.cancelTicket(this.ticketsToCancel);
  }
  
  async ngOnInit(): Promise<void> {
    const user = localStorage.getItem("user");
    if (user && JSON.parse(user).address) {
        this.signer = JSON.parse(user);
        this.signer = this.signer.address
    }
    this.updateButtonStatus();
    let ticket_array= await this.contractservice.get_tickets_bought()
    ticket_array = ticket_array.map((itr:any)=>itr.args);
    console.log(this.signer)
    ticket_array= ticket_array.filter((itr:any)=>{itr[0].toLowerCase()==this.signer.toLowerCase()});
    console.log(ticket_array)
    await this.getData()
  }

  async getData() {
    this.ticketPrice = (await this.contractservice.ticketPrice()).toString()/1e18;
    this.ticketsLeft = await this.contractservice.get_available_tickets();
    this.tickets_bought = (await this.contractservice.getUserTicketsBought(this.signer)).toString();
    this.maxTickets = (await this.contractservice.get_max_ticket_limit()).toString();
    this.maxTickets -= this.tickets_bought.toString();
  }

  toggleDiscussionBox(modal: any) {
    this.modalService.open(modal);
  }

  ticketOptions(): number[] {
    return Array.from({length: this.maxTickets}, (_, i) => i + 1);
  }

  sellTicketOptions(): number[] {
    return Array.from({length: this.tickets_bought}, (_, i) => i + 1);
  }
  
  updateButtonStatus() {
    this.isButtonDisabled = this.maxTickets === 0;
  }

}
