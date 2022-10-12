<p align="center">
    <img src="https://raw.githubusercontent.com/CarefulProgrammer/CiSVG/main/assets/CiSVG%20logo.svg" height="128">
    <h1 align="center">CiSVG</h1>
</p>

<p align="center">
  <img alt="languages" src="https://img.shields.io/github/languages/count/carefulprogrammer/cisvg?style=for-the-badge"/>
  <img alt="license" src="https://img.shields.io/github/license/carefulprogrammer/cisvg?style=for-the-badge"/>
  <img alt="topLanguage" src="https://img.shields.io/github/languages/top/carefulprogrammer/cisvg?style=for-the-badge"/>
  <img alt="githubFollowers" src="https://img.shields.io/github/followers/carefulprogrammer?style=for-the-badge"/>
  <img alt="githubForks" src="https://img.shields.io/github/forks/carefulprogrammer/cisvg?style=for-the-badge"/>
</p>

# About the Project

An online Polar-Form SVG Path to Rectangular-Form SVG Path Converter.

<img alt="screenshow" src="Screenshots/Screenshot %231.png"/>

# Getting Started

All you need to know about the program!

1. All the symbols like "M,m,L,l,C,c" etc. works!
2. The coordinates are supplied like this `M 700 -45d` which translates to `M 494.975 494.975`.
3. Multiple coordinates are supplied like this `c 100 -45d 130 -40d 200 0d` which translates to `c 70.711 70.711 99.586 83.562 200 0`. (The translation depends on the placement of the last point if a small-alphabet command is used)
4. The `d` suffix must be supplied for degrees, otherwise radians is assumed. (more support for radians comming soon)
5. The translation system rounds off to 3 digits after the decimal-point. This makes the usage of `z` even more important!
6. Support for coordinate placement using the last placed coordinate is comming soon!
7. Use a bigger screen and a landscaped screen for best usage.

## Contributing

Checkout our [contributing.md](/contributing.md).

# LICENSE
MIT License

Copyright (c) 2022 S M Mohtashim Ahmed

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
