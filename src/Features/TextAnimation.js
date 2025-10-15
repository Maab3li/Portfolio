import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { Text } from "@chakra-ui/react"

export const TextAnimation = ({children}) => {

    const ref = useRef(null)
    const isInView = useInView(ref)

    const textVariants = {
        show: {y: 0, opacity: 1},
        hidden: {y:25, opacity:0}
    }

  return (
    <motion.section
    ref={ref}
    variants={textVariants}
    initial='hidden'
    animate={isInView? 'show':'hidden'}
    transition={{duration: .5, ease:'easeInOut'}}>
        {children}
    </motion.section>
  )
}
