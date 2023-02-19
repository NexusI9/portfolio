const Filter = () => (
  <svg style={{display:'none'}} data='image/svg+xml;' xmlns='http://www.w3.org/2000/svg'>
    <filter id="b" colorInterpolationFilters="sRGB" x="0" y="0" height="100%" width="100%">
          <feColorMatrix type="matrix"
          values="0 1 0 0 0
                  0 1 0 0 0
                  0 1 1 1 0
                  0 0 0 1 0">
          </feColorMatrix>
    </filter>

    <filter id="r" colorInterpolationFilters="sRGB" x="0" y="0" height="100%" width="100%">
          <feColorMatrix type="matrix"
          values="1 1 1 0 0
                  0 1 0 0 0
                  0 1 0 0 0
                  0 0 0 1 0">
          </feColorMatrix>
    </filter>

    <filter id="p" colorInterpolationFilters="sRGB" x="0" y="0" height="100%" width="100%">
          <feColorMatrix type="matrix"
          values="1 0 0 0.3 0
                  1 0 0 0 0
                  1 1 0 0.3 0
                  0 0 0 1 0">
          </feColorMatrix>
    </filter>

    <filter id="o" colorInterpolationFilters="sRGB" x="0" y="0" height="100%" width="100%">
          <feColorMatrix type="matrix"
          values="1 0 0 0.7 0
                  1 0 0 0.4 0
                  1 0 0 0 0
                  0 0 0 1 0">
          </feColorMatrix>
    </filter>
  </svg>
);

export default Filter;