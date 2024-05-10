// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TicketSale {
    address public owner;
    uint public availableTickets;
    uint public ticketsPerPerson;
    uint public ticketPrice = 0.0001 ether;
    mapping(address => uint) public ticketsBought;

    event TicketsBought(address indexed buyer, uint numTickets);
    event TicketCanceled(address indexed buyer, uint numTickets);

    constructor(uint _availableTickets, uint _ticketsPerPerson) {
        owner = msg.sender;
        availableTickets = _availableTickets;
        ticketsPerPerson = _ticketsPerPerson;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function buyTickets(uint numTickets) external payable {
        require(numTickets > 0, "Number of tickets must be greater than 0");
        require(msg.value >= numTickets * ticketPrice, "Insufficient funds");

        uint totalTicketsBought = ticketsBought[msg.sender] + numTickets;

        require(totalTicketsBought <= ticketsPerPerson, "Exceeds maximum tickets per person");
        require(totalTicketsBought <= availableTickets, "Not enough tickets available");

        ticketsBought[msg.sender] = totalTicketsBought;
        availableTickets -= numTickets;

        emit TicketsBought(msg.sender, numTickets);
    }

    function cancelTicket(uint numTickets) external {
        require(numTickets > 0, "Number of tickets must be greater than 0");
        require(ticketsBought[msg.sender] >= numTickets, "Not enough tickets to cancel");

        ticketsBought[msg.sender] -= numTickets;
        availableTickets += numTickets;

        emit TicketCanceled(msg.sender, numTickets);
    }

    function withdraw() external onlyOwner {
        payable(owner).transfer(address(this).balance);
    }
}