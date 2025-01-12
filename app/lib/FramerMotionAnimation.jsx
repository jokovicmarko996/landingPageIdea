import { motion } from "framer-motion";

const FramerMotionAnimation = ({ children, y, x, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: y, x: x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: delay ? delay : 0.8 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
{/* <FramerMotionAnimation y={50} delay={0.8}></FramerMotionAnimation> */}

export default FramerMotionAnimation;
