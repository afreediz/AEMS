import React from 'react';
import './navbar.css'
function Navbar() {
    return (
        <header>
            <div className="logosec">
                <div className="logo">ADMINPANEL</div>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
                     className="icn menuicn"
                     id="menuicn"
                     alt="menu-icon" />
            </div>

            <div className="searchbar">
                <input type="text"
                       placeholder="Search" />
                <div className="searchbtn">
                <img src= 
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAqFBMVEUAAID///8AAHugoMIAAHX29vkAAH0AAHijo8irq88AAIQAAIG0tNX19fv9/f/x8fm/v9zg4O/X1+vLy+PGxuDl5fLq6vVxcbJ5ebTb2+w9PZliYqtHR55/f7onJ4+7u9oKCocZGYo2NpagoM0rK5GJicCZmckVFYp3d7fT0+lPT6Fpaa+xsdVXV6RMTJoWFodKSp6cnMqRkcSGhr6Hh7c/P5hjY6goKI9azcleAAAJqUlEQVR4nO2da3faSAyG7SnIwRhsMBgIdwIhJNCmyab7///Z2pC2Sa0Z5iKDp+v3nJ5+6lSP566RhONmatfrSb/fjeO4F6UKMu0bn3RzTl8upj//55OBR6NT4+Ndt9MP6/V6+4jmOumfZLB0vFqt5onESqw/bc1YwJ99Hd6FR8LRNwbOXygA8NatlDDZ/pV8J3mblPAru7YZRcrbOfXatY0oVOxLRWi7KkL7VRHar4rQflWE9qsitF8Vof2qCO1XRWi/KkL7VRHar4rQflWE9qsitF8Vof0qlBBOKqp5ORVDCMDA8bez21Sr2XbRdBi7Fik9ITDmr8Yv+143CVuZwqSzmzdeBpOl412BkpgQvObtNOq8h3n8oXB3d9h6lw6KoCQEWBxu+ijcL7Wih/VlxysdIXOe787gvXdl8LS4YEdSETJ/0MPHJqbOZnkxRhpC5k870ninjrzfXijGhYIQmq9Sw/Ozkql/kW40JwQ27qrzZeo+XWLNMSZks0CPL1NvXfxQNSQENgj1AdPN46HwbjQjhOXehC9TUHTYoBEhe1ZcQTF1DsWOVBNCb9AyB3Td9muhiPqE4NxT8GX6XuRk1CaEZoMK0HX3zeIQdQnBMdgk8oqK2/01CcGJKAFdd1cYoiZhk7QHM/Xo2U7SI4Sb8yaH3SBLgthHu1FfZs3dF9SJWoTe2VW0ezOewU81F7O38Uvv3OHnvphNQ4eQPYlNHaW3Bu/TBpBiMtYc9+rCfzf1KMl+WatOCBPRoGsFj8C53QLMNsJD0KSIgapOCMsR38b2/Ux0eQfmDwVXyX4RC6o6IRMctufnnRPM3/CHwL6AqahMKJiEu4mUP5T5/G80oEdUJYRFwrNO+nQJwD2yt2bk41SVkPFOo62xwudnq5jTTI98PVUkhEeOy7C7VBpfALwvdaDuRNU+7HE+vbL7E+44n+q6hMBZZiJH3S74jrc1JF5sFPsQ9xvGWtc7wM9+/aZGWwIpEXJ2iljzis7wC8oLbScqEcIOsyjRPYmAj56OQtqZqEIIB/Sb669+sELvGwNSRCVC9F5vcunBh/2IdE9UIIQVdhKJjT44zDHEZ8pOVCBkG8was2MW3GJf7YayExUIm9hW0TA0BnUXJJQbhjwhTJADW8v41QGwk/yYcJjKE7JXxBRz3wo69huEW6I8oYccScOl8ceGGbJjdK7Sh1tkTbgj+NbofWxNhyhNiG337RWBITBBPHBTumEqTche8nbsSL40ILfhOd1+IU+IHGhoHv6wb5fQRaJJE2KnZJoHanjMt+zS7YiyhLDOz5YR0XLQRFyodAc3aULkQwdEk8VDvIv/kC010oTILYBqwWPDfNt0R1NZQuzoQeUWg0m+7ejyhMiL4S3VXFnkDxNdssVUepTmfSp0/mnIH9zCi/ehk7+qJlsyI/I7UeviaykSmdDxyYzIe7haZBuiNGH+ZlEs4YKscUnCZv7wWBEqGFERGjVeipUmH7/Qomtcdj8scrdw8vvh5XcLyJ+OW1SuBljmzzThxc80mDflrcBzKZ1nX5oQuYhTeTXhR77ty5+8YZC3YkN1e0LuLRRevPfWZQmfke9MZIWHPM9c4Qa8zvv0EyojSuHFcBaIGTRLDfogQtHwSUbeRJowNGwR61zBm4jZES4oTMD8lFROLkfFq495NR8ovPrjghp+lzwh9jJj9sT93jAWc0IYwGf2uuY+mr+uYdEBVL7mTAovpFOEsGdsioc9rtHt90qv3GgohmknwgoLdvx6lT50HCwmdGf4tRkWbkL5BKwUT/OAGOM+GSGyMdaFpJkXKoTfsDD7xGTZw+P+24Rv3GqjlKHhkpGBOXjcP20ktFJc2xoNQNd/CfaQK5lLsQV9lFp8KRoQ2n7TRGTP6BfrXjO+9A2NY0/05g2s8PQZyoAoRzUKmpMv09dZbXjZRdSh7IqR7HjIq9tRj42CGafWBHU6gmq+BSeHYKRa/oHdcrLY5tR5QaqEM05SUHJQWuK9R047bfK0IOWsIPRgk+lVPqkEYMrLtaTy332wWDl3jZvEHfwraR2bobHPmUY6DGf+N1VCWHPzeZNXmdQZgAE3ybJNu9kfpZFhiUS//FT3bAYieBNe2lrWhQWUj9DJAxbl4sdPTcF8ZPDMHaBH6SRQnZEOoS+smjTarNFUZwBvOYzP1QObkyPqZKsLpuJRYbyZON7vQolZrrrHlj/2MvWyyBG1Kg6ww7muaPf308Nq28zkrw8Pm8ZIttrSnHgu6lWNEK02HzBbrTBVS75S3VERLaJm5Q/U8UYl2oGqW5+mUETSXtSuMWQNon6dKDZUnF8q6tEhGtT6YgejYnRi0fWiSTUzthbUADFHLAFheroRn8GMRDVQDasKwtCwKF074M5mooFqWvuSrTlVFuQUTzzulZoI0bi6p0k3toYpA8PdwifEMhCmTfg34vpPHLUbi6NTgOP5zmT+PElCmDay0ijf1pv8vGMJEAkGKk2lZGBviqtq7/GD7cK5aGobVbVr8Pw76fnYasw+ezuEA9WQkbAmO4MfkQRkPR76OW9OgYikdfXBWz4F3DpSmcLedM0wp6PHv3EazkXq30YAz1lN56i7IoxeJk3G81MJEU0sKuD3LYB5NbYafr+Z70b9MOx3ulHj++ubXxP/LIJguTEaqEX9RknmfEpVy5T+LfP7HQWdbsr0OzPFzMUyERaDWCpCEaL2XCwXoQhR1wNXMkIhol4vlo1QuKJq9WLpCEWI87+DUDRQdepFl5CQGLGMhKKBGigjlpJQhLhXbauchOKBqtaNJSUk7MWyEgoRlTqxtISigXqnglheQirEEhOK3FMKiGUmFCHeSyOWmlC03LzIIpabUPRss5FELDlhOlC574uSWRBlJxTNxQcpxNITCqKS21I5V+UnTOcib6DWZX6UzgJCAWIoUVDNBkLBito9X8bGCkIB4vmEJDsIHfaEv0xK1DmyhJCTbCrzOwq2EKa9iCAmEvlW1hA67JAfqDI/nmQPIYLYkPp5KXsIHfb4OdwzlvrpEJsIHTb5GAbRlSvUbBWhw2a/I1pjyUrUdhE6sP0ZChks/pL74Z8C//gzUeFQ+qXNNsKsFFDcn6/kEzHtI3QAfBXHvoWEiqoI7VdFaL8qQvtVEdqvitB+VYT2qyK0XxWh/aoI7VdFaL8qQvtVEdqvitB+VYT2639BSPbLVOVULXbczrWNKFJs6Dque18roG5oGZTV2wwzQnc+nHxzTrUBTmK26heBV6sxf/3jJXGPhKna9XrS6cZRFARBo9G4OeqLRToanFq+D4Io6u1G/Xq9fgqF+w9pH5SmQQGWUwAAAABJRU5ErkJggg=="
					class="icn srchicn"
					alt="search-icon" />
                </div>
            </div>

            <div className="message">
                <div className="circle"></div>
                <img src= 
"data:image/png;base64,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"
				class="icn"
				alt="" />
                <div >
                <img src= 
"data:image/jpeg;base64,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"
					class="dpicn"
					alt="dp" /> 
                </div>
            </div>
        </header>
    );
}

export default Navbar;
