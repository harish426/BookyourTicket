export const environment = {
    production: false,
    LOGIN_API: 'http://localhost:3000/login',
    SIGNUP_API: 'http://127.0.0.1:3000/signup',
    FORGOT_PASS_API: 'http://127.0.0.1:3000/forgot-password',
    RESET_PASS_API: 'http://127.0.0.1:3000/reset-password',
    CREATE_POST_API: 'http://127.0.0.1:3000/posts',
    EDIT_POST_API: 'http://127.0.0.1:3000/edituserpost',
    FETCH_POSTS_API: 'http://127.0.0.1:3000/retrieveposts',
    ADD_COMMENT_API: 'http://127.0.0.1:3000/postcomments',
    GET_COMMENT_API: 'http://127.0.0.1:3000/getpostcomments',
    FETCH_MARKET_POSTS_API: 'http://127.0.0.1:3000/retrievemarketposts',
    CREATE_MARKET_POSTS_API: 'http://127.0.0.1:3000/marketpost',
    EDIT_MARKET_POSTS_API: 'http://127.0.0.1:3000/editMarketPost',
    DELETE_MARKET_POSTS_API: 'http://127.0.0.1:3000/deletemarketpost',
    FILTER_MARKET_POSTS_API: 'http://127.0.0.1:3000/filtermarketposts',



    contractAddress:'0xa312fca50e91886be903e2d1b3d607141426dad2',
    contractABI:[
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "numTickets",
                    "type": "uint256"
                }
            ],
            "name": "buyTickets",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "numTickets",
                    "type": "uint256"
                }
            ],
            "name": "cancelTicket",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_availableTickets",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_ticketsPerPerson",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "buyer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "numTickets",
                    "type": "uint256"
                }
            ],
            "name": "TicketCanceled",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "buyer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "numTickets",
                    "type": "uint256"
                }
            ],
            "name": "TicketsBought",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "availableTickets",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "ticketPrice",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "ticketsBought",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "ticketsPerPerson",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]

}