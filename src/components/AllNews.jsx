import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AllNews = () => {
  const [blogId, setBlogId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 5;

  const blogData = [
    {
        id: 1,
        title: "Tech Giants Lead the Charge in AI",
        description: "Discover how technology companies are embracing artificial intelligence to drive innovation and stay ahead.",
        date: "10/10/2024",
        img: "https://flowbite.com/docs/images/blog/image-1.jpg",
        fullContent: `In a groundbreaking development, major technology companies have significantly accelerated their investments in artificial intelligence, marking a new era in technological advancement. Industry leaders like Google, Microsoft, and Amazon are at the forefront of this AI revolution, each bringing unique innovations to the table.

        Key developments include:
        • Advanced natural language processing systems that can understand and generate human-like text
        • Breakthrough in computer vision technology enabling more accurate image and video recognition
        • Implementation of AI in cloud computing services, making advanced AI tools accessible to businesses of all sizes
        
        The impact of these developments is already being felt across various sectors, from healthcare to finance, with experts predicting even more transformative applications in the coming years. Market analysts estimate that the global AI market could exceed $500 billion by 2025.`,
        tags: ["Artificial Intelligence", "Technology", "Innovation"],
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "New Breakthrough in Renewable Energy",
        description: "A new milestone in renewable energy technology promises a cleaner future for the planet.",
        date: "10/09/2024",
        img: "https://flowbite.com/docs/images/blog/image-2.jpg",
        fullContent: `Scientists have achieved a remarkable breakthrough in solar panel efficiency, potentially revolutionizing the renewable energy sector. The new technology, developed through an international collaboration, shows promise in dramatically reducing the cost of solar power generation while increasing energy output.

        Technical achievements include:
        • Novel photovoltaic materials increasing efficiency by 40%
        • Enhanced energy storage capabilities using advanced battery technology
        • Innovative grid integration systems for better power distribution
        
        This development could make renewable energy more accessible and affordable for communities worldwide, potentially accelerating the global transition to clean energy. Early estimates suggest implementation could begin within the next 18 months.`,
        tags: ["Renewable Energy", "Innovation", "Climate Change"],
        readTime: "4 min read"
    },
    {
        id: 3,
        title: "Blockchain Innovations Transform Finance",
        description: "Blockchain continues to disrupt financial sectors, offering new ways of handling transactions securely.",
        date: "10/08/2024",
        img: "https://flowbite.com/docs/images/blog/image-3.jpg",
        fullContent: `The financial sector is experiencing a radical transformation as blockchain technology continues to mature and find new applications. Traditional banking institutions are now embracing blockchain solutions for everything from cross-border payments to smart contracts.

        Recent implementations include:
        • Decentralized finance (DeFi) platforms offering new investment opportunities
        • Smart contract automation reducing transaction processing times by 80%
        • Enhanced security protocols protecting against cyber threats
        
        Major banks worldwide are now allocating significant resources to blockchain integration, with several pilot programs showing promising results in reducing costs and improving transaction efficiency.`,
        tags: ["Blockchain", "Finance", "Technology"],
        readTime: "6 min read"
    },
    {
        id: 4,
        title: "Quantum Computing Reaches a New Milestone",
        description: "A breakthrough in quantum computing could revolutionize industries ranging from pharmaceuticals to logistics.",
        date: "10/07/2024",
        img: "https://flowbite.com/docs/images/blog/image-4.jpg",
        fullContent: `Quantum computing has reached a new milestone with the successful creation of the first practical quantum chip. This new chip is capable of solving problems that would take traditional supercomputers millennia to compute, opening the door to faster drug discovery, more efficient logistics, and secure communications.

        Key innovations include:
        • Improved qubit stability for more reliable calculations
        • Scalable architecture to handle more complex algorithms
        • Potential applications in cryptography and material science

        The technology still faces significant challenges, but experts believe it will eventually lead to a quantum revolution that reshapes the digital landscape.`,
        tags: ["Quantum Computing", "Technology", "Innovation"],
        readTime: "7 min read"
    },
    {
        id: 5,
        title: "Space Tourism: The Future of Travel",
        description: "Space tourism is no longer a distant dream; it's becoming a reality with new commercial spaceflights.",
        date: "10/06/2024",
        img: "https://flowbite.com/docs/images/blog/image-5.jpg",
        fullContent: `The race to space has entered a new era with the emergence of commercial space tourism. Companies like SpaceX and Blue Origin have begun offering suborbital flights to private individuals, promising a thrilling experience beyond the Earth’s atmosphere.

        Notable developments include:
        • Reduced launch costs making space tourism more affordable
        • Innovative space habitats designed for short-term stays
        • Collaborations with major entertainment brands to enhance the experience

        Experts predict that space tourism could be a multi-billion-dollar industry within the next decade, offering a new way for people to explore the final frontier.`,
        tags: ["Space Tourism", "Innovation", "Technology"],
        readTime: "5 min read"
    },
    {
        id: 6,
        title: "Robotics Revolutionizes Manufacturing",
        description: "The latest advancements in robotics are set to transform the manufacturing industry, making production more efficient.",
        date: "10/05/2024",
        img: "https://flowbite.com/docs/images/blog/image-6.jpg",
        fullContent: `Robotics technology continues to revolutionize the manufacturing industry, with robots becoming more advanced and capable of performing complex tasks. From assembling products to quality control, robots are now at the heart of modern factories.

        Key innovations include:
        • AI-driven robots that can adapt to different tasks on the fly
        • Collaborative robots working alongside human workers
        • Enhanced precision and speed in manufacturing processes

        This shift towards automation is expected to increase production efficiency and reduce costs, with some industries already reporting significant gains in profitability.`,
        tags: ["Robotics", "Manufacturing", "Technology"],
        readTime: "6 min read"
    },
    {
        id: 7,
        title: "Self-Driving Cars: The Road Ahead",
        description: "Self-driving cars are becoming a reality, with multiple companies testing autonomous vehicles on public roads.",
        date: "10/04/2024",
        img: "https://flowbite.com/docs/images/blog/image-7.jpg",
        fullContent: `Self-driving cars are set to revolutionize the way we travel, with multiple automakers and tech companies pushing the boundaries of autonomous vehicle technology. With advancements in AI and machine learning, self-driving cars are becoming increasingly reliable and capable of handling complex road conditions.

        Recent advancements include:
        • Enhanced sensors and cameras for better decision-making
        • AI systems that predict and react to unpredictable driving scenarios
        • Pilot programs being launched in major cities around the world

        Experts predict that self-driving cars could be on the roads within the next 5 years, reducing traffic accidents and making transportation more efficient.`,
        tags: ["Self-Driving Cars", "Innovation", "Technology"],
        readTime: "7 min read"
    },
    {
        id: 8,
        title: "Augmented Reality Enhances Retail Shopping",
        description: "Augmented reality (AR) is transforming the retail experience, allowing customers to try products virtually.",
        date: "10/03/2024",
        img: "https://flowbite.com/docs/images/blog/image-8.jpg",
        fullContent: `Augmented reality is becoming an essential tool for retailers, allowing customers to virtually try on clothing, test out furniture, and even see how a product will look in their own home. By integrating AR technology into shopping apps, retailers are enhancing the customer experience and driving engagement.

        Key features include:
        • Virtual fitting rooms for online clothing stores
        • AR tools for visualizing home furniture in real environments
        • Personalized shopping experiences using AR-based recommendations

        This trend is expected to grow rapidly, with analysts predicting AR could revolutionize online and in-store shopping within the next few years.`,
        tags: ["Augmented Reality", "Retail", "Technology"],
        readTime: "4 min read"
    },
    {
        id: 9,
        title: "AI in Healthcare: Transforming Patient Care",
        description: "Artificial intelligence is making strides in healthcare, improving patient outcomes through personalized medicine.",
        date: "10/02/2024",
        img: "https://flowbite.com/docs/images/blog/image-9.jpg",
        fullContent: `AI is making a huge impact on healthcare, from diagnosing diseases to personalizing treatment plans for patients. Machine learning algorithms are now able to analyze medical data faster and more accurately than humans, leading to earlier diagnoses and more effective treatments.

        Key advancements include:
        • AI-assisted diagnostics for faster identification of conditions like cancer
        • Predictive analytics that help in personalized treatment planning
        • Virtual health assistants providing medical advice and support

        The potential for AI in healthcare is limitless, with experts predicting that AI-driven solutions will become integral to patient care in the near future.`,
        tags: ["AI", "Healthcare", "Technology"],
        readTime: "6 min read"
    },
    {
        id: 10,
        title: "5G Networks: The Future of Connectivity",
        description: "5G technology promises faster speeds, lower latency, and new possibilities for industries around the world.",
        date: "10/01/2024",
        img: "https://flowbite.com/docs/images/blog/image-10.jpg",
        fullContent: `5G technology is set to revolutionize the way we connect to the internet, offering faster speeds and more reliable connections. With a focus on low latency and high bandwidth, 5G will open up new opportunities for businesses, healthcare, entertainment, and more.

        Key benefits of 5G include:
        • Ultra-fast download speeds that enable real-time video streaming and gaming
        • Enhanced connectivity for IoT devices, enabling smarter homes and cities
        • Reduced latency improving experiences for remote work and virtual reality

        As 5G networks continue to roll out worldwide, experts predict that the technology will enable new applications that were once thought impossible.`,
        tags: ["5G", "Technology", "Innovation"],
        readTime: "5 min read"
    },
    {
        id: 11,
        title: "Wearable Tech: The Next Frontier in Health Monitoring",
        description: "Wearable devices are transforming healthcare, allowing users to monitor their health in real time.",
        date: "09/30/2024",
        img: "https://flowbite.com/docs/images/blog/image-11.jpg",
        fullContent: `Wearable technology is becoming more advanced, with devices that can monitor everything from heart rate to glucose levels in real-time. These devices are revolutionizing personal healthcare, allowing users to take control of their health and detect potential issues before they become serious.

        Recent innovations include:
        • Smartwatches that monitor vital signs and send alerts for potential health concerns
        • Fitness trackers that provide detailed insights into physical activity and recovery
        • Wearables that track sleep patterns, stress levels, and even blood sugar levels

        Experts believe wearable tech will play a key role in preventative healthcare and help individuals lead healthier, longer lives.`,
        tags: ["Wearable Tech", "Health", "Innovation"],
        readTime: "5 min read"
    },
    {
        id: 12,
        title: "Gene Editing: The Cure for Genetic Diseases",
        description: "Gene editing technology is being used to treat genetic diseases, offering hope for millions.",
        date: "09/29/2024",
        img: "https://flowbite.com/docs/images/blog/image-12.jpg",
        fullContent: `Gene editing technology, particularly CRISPR, has made great strides in the medical field, offering the potential to cure genetic diseases that were previously untreatable. By editing genes at the molecular level, scientists are able to correct mutations and prevent hereditary conditions.

        Recent developments include:
        • Successful trials using CRISPR to treat sickle cell anemia
        • Advances in gene therapies for treating inherited disorders
        • Ethical discussions surrounding gene editing for non-medical purposes

        With more research, gene editing could pave the way for curing genetic diseases, offering hope to countless families around the world.`,
        tags: ["Gene Editing", "Health", "Innovation"],
        readTime: "6 min read"
    },
    {
        id: 13,
        title: "Global Warming: The Urgent Need for Action",
        description: "Climate change is accelerating, and urgent action is needed to combat its effects on the planet.",
        date: "09/28/2024",
        img: "https://flowbite.com/docs/images/blog/image-13.jpg",
        fullContent: `The effects of global warming are becoming more pronounced, with rising temperatures, extreme weather events, and melting polar ice caps. Climate scientists are calling for immediate action to reduce carbon emissions and transition to renewable energy sources.

        Key statistics include:
        • Global temperatures have risen by 1.2°C since the late 19th century
        • Extreme weather events have become more frequent, costing billions in damages
        • Melting ice caps are contributing to rising sea levels, threatening coastal communities

        Experts emphasize the need for worldwide cooperation to mitigate climate change and limit global temperature rise to 1.5°C above pre-industrial levels.`,
        tags: ["Climate Change", "Environment", "Science"],
        readTime: "7 min read"
    },
    {
        id: 14,
        title: "Next-Generation Batteries: The Future of Energy Storage",
        description: "New breakthroughs in battery technology promise to make energy storage more efficient and affordable.",
        date: "09/27/2024",
        img: "https://flowbite.com/docs/images/blog/image-14.jpg",
        fullContent: `New advancements in battery technology are set to change the way we store energy. From electric vehicles to renewable energy storage, these next-generation batteries promise to deliver greater efficiency, longer lifespans, and reduced costs.

        Recent innovations include:
        • Solid-state batteries with higher energy densities
        • Fast-charging batteries for electric vehicles
        • Recycling methods that reduce waste and lower environmental impact

        Experts predict that these advances will drive the widespread adoption of renewable energy and electric vehicles, paving the way for a more sustainable future.`,
        tags: ["Batteries", "Energy", "Technology"],
        readTime: "5 min read"
    },
    {
        id: 15,
        title: "Cybersecurity: Protecting Data in the Digital Age",
        description: "With cyber threats on the rise, organizations are strengthening their defenses to protect sensitive data.",
        date: "09/26/2024",
        img: "https://flowbite.com/docs/images/blog/image-15.jpg",
        fullContent: `As the digital landscape continues to evolve, so do the threats to sensitive data. Cybersecurity is becoming more critical than ever, with businesses and governments alike investing in cutting-edge technology to protect against hacking, data breaches, and cyberattacks.

        Key trends include:
        • The rise of AI-driven cybersecurity tools to detect and respond to threats in real-time
        • Increased focus on protecting personal data in the wake of high-profile breaches
        • International cooperation to address cybersecurity threats on a global scale

        Experts agree that cybersecurity will continue to be a top priority as digital transformation accelerates across all sectors.`,
        tags: ["Cybersecurity", "Technology", "Innovation"],
        readTime: "6 min read"
    }
];


useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = Number(queryParams.get('id'));

    if (id) {
      setBlogId(id);
      const pageNumber = Math.ceil(id / itemsPerPage); // Determine the page number based on id
      setCurrentPage(pageNumber); // Set the page
    }
  }, []); // Empty dependency array ensures this runs once on component mount

  useEffect(() => {
    // Reset the openAccordion state when page changes
    if (blogId) {
      const pageNumber = Math.ceil(blogId / itemsPerPage);
      setCurrentPage(pageNumber); // Ensure correct page is selected
      setOpenAccordion(blogId); // Open the corresponding accordion based on the id
    }
  }, [blogId]);

  // Filter blogs based on search query
  const filteredBlogs = blogData.filter(blog => {
    const searchLower = searchQuery.toLowerCase();
    return (
      blog.title.toLowerCase().includes(searchLower) ||
      blog.date.toLowerCase().includes(searchLower)
    );
  });

  const calculateTotalPages = () => Math.ceil(filteredBlogs.length / itemsPerPage);

  const getItemsForPage = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredBlogs.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const itemsOnNewPage = getItemsForPage(pageNumber);
    const isIdOnNewPage = itemsOnNewPage.some(item => item.id === blogId);
    if (!isIdOnNewPage) {
      setOpenAccordion(null); // Reset accordion if blogId is not in the new page
    } else {
      setOpenAccordion(blogId); // Keep accordion open if blogId exists on the new page
    }
  };

  // Reset to first page when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const currentItems = getItemsForPage(currentPage);
  const totalPages = calculateTotalPages();

  return (
    <div className="md:max-w-[1200px] max-w-[300px] mx-auto md:px-4 px-2">
      <div className="flex justify-between items-center mb-6">
         <div className="w-80">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title or date..."
            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
        </div>
      </div>
      
      <div className="relative flex flex-col w-full bg-white shadow-md rounded-lg">
        <div className="overflow-hidden">
          {currentItems.length > 0 ? (
            currentItems.map((blog) => (
              <div key={blog.id} className="border-b border-slate-200">
                <div className="w-full">
                  <div 
                    className={`cursor-pointer hover:bg-slate-50 transition-colors ${
                      openAccordion === blog.id ? 'bg-slate-50' : ''
                    }`}
                    onClick={() => setOpenAccordion(openAccordion === blog.id ? null : blog.id)}
                  >
                    <div className="p-4 flex justify-between items-center w-full">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <p className="block font-semibold text-lg text-slate-800">
                            {blog.title}
                          </p>
                          <span className="text-sm font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded">
                            {blog.date}
                          </span>
                        </div>
                        <p className="text-sm text-slate-500 mt-1">{blog.readTime}</p>
                      </div>
                      {openAccordion === blog.id ? 
                        <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" /> :
                        <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                      }
                    </div>

                    <div className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === blog.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="p-4 border-t border-slate-200">
                        <div className="flex  md:flex-row flex-col gap-6">
                          <img 
                            src="/api/placeholder/400/300"
                            alt={blog.title}
                            className="w-64 h-48 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-slate-600 mb-4 whitespace-pre-line">
                              {blog.fullContent}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {blog.tags?.map((tag, index) => (
                                <span 
                                  key={index}
                                  className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-slate-500">
              No results found for "{searchQuery}"
            </div>
          )}
        </div>

        {currentItems.length > 0 && (
          <div className="flex justify-between items-center px-4 py-3 border-t border-slate-200">
            <div className="text-sm text-slate-500">
              Showing <b>{(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredBlogs.length)}</b> of {filteredBlogs.length}
            </div>
            <div className="flex space-x-1">
              <button 
                className={`px-3 py-1 min-w-9 min-h-9 text-sm font-normal ${
                  currentPage === 1 
                    ? 'text-slate-300 cursor-not-allowed' 
                    : 'text-slate-500 hover:bg-slate-50 hover:border-slate-400'
                } bg-white border border-slate-200 rounded transition duration-200 ease`}
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`px-3 py-1 min-w-9 min-h-9 text-sm font-normal ${
                    currentPage === index + 1
                      ? 'text-white bg-slate-800 border-slate-800'
                      : 'text-slate-500 bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-400'
                  } border rounded transition duration-200 ease`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}

              <button 
                className={`px-3 py-1 min-w-9 min-h-9 text-sm font-normal ${
                  currentPage === totalPages
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-500 hover:bg-slate-50 hover:border-slate-400'
                } bg-white border border-slate-200 rounded transition duration-200 ease`}
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllNews;