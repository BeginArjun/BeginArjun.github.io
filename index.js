// JavaScript Document
let count = 0
let sum=document.getElementById("count-el")
function increment()
{
    count+=1
    document.getElementById("count-el").textContent=count
    if(count>=0)
    {
        sum.style.backgroundColor="beige"
    }
}
function decrement()
{
    count-=1
    sum.textContent=count
    if (count<0) {
        sum.style.backgroundColor="red"
        sum.textContent="Can't Be Less Than Zero!"
    }
}
// Save Button
let dash=" , "
let prev=document.getElementById("prev")
function save()
{
    prev.textContent+=count+dash
    count=0
    sum.textContent=0
}