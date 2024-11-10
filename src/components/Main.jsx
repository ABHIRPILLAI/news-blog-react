// Main.jsx

import React, { useEffect, useRef } from 'react';
import BlogCard from './BlogCard';
 
function Main() {
    const blogData = [
        {
            id: 1,
            title: "Tech Giants Lead the Charge in AI",
            description: "Discover how technology companies are embracing artificial intelligence to drive innovation and stay ahead.",
            date: "10/10/2024",
            img: "https://flowbite.com/docs/images/blog/image-1.jpg",
        },
        {
            id: 2,
            title: "New Breakthrough in Renewable Energy",
            description: "A new milestone in renewable energy technology promises a cleaner future for the planet.",
            date: "10/09/2024",
            img: "https://flowbite.com/docs/images/blog/image-2.jpg",
        },
        {
            id: 3,
            title: "Blockchain Innovations Transform Finance",
            description: "Blockchain continues to disrupt financial sectors, offering new ways of handling transactions securely.",
            date: "10/08/2024",
            img: "https://flowbite.com/docs/images/blog/image-3.jpg",
        },
        {
            id: 4,
            title: "Quantum Computing Reaches a New Milestone",
            description: "From wearable devices to telemedicine, explore the tech that’s transforming healthcare.",
            date: "10/07/2024",
            img: "https://flowbite.com/docs/images/blog/image-1.jpg",
        },
        {
            id: 5,
            title: "Space Tourism: The Future of Travel",
            description: "Autonomous vehicles are closer than ever to becoming a common sight on our roads.",
            date: "10/06/2024",
            img: "https://flowbite.com/docs/images/blog/image-2.jpg",
        },
        {
            id: 6,
            title: "Robotics Revolutionizes Manufacturing",
            description: "With increasing cyber threats, businesses are investing heavily in cybersecurity.",
            date: "10/05/2024",
            img: "https://flowbite.com/docs/images/blog/image-3.jpg",
        },
        {
            id: 7,
            title: "Self-Driving Cars: The Road Ahead",
            description: "Quantum computing may reshape technology as we know it in the next decade.",
            date: "10/04/2024",
            img: "https://flowbite.com/docs/images/blog/image-1.jpg",
        },
        {
            id: 8,
            title: "Augmented Reality Enhances Retail Shopping",
            description: "The global rollout of 5G is transforming the internet, making it faster and more accessible.",
            date: "10/03/2024",
            img: "https://flowbite.com/docs/images/blog/image-2.jpg",
        },
        {
            id: 9,
            title: "AI in Healthcare: Transforming Patient Care",
            description: "Innovative startups are challenging established industries with bold, new ideas.",
            date: "10/02/2024",
            img: "https://flowbite.com/docs/images/blog/image-3.jpg",
        },
        {
            id: 10,
            title: "5G Networks: The Future of Connectivity",
            description: "Space exploration has reached new heights, with private companies joining the race.",
            date: "10/01/2024",
            img: "https://flowbite.com/docs/images/blog/image-1.jpg",
        },
        {
            id: 11,
            title: "Wearable Tech: The Next Frontier in Health Monitoring",
            description: "Artificial intelligence is transforming the healthcare industry, improving diagnostics and treatment.",
            date: "09/30/2024",
            img: "https://flowbite.com/docs/images/blog/image-2.jpg",
        },
        {
            id: 12,
            title: "Gene Editing: The Cure for Genetic Diseases",
            description: "Companies are pushing the boundaries of technology to make autonomous vehicles safe and reliable.",
            date: "09/29/2024",
            img: "https://flowbite.com/docs/images/blog/image-3.jpg",
        },
        {
            id: 13,
            title: "Global Warming: The Urgent Need for Action",
            description: "Electric vehicles are gaining popularity as they become more affordable and efficient.",
            date: "09/28/2024",
            img: "https://flowbite.com/docs/images/blog/image-1.jpg",
        },
        {
            id: 14,
            title: "Next-Generation Batteries: The Future of Energy Storage",
            description: "Wearable tech helps users monitor health, improve fitness, and manage wellbeing effectively.",
            date: "09/27/2024",
            img: "https://flowbite.com/docs/images/blog/image-2.jpg",
        },
        {
            id: 15,
            title: "Cybersecurity: Protecting Data in the Digital Age",
            description: "New software solutions are empowering remote workers to stay connected and productive.",
            date: "09/26/2024",
            img: "https://flowbite.com/docs/images/blog/image-3.jpg",
        },
         
    ];

    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        let scrollInterval;

        const scrollContent = () => {
            if (container) {
                const maxScroll = container.scrollWidth - container.clientWidth;
                if (container.scrollLeft < maxScroll) {
                    container.scrollLeft += 1; // Adjust speed of scrolling here
                } else {
                    container.scrollLeft = 0; // Reset position once the end is reached
                }
            }
        };

        scrollInterval = setInterval(scrollContent, 16); // Approximately 60fps

        // Clean up the interval when the component unmounts
        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <>
         <div className='md:pt-[115px] pt-[70px] pb-[70px] px-[25px] xl:px-[50px]'>

<p class="kanit font-medium text-[40px] md:text-[64px] text-[#313131] md:leading-[73px] mb-[40px]" data-astro-cid-q4lh5t42="">
Latest News
</p>
        <div className="scroll-container overflow-x-auto" ref={scrollContainerRef}>
                        <div className="scroll-content w-full">
                {blogData.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        title={blog.title}
                        description={blog.description}
                        date={blog.date}
                        image={blog.img}
                        link={blog.id}
                    />
                ))}
            </div>
        </div>

        <div className='flex justify-center mt-3'>
        <a
        href='/all-news?id=1'
  style={{
    background: "linear-gradient(90deg, #438538 0%, #b7daba 100%)",
  }}
  type="button"
  className="text-white button-gradient focus:outline-none font-normal rounded-lg text-lg px-[32px] py-2 text-center md:mt-0"
>
  View All News
</a>
        </div>
        </div></>
     );
}

export default Main;
