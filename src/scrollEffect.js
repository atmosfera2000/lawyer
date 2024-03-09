export default function scrollEffect(elements, animateClass) {

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {      
            entry.target.classList.add(animateClass)
            observer.unobserve(entry.target)
          }
        })
    }

    const options = {
        threshold: 0.1
    }


    const observer = new IntersectionObserver(callback, options)
    
    elements.forEach((element) => observer.observe(element))
}