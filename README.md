<div align="center"><strong>Like challenge</strong></div>
<div align="center">
<p>You probably know the "like" system from Facebook and other social networks.
People can "like" blog posts, pictures or other items. We’d like you to write a
small program that formats the like relationships for display.</p>
<p>The sample data (input):</p>
<p>const posts = [
  { id: 1, likes: [] },
  { id: 2, likes: ['Peter'] },
  { id: 3, likes: ['John', 'Mark'] },
  { id: 4, likes: ['Paul', 'Lilly', 'Alex'] },
  { id: 5, likes: ['Sarah', 'Michelle', 'Alex', 'John'] }
];</p>
<p>Your program will format the text that should be displayed next to each item in
a theoretical feed. The output of your program be this:</p>
<p>const expectedOutput = [
  { id: 1, text: 'No one likes this' },
  { id: 2, text: 'Peter likes this' },
  { id: 3, text: 'John and Mark like this' },
  { id: 4, text: 'Paul, Lilly and Alex like this' },
  { id: 5, text: 'Sarah, Michelle and 2 others like this' }
];</p>
<p>Good luck, and have fun!</p>
</div>

## License

This project is licensed under the MIT license, Copyright (c) 2017 Yohai
Ararat. For more information see `LICENSE.md`.
