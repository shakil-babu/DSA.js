/*

Repetition এবং function এর কম্বিনেশনকে হলো Recursion । সহজ ভাবে বললে - কোন কিছু যদি নিজেকে নিজে পুনরায় ডাকে,
তাই হচ্ছে রিকারশন/ Recursion।

০১। রিকার্শিভ ফাংশন কি ?
--------------------------
যে ফাংশন নিজেই নিজেকে কল করতে পারে তাকেই  রিকার্শিভ ফাংশন বলে।

--> The three key features of recursion
All recursive functions should have three key features:

-> 1. A Termination Condition
==============================

Simply put: if(something bad happened){ STOP }; The Termination Condition is our 
recursion fail-safe. Think of it like your emergency brake. It’s put there in 
case of bad input to prevent the recursion from ever running. 
In our factorial example, if (x < 0) return; is our termination condition. 
It’s not possible to factorial a negative number and thus, we don’t even want to run 
our recursion if a negative number is input.

-> 2. A Base Case
==================

Simply put: if(this happens) { Yay! We're done }; The Base Case is similar to our termination 
condition in that it also stops our recursion. But remember, the termination condition is a 
catch-all for bad data. Whereas the base case is the goal of our recursive function. Base cases 
are usually within an if statement .In the factorial example, if (x === 0) return 1; is our base 
case. We know that once we’ve gotten x down to zero, 
we’ve succeeded in determining our factorial!

-> 3. Recursive Case
======================
Simply put: Our function calling itself. I
n the factorial example, return x * factorial(x — 1); is where the recursion actually happens. 
We’re returning the value of the number x multiplied by the value of whatever factorial(x-1) evaluates to.



==> All Three Together

Now we still have no idea how our factorial example works, but ideally it makes more sense:

function factorial(x) {
  // TERMINATION case
  if (x < 0) return;  
  // BASE case
  if (x === 0) return 1;  
  // RECURSION case
  return x * factorial(x - 1);
}factorial(3);
// 6




Visit this link :
https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea

*/
