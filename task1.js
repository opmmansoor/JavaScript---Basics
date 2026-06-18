//"I was given an array and asked to find the sum of the budget values for all objects whose status is 'Completed'."

let details = [
  {
    "id": 1,
    "name": "E-Commerce Website",
    "status": "Completed",
    "budget": 5000
  },
  {
    "id": 2,
    "name": "Mobile Banking App",
    "status": "In Progress",
    "budget": 12000
  },
  {
    "id": 3,
    "name": "Inventory System",
    "status": "Completed",
    "budget": 3500
  },
  {
    "id": 4,
    "name": "CRM Platform",
    "status": "Planning",
    "budget": 8000
  },
  {
    "id": 5,
    "name": "Portfolio Website",
    "status": "Completed",
    "budget": 1500
  },
  {
    "id": 6,
    "name": "Food Delivery App",
    "status": "In Progress",
    "budget": 10000
  },
  {
    "id": 7,
    "name": "School Management System",
    "status": "Completed",
    "budget": 7000
  },
  {
    "id": 8,
    "name": "Chat Application",
    "status": "Testing",
    "budget": 4500
  },
  {
    "id": 9,
    "name": "HR Management Tool",
    "status": "Planning",
    "budget": 6000
  },
  {
    "id": 10,
    "name": "Travel Booking System",
    "status": "In Progress",
    "budget": 9000
  }
];
let result = details.filter (item => item.status==="Completed");
console.log(result);
let total = result.reduce ((sum,item) => sum+item.budget,0);
console.log(total);