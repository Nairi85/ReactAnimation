// import { motion } from 'framer-motion';

// const Animation3 = () => {
//     const variants = {
//       hidden: { opacity: 0, x: -100 },
//       visible: { opacity: 1, x: 0 },
//       toped:{scale:1.5},
//     }

//     return (
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={variants}
//         transition={{ duration: 2 }}
//         whileTap="toped"
//       >
//         Hello, world!
//       </motion.div>
//     )
//   }

//   export default Animation3



// import { useState } from 'react'
// import { motion } from 'framer-motion'

// const  Animation3 = () => {
//   const [isAnimating, setIsAnimating] = useState(false)


//   const handleClick = () => {
//     setIsAnimating(!isAnimating)
//   }


//   const animation = {
//     scale: isAnimating ? 1.2 : 1,
//     rotate: isAnimating ? 180 : 0,
//   }


//   return (
//     <motion.button
//      // transition={{duration:2}}
//       onClick={handleClick}
//       animate={animation}
//     >
//       Click me!
//     </motion.button>
//   )
// }

// export default Animation3