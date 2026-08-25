import React from 'react'
import NetflexBannerLogo from '../../assets/images/coldStorage (1).webp'
function Banner() {
  return (
    <div>

      <div>
{/* netflex image */}
<img src={NetflexBannerLogo} alt="Netflex Logo" />
{/* title */}
<h1>Bridgerton</h1>

{/* description */}
<h1>
  shondaland's Emmy-winning series brings julia Quinn's novels
  to life,
  as eight siblings seek their perfect match amid London's scandals and soirees.
</h1>

{/* button */}
<div>
  <button>Play</button>
  <button>My list</button>
</div>
      </div>
      {/* fading */}
      <div>
        
      </div>
    </div>
  )
}

export default Banner
