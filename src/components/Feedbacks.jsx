import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { testimonials } from "../constants"


const FeedBackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
}) => (
  <motion.div
  variants={fadeIn("","spring",index*0.5,0.75)}
  className="bg-black-200 p-10 rounded-3xl xs:w-[490px] w-full h-100"
  >
    <p className="text-white font-black text-[20px]">{testimonial}</p>
    
    <div className="mt-1">
    <p className="text-white tracking-wider text-[18px] ">{company}</p>
    </div>

    <div className="mt-2 flex justify-between
    items-center gap-1">
      <div className="fles-1 flex flex-col">
        <p className="text-white font-medium text-[16px]">
          <span
          className="blue-text-gradient"
          >@</span>{name}
        </p>

        <p className="mt-1 text-secondary text-[12px] d-flex flex-wrap">
          {designation} 
        </p>
      </div>
    </div>
  </motion.div>
)


const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding}
      bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Study</p>
          <h2 className={styles.sectionHeadText}>My Educations</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20
      pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial,index)=>(
          <FeedBackCard
          key={testimonial.name}
          index={index}
          {...testimonial}
           />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,"")