import PropTypes from "prop-types";

const Section = ({ title, children }) => {
   return (
      <section>

      <h1>{title}</h1>
         {children}
         
         <h2>Statistics</h2>
   </section>
   )

}

Section.propTypes = {
   title: PropTypes.string.isRequired,
   children: PropTypes.node,
}

export default Section;