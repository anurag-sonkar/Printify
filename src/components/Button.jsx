// import React from 'react'

{/* use  : 1 */}
// function Button({children ,icon , gap , style , bgColor , variant}) {

//     console.log(bgColor)

//     const additionalStyles = {
//         gap: `${gap ? gap : 4}px`,
//         padding : "5px 14px",
//         borderRadius : "2px",
//         width : "fit-content",
//         height : "fit-content",
//         margin : "2px",
//         ...style
//         // Add any other dynamic styles here
//     };


//   if(variant === 'filled'){
//       return (
//           <div className={`flex items-center bg-[${bgColor}]`} style={{ ...additionalStyles }}>
//               {icon && <div>{icon}</div>}
//               <div>{children}</div>
//           </div>
//       )
//   }else if(variant === 'outlined'){
//       return (
//           <div className={`flex items-center border border-[${bgColor}]`} style={{ ...additionalStyles }}>
//               {icon && <div>{icon}</div>}
//               <div>{children}</div>
//           </div>
//       )
//   }else{
//       return (
//           <div className={`flex items-center bg-[${bgColor}]`} style={{ ...additionalStyles }}>
//               {icon && <div>{icon}</div>}
//               <div>{children}</div>
//           </div>
//       )
//   }
// }

// export default Button


{/* use 2 */}
// import React from 'react';

// function Button({ children, icon, gap, style, bgColor, variant }) {
//     console.log(bgColor);

//     const additionalStyles = {
//         gap: `${gap ? gap : 4}px`,
//         padding: "5px 14px",
//         borderRadius: "2px",
//         width: "fit-content",
//         height: "fit-content",
//         margin: "2px",
//         backgroundColor: variant === 'filled' ? bgColor : 'transparent',
//         border: variant === 'outlined' ? `1px solid ${bgColor ? bgColor : "#ccc"}` : 'none',
//         cursor : "pointer",
//         ...style
//     };


//     return (
//         <div className={`flex items-center`} style={{ ...additionalStyles }}>
//             {icon && <div>{icon}</div>}
//             <div>{children}</div>
//         </div>
//     );
// }

// export default Button;


{/* used one */}
import React from 'react';

function Button({ children, icon, gap, style, bgColor, variant }) {
    console.log(bgColor);

    // getting primary color from CSS variables
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();

    // seting actual background color
    const actualBgColor = bgColor === 'primary' ? primaryColor : bgColor;

    const additionalStyles = {
        gap: `${gap ? gap : 4}px`,
        padding: "8px 18px",
        borderRadius: "2px",
        width: "fit-content",
        height: "fit-content",
        margin: "2px",
        backgroundColor: variant === 'filled' ? actualBgColor : 'transparent',
        border: variant === 'outlined' ? `1px solid ${actualBgColor ? actualBgColor : "#ccc"}` : 'none',
        cursor: "pointer",
        ...style
    };

    return (
        <div className={`flex items-center`} style={{ ...additionalStyles }}>
            {icon && <div>{icon}</div>}
            <div>{children}</div>
        </div>
    );
}

export default Button;
