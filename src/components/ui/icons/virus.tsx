import React from "react";

const VirusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
<svg
xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
viewBox="0 0 800 800"
fill="none"
{...props}

>

```
<defs>
```

```
  <linearGradient id="grad1" x1="0" y1="0" x2="800" y2="800">
    <stop offset="0%" stopColor="#6C63FF" />
    <stop offset="100%" stopColor="#48CAE4" />
  </linearGradient>
  <mask id="mask1">
    <rect width="800" height="800" fill="white" />
  </mask>
</defs>

<g mask="url(#mask1)">
  <rect width="800" height="800" fill="url(#grad1)" />
  <circle cx="400" cy="400" r="200" fill="white" opacity="0.2" />
  <path
    d="M200 400 C250 250, 550 250, 600 400 S550 550, 400 550, 250 550, 200 400 Z"
    fill="white"
    opacity="0.4"
  />
</g>
```

  </svg>
);

export default VirusIcon;
