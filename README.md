# String-Incrementer
This is a programming exercise which identifies numbers at the end of a String and increments them.

# Rules:

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

# Solutions Documentation:

The following repo offers three solutions to this problem:

# Solution 1 -- StringIncrementer.js : 

The first solution is the most verbose, but it is the most clear. This is the kind of enterprise level code I would expect to commit
to solve this problem at work. This is because:

1. It separates concerns
2. Variables are descriptive. 
3. Solution is Algorithmic with clearly defined and handled edge cases.
4. Documentation exists (but isn't excessive). 

If I were to get hit by a truck and a junior developer were to be assigned to handle this function, it would be expected that someone 
without very much experience could make changes within this version of the function.

# Solution 2 -- StringIncrementer2.js : 

This solution is definitely a more concise one. Moreover, it leverages more advanced programming langauge features such as a switch 
statement and recursion. However, this does make it a little harder to follow. I would  consider using this solution in 
enterprise level code, but might hesitate because:

1. It's harder to make changes to. 
2. Case 8 and case 9 are tightly coupled.
3. It's recursive, so a junior developer might have a harder time following how this function actually works

# Solution 3 -- StringIncrementer3.js : 

This solution is the most concise and efficient solution for this problem. It implements advanced features like Regex and ES6 arrow 
functions to solve the problem. I would not put this in enterprise level code unless explicitly instructed to by a senior engineer
or preserving resources were imperative because it's simply very difficult to understand or make changes to. 

If I committed something like this, I'd expect to support it for the entire application lifecycle. 