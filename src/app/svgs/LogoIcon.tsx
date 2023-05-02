const Logo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1080 1080">
  <defs>
    <filter id="Path_1" x="363.313" y="271.667" width="353.406" height="183.586" filterUnits="userSpaceOnUse">
      <feOffset dy="3" />
      <feGaussianBlur stdDeviation="10" result="blur"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Path_3" x="275.333" y="344" width="530.667" height="414" filterUnits="userSpaceOnUse">
      <feOffset dy="3" />
      <feGaussianBlur stdDeviation="10" result="blur-2"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-2"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Path_6" x="174.73" y="344" width="216.23" height="477.401" filterUnits="userSpaceOnUse">
      <feOffset dy="3" />
      <feGaussianBlur stdDeviation="10" result="blur-3"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-3"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Path_8" x="688.036" y="344.333" width="216.3" height="478.067" filterUnits="userSpaceOnUse">
      <feOffset dy="3" />
      <feGaussianBlur stdDeviation="10" result="blur-4"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-4"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <clipPath id="clip-Icon_White_Background_">
      <rect width="1080" height="1080"/>
    </clipPath>
  </defs>
  <g id="Icon_White_Background_" data-name="Icon (White Background)" clipPath="url(#clip-Icon_White_Background_)">
    <g id="Icon">
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_1)">
        <path id="Path_1-2" data-name="Path 1" d="M3.831,41.4S74.395,2.868,149.9,2.868,297.237,41.435,297.237,41.435l-69.771,85.018S198.813,105,149.9,105s-76.387,21.4-76.387,21.4Z" transform="translate(389.48 295.8)" fill="#ea2c76"/>
      </g>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_3)">
        <path id="Path_3-2" data-name="Path 3" d="M339.971,241.2l200.4,213L740.1,241.545,776.518,369.2l-236.144,226-234.522-226Z" transform="translate(-0.52 129.8)" fill="#d62b6e"/>
      </g>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_6)">
        <path id="Path_6-2" data-name="Path 6" d="M133.044-.642l-8.417,160.613s-22.47,45.337-25.953,87.86,16.841,103.291,16.841,103.291l-83.27,59.139S-30.877,285.677,14.612,160.2,133.044-.642,133.044-.642Z" transform="translate(206.63 378.6) rotate(-3)" fill="#ea2c76"/>
      </g>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_8)">
        <path id="Path_8-2" data-name="Path 8" d="M134.945,411.569,126.493,250.29s-22.47-45.337-25.953-87.86S117.381,59.139,117.381,59.139L34.111,0S-29.011,124.585,16.478,250.057,134.945,411.569,134.945,411.569Z" transform="translate(852.8 789.4) rotate(-177)" fill="#ea2c76"/>
      </g>
    </g>
  </g>
</svg>
  );
};

export default Logo;
