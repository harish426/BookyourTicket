import { Injectable } from '@angular/core';
// import * as ethers from 'ethers'; // Import ethers library
import { ethers } from 'ethers';

import { environment } from 'src/environments/environment';

declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class ContractService {
    private provider: ethers.BrowserProvider | undefined;
    private signer: any;
  private contractAddress = environment.contractAddress;
  private contractAbi = environment.contractABI;
  private contract: any;

  constructor() {
    // Use window.ethereum to connect to MetaMask or other injected provider
    if (window.ethereum) {
      this.provider = new ethers.BrowserProvider(window.ethereum);
      this.contract = new ethers.Contract(this.contractAddress, this.contractAbi, this.provider).connect(this.signer);
    } else {
      console.error('Please install MetaMask or another Web3 provider extension.');
    }
  }

  async checkProvider() {
    if(!this.signer)
        this.signer = await this.provider!.getSigner();
  }

  async get_tickets_bought() {
    await this.checkProvider();
    let eventFilter = this.contract.filters.TicketsBought()
    let events = await this.contract.connect(this.signer).queryFilter(eventFilter);
    return events;
  }

  // async cancel_ticket() {
  //   await this.checkProvider();
  //   let eventFilter = this.contract.filters.TicketCanceled()
  //   let events = await this.contract.connect(this.signer).queryFilter(eventFilter);
  //   return events;
  // }
  
  async getRiderDetails(cabId: number): Promise<any> {
    await this.checkProvider();
    return await this.contract.connect(this.signer).getRiderDetails(cabId);
  }

  async getUserTicketsBought(cabId: number): Promise<any> {
    await this.checkProvider();
    return await this.contract.connect(this.signer).ticketsBought(cabId);
  }

  async get_max_ticket_limit(): Promise<any> {
    await this.checkProvider();
    return await this.contract.connect(this.signer).ticketsPerPerson();
  }

  async ticketPrice(): Promise<any> {
    await this.checkProvider();
    return await this.contract.connect(this.signer).ticketPrice();
  }

  async get_available_tickets(): Promise<any> {
    await this.checkProvider();
    return await this.contract.connect(this.signer).availableTickets();
  }

  async depositFunds(numTicket: number,amount: any): Promise<any> {
    await this.checkProvider();
    return await this.contract.connect(this.signer).buyTickets(numTicket,{ value: amount.toString() });
  }

  async cancelTicket(numTicket: number): Promise<any> {
    await this.checkProvider();
    return await this.contract.connect(this.signer).cancelTicket(numTicket);
  }

}