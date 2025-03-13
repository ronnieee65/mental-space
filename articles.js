// Articles data stored separately from server.js
const articles = [
  {
    id: 'article1',
    title: 'Understanding Anxiety and Stress in College',
    excerpt: 'A comprehensive guide to recognizing and managing anxiety symptoms during your academic journey.',
    content: `<p>Anxiety and stress are common experiences for college students. The pressure to perform academically, maintain social relationships, manage finances, and plan for the future can create a perfect storm of stressors that may feel overwhelming.</p>
    <h2>Recognizing Anxiety Symptoms</h2>
    <p>Anxiety can manifest in various ways, including:</p>
    <ul>
      <li>Persistent worry or fear</li>
      <li>Difficulty concentrating</li>
      <li>Sleep disturbances</li>
      <li>Physical symptoms like rapid heartbeat, sweating, or shortness of breath</li>
      <li>Avoidance behaviors</li>
    </ul>
    <p>It's important to recognize these symptoms early so you can implement strategies to manage them effectively.</p>
    <h2>Effective Management Strategies</h2>
    <p>Research has shown several effective approaches to managing anxiety:</p>
    <h3>1. Mindfulness and Meditation</h3>
    <p>Practicing mindfulness helps bring awareness to the present moment, reducing rumination about the past or worry about the future. Even 5-10 minutes daily can make a significant difference.</p>
    <h3>2. Regular Physical Exercise</h3>
    <p>Exercise releases endorphins, natural mood elevators that can reduce stress and anxiety. Aim for at least 30 minutes of moderate exercise most days of the week.</p>
    <h3>3. Adequate Sleep</h3>
    <p>Sleep deprivation can exacerbate anxiety symptoms. Prioritize 7-9 hours of quality sleep by establishing a consistent sleep schedule and creating a restful environment.</p>
    <h3>4. Social Connection</h3>
    <p>Maintaining meaningful social connections provides emotional support during stressful times. Don't isolate yourself; reach out to friends, family, or support groups.</p>
    <h3>5. Academic Balance</h3>
    <p>Break large tasks into smaller, manageable steps. Use a planner to organize deadlines and create a balanced study schedule that includes breaks.</p>
    <h2>When to Seek Professional Help</h2>
    <p>If anxiety begins to interfere with your daily functioning, relationships, or academic performance, it's important to seek professional help. Most colleges offer counseling services, which are often included in student health fees.</p>
    <p>Remember that seeking help is a sign of strength, not weakness. With proper support and strategies, you can effectively manage anxiety and thrive during your college years.</p>`,
    imageUrl: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg',
    category: 'anxiety',
    author: 'Dr. Emma Wilson',
    authorAvatar: 'E',
    createdAt: new Date('2025-03-10'),
    readTime: '8 min read'
  },
  {
    id: 'article2',
    title: 'Balancing Academic and Social Life in College',
    excerpt: 'Strategies for maintaining a healthy balance between your studies and social connections.',
    content: `<p>One of the greatest challenges college students face is finding a balance between academic responsibilities and social life. This balance is crucial for overall well-being and success in both areas.</p>
    <h2>The Importance of Balance</h2>
    <p>While academic achievement is a primary goal of college education, research consistently shows that social connection and engagement are equally important for mental health and even academic success. Students who maintain a healthy social life tend to:</p>
    <ul>
      <li>Experience less stress and burnout</li>
      <li>Develop better coping mechanisms</li>
      <li>Build a support network that enhances resilience</li>
      <li>Develop essential interpersonal skills for future careers</li>
    </ul>
    <p>However, excessive socializing at the expense of academics can lead to falling behind in coursework, increased stress, and poor academic outcomes.</p>
    <h2>Strategies for Effective Balance</h2>
    <h3>1. Time Management</h3>
    <p>The foundation of balance is effective time management:</p>
    <ul>
      <li>Use a digital or physical planner to track all commitments</li>
      <li>Schedule study time as non-negotiable appointments</li>
      <li>Allocate specific times for social activities</li>
      <li>Build in buffer time between activities</li>
    </ul>
    <h3>2. Quality Over Quantity</h3>
    <p>Focus on the quality of both your study time and social interactions rather than the quantity. Two hours of focused, distraction-free studying can be more productive than four hours of distracted work. Similarly, meaningful connections with a few close friends can be more fulfilling than numerous superficial interactions.</p>
    <h3>3. Combine Activities When Possible</h3>
    <p>Look for opportunities to combine academic and social activities:</p>
    <ul>
      <li>Form study groups with classmates</li>
      <li>Attend academic events like lectures with friends</li>
      <li>Join clubs related to your academic interests</li>
    </ul>
    <h3>4. Learn to Set Boundaries</h3>
    <p>Develop the ability to say no to social invitations when necessary. True friends will understand and respect your academic priorities.</p>
    <h3>5. Practice Self-Care</h3>
    <p>Neither academics nor socializing should come at the expense of basic self-care:</p>
    <ul>
      <li>Prioritize adequate sleep (7-9 hours)</li>
      <li>Maintain regular physical activity</li>
      <li>Eat nutritious meals</li>
      <li>Schedule downtime for personal rejuvenation</li>
    </ul>
    <h2>Signs of Imbalance</h2>
    <p>Pay attention to warning signs that your balance may be off:</p>
    <ul>
      <li>Consistently falling behind in coursework</li>
      <li>Feeling socially isolated or disconnected</li>
      <li>Experiencing heightened anxiety or stress</li>
      <li>Neglecting basic self-care</li>
      <li>Feeling burned out or overwhelmed</li>
    </ul>
    <p>When you notice these signs, it's time to reassess and adjust your approach to create a healthier balance.</p>
    <p>Remember that finding the right balance is a personal journey and may require ongoing adjustment as your circumstances change throughout your college experience.</p>`,
    imageUrl: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg',
    category: 'academic',
    author: 'Prof. James Chen',
    authorAvatar: 'J',
    createdAt: new Date('2025-03-08'),
    readTime: '7 min read'
  },
  {
    id: 'article3',
    title: 'Mindfulness Techniques for Academic Success',
    excerpt: 'How mindfulness practices can improve focus, retention, and reduce test anxiety.',
    content: `<p>Mindfulness—the practice of bringing one's attention to the present moment—has gained significant recognition for its benefits in academic settings. Research from universities worldwide has demonstrated that mindfulness can enhance learning capacity, improve focus, and reduce academic anxiety.</p>
    <h2>The Science Behind Mindfulness and Learning</h2>
    <p>Studies using brain imaging have shown that regular mindfulness practice can lead to structural changes in the brain, particularly in areas associated with attention, memory, and emotional regulation. These changes translate to measurable improvements in cognitive function that directly benefit academic performance:</p>
    <ul>
      <li>Increased attention span and reduced mind-wandering</li>
      <li>Enhanced working memory capacity</li>
      <li>Improved information processing</li>
      <li>Better emotional regulation, especially during stressful periods</li>
    </ul>
    <h2>Five Mindfulness Techniques for Students</h2>
    <h3>1. Focused Breathing Before Study Sessions</h3>
    <p>Before beginning to study, take 2-3 minutes to center yourself with this simple practice:</p>
    <ul>
      <li>Sit comfortably with your back straight</li>
      <li>Close your eyes or maintain a soft gaze</li>
      <li>Breathe naturally, focusing your attention on the sensation of breath</li>
      <li>When your mind wanders (which is normal), gently redirect your focus back to your breath</li>
    </ul>
    <p>This brief practice signals to your brain that it's time to focus and creates a clear transition into your study session.</p>
    <h3>2. The Pomodoro Technique with Mindful Breaks</h3>
    <p>The Pomodoro Technique involves studying in focused intervals (typically 25 minutes) followed by short breaks. Make these breaks mindful by:</p>
    <ul>
      <li>Setting a timer for 25 minutes of focused study</li>
      <li>When the timer rings, take a 5-minute break</li>
      <li>During this break, do a brief mindfulness practice rather than checking social media</li>
      <li>Try stretching mindfully, focusing on physical sensations, or simply observing your surroundings with curiosity</li>
    </ul>
    <h3>3. Mindful Reading</h3>
    <p>Transform your reading from a passive to an active, mindful practice:</p>
    <ul>
      <li>Before reading, take a few conscious breaths and set an intention to stay focused</li>
      <li>Read one paragraph at a time, then pause</li>
      <li>Briefly reflect on what you just read before continuing</li>
      <li>When you notice your mind wandering, gently bring your attention back to the text without self-criticism</li>
    </ul>
    <h3>4. Pre-Test Anxiety Reduction</h3>
    <p>Test anxiety can significantly impair performance. Before exams, try this 5-minute practice:</p>
    <ul>
      <li>Find a quiet space before your exam</li>
      <li>Close your eyes and take 10 slow, deep breaths</li>
      <li>Scan your body for tension and consciously relax those areas</li>
      <li>Visualize yourself taking the test calmly and confidently</li>
      <li>Remind yourself that this test is just one moment in your academic journey</li>
    </ul>
    <h3>5. Mindful Note-Taking</h3>
    <p>Transform note-taking from a mechanical process to an engaged activity:</p>
    <ul>
      <li>Listen or read with full attention</li>
      <li>Instead of trying to transcribe everything, mindfully select the most important points</li>
      <li>Use your own words to summarize concepts</li>
      <li>Consider how new information connects to what you already know</li>
      <li>Periodically pause to check your level of attention</li>
    </ul>`,
    imageUrl: 'https://images.pexels.com/photos/3927387/pexels-photo-3927387.jpeg',
    category: 'mindfulness',
    author: 'Dr. Sarah Johnson',
    authorAvatar: 'S',
    createdAt: new Date('2025-03-05'),
    readTime: '9 min read'
  },
  {
    id: 'article4',
    title: 'Building Resilience for Academic Challenges',
    excerpt: 'Strategies to develop psychological resilience to overcome setbacks in your academic journey.',
    content: `<p>Resilience—the ability to adapt and bounce back from adversity—is perhaps the most important skill for academic success. College presents numerous challenges, from difficult courses to competitive environments, and resilience is what determines whether these challenges become stepping stones or stumbling blocks.</p>
    <h2>Understanding Academic Resilience</h2>
    <p>Academic resilience specifically refers to the ability to maintain high levels of achievement motivation and performance despite stressful events and conditions that put individuals at risk of doing poorly in school.</p>
    <p>Research has consistently shown that resilience is not a fixed trait but rather a set of skills and mindsets that can be developed through intentional practice and the right support systems.</p>
    <h2>The Psychology of Academic Setbacks</h2>
    <p>When faced with academic difficulties—whether a poor grade, a challenging course, or feedback that feels critical—students typically respond in one of two ways:</p>
    <ul>
      <li><strong>The fixed mindset response:</strong> "I'm not good at this subject. I don't have what it takes."</li>
      <li><strong>The growth mindset response:</strong> "This is challenging, but with effort and new strategies, I can improve."</li>
    </ul>
    <p>The difference between these responses can significantly impact academic outcomes. Students with a growth mindset are more likely to persist through challenges and ultimately succeed.</p>
    <h2>Building Your Academic Resilience Toolkit</h2>
    <h3>1. Develop a Growth Mindset</h3>
    <p>Cultivate the belief that abilities can be developed through dedication and hard work:</p>
    <ul>
      <li>View challenges as opportunities to grow</li>
      <li>Replace "I can't do this" with "I can't do this yet"</li>
      <li>Focus on the process (effort, strategies) rather than just outcomes</li>
      <li>Embrace feedback as valuable information for improvement</li>
    </ul>
    <h3>2. Establish Strong Support Networks</h3>
    <p>Research consistently shows that social support is a key factor in resilience:</p>
    <ul>
      <li>Connect with peers facing similar challenges</li>
      <li>Build relationships with professors and teaching assistants</li>
      <li>Utilize campus resources like tutoring centers and academic advisors</li>
      <li>Maintain connections with supportive family and friends</li>
    </ul>
    <h3>3. Develop Effective Coping Strategies</h3>
    <p>Have a repertoire of healthy ways to manage stress and setbacks:</p>
    <ul>
      <li>Practice self-compassion rather than self-criticism</li>
      <li>Engage in physical activity to reduce stress</li>
      <li>Use mindfulness techniques to stay present-focused</li>
      <li>Maintain perspective by remembering your larger goals</li>
    </ul>
    <h3>4. Build Problem-Solving Skills</h3>
    <p>Approach challenges systematically:</p>
    <ul>
      <li>Clearly define the problem you're facing</li>
      <li>Brainstorm multiple potential solutions</li>
      <li>Evaluate the pros and cons of each approach</li>
      <li>Implement your chosen strategy and adjust as needed</li>
      <li>Reflect on what works and what doesn't</li>
    </ul>
    <h3>5. Practice Academic Self-Regulation</h3>
    <p>Develop the ability to manage your learning effectively:</p>
    <ul>
      <li>Set specific, achievable goals</li>
      <li>Monitor your progress regularly</li>
      <li>Adjust your strategies based on feedback and results</li>
      <li>Maintain motivation by connecting coursework to larger purposes</li>
    </ul>
    <h2>Practical Exercise: Resilience Journal</h2>
    <p>Start a resilience journal where you record:</p>
    <ul>
      <li>Academic challenges you face</li>
      <li>Your initial emotional response</li>
      <li>The growth mindset perspective on this challenge</li>
      <li>Specific actions you can take to address the situation</li>
      <li>What you learned from the experience</li>
    </ul>
    <p>Reviewing this journal periodically will help you recognize patterns, track your growth, and reinforce your capacity for resilience.</p>
    <p>Remember that developing resilience is an ongoing process. Each challenge you face and overcome strengthens your ability to handle future difficulties, not just in academics but throughout your life.</p>`,
    imageUrl: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
    category: 'resilience',
    author: 'Dr. Michael Torres',
    authorAvatar: 'M',
    createdAt: new Date('2025-03-01'),
    readTime: '10 min read'
  },
  {
    id: 'article5',
    title: 'Digital Detox: Improving Focus in a Distracted World',
    excerpt: 'How taking breaks from technology can enhance your mental clarity and academic performance.',
    content: `<p>In today's hyperconnected world, the average college student spends between 8-10 hours daily on digital devices. While technology offers valuable educational resources, excessive screen time and constant connectivity can significantly impact focus, sleep quality, and overall mental wellbeing.</p>
    <h2>The Digital Attention Crisis</h2>
    <p>Recent neuroscience research reveals concerning findings about how constant digital consumption affects our brains:</p>
    <ul>
      <li>Attention spans have decreased from an average of 12 seconds in 2000 to just 8 seconds today</li>
      <li>The average student checks their phone 80-150 times daily</li>
      <li>Task-switching from study to digital distractions can reduce learning effectiveness by up to 40%</li>
      <li>Blue light from screens disrupts melatonin production, affecting sleep quality</li>
    </ul>
    <p>For students, these effects translate to difficulty concentrating during lectures, less efficient study sessions, and challenges with deep learning and retention.</p>
    <h2>Benefits of Digital Detox for Students</h2>
    <p>A digital detox—intentionally taking breaks from technology—can provide numerous benefits:</p>
    <h3>1. Enhanced Focus and Concentration</h3>
    <p>Studies show that even brief technology breaks can reset attention spans and improve concentration. Students who implement structured digital detox periods report being able to study for longer periods without feeling mentally fatigued.</p>
    <h3>2. Improved Memory Consolidation</h3>
    <p>The brain needs periods of rest and reflection to properly process and store information. Constant input from digital sources prevents this crucial consolidation process. Digital breaks allow for the mental space needed to integrate new knowledge.</p>
    <h3>3. Better Sleep Quality</h3>
    <p>Reducing screen time, especially in the evening, helps normalize melatonin production, leading to better sleep quality. Improved sleep directly correlates with better academic performance and information retention.</p>
    <h3>4. Reduced Stress and Anxiety</h3>
    <p>Constant connectivity creates a persistent state of alertness that can elevate stress hormones. Regular digital breaks help lower stress levels and reduce social media-induced anxiety and FOMO (fear of missing out).</p>
    <h3>5. Enhanced Creative Thinking</h3>
    <p>Boredom—the state we often try to escape through digital distraction—is actually critical for creative thinking. When your mind has space to wander, it makes unexpected connections and generates novel insights.</p>
    <h2>Practical Digital Detox Strategies for Students</h2>
    <h3>1. Start With Small, Manageable Detox Periods</h3>
    <p>Begin with realistic technology breaks:</p>
    <ul>
      <li>Study sessions: Put your phone in another room or use apps that block distracting websites/apps for 50-90 minute periods</li>
      <li>Meal times: Establish a "no phones at the table" rule</li>
      <li>First/last hour of the day: Avoid screens for the first and last hour of your day</li>
    </ul>
    <h3>2. Create Phone-Free Zones</h3>
    <p>Designate specific locations as technology-free:</p>
    <ul>
      <li>Your bedroom (especially important for sleep quality)</li>
      <li>Study spaces</li>
      <li>Natural environments like parks or campus green spaces</li>
    </ul>
    <h3>3. Use Technology to Limit Technology</h3>
    <p>Leverage tools designed to help manage digital consumption:</p>
    <ul>
      <li>Screen time tracking apps that reveal your actual usage patterns</li>
      <li>Website and app blockers during designated study times</li>
      <li>Turn off non-essential notifications permanently</li>
      <li>Set social media time limits using built-in phone features</li>
    </ul>
    <h3>4. Implement a Weekly Digital Sabbath</h3>
    <p>Choose a regular 12-24 hour period (perhaps a Sunday) for a more extended digital break:</p>
    <ul>
      <li>Inform friends and family you'll be offline</li>
      <li>Plan engaging offline activities in advance</li>
      <li>Notice how your thoughts and attention shift during this time</li>
    </ul>
    <h3>5. Find Accountability Partners</h3>
    <p>Digital detox is easier with support:</p>
    <ul>
      <li>Study with friends who share similar goals for focused attention</li>
      <li>Create a phone stack during social gatherings (everyone stacks their phones, first to check pays a penalty)</li>
      <li>Join campus groups focused on mindfulness or distraction-free activities</li>
    </ul>
    <h2>Measuring Success</h2>
    <p>The goal isn't to eliminate technology but to establish a healthier relationship with it. Track these metrics to gauge improvement:</p>
    <ul>
      <li>Ability to focus during study sessions</li>
      <li>Quality of sleep and morning alertness</li>
      <li>Time needed to complete assignments</li>
      <li>Stress and anxiety levels</li>
      <li>Overall satisfaction with how you spend your time</li>
    </ul>
    <p>Remember that digital detox is not about deprivation but about reclaiming your attention and directing it toward what truly matters in your academic and personal life.</p>`,
    imageUrl: 'https://images.pexels.com/photos/3428272/pexels-photo-3428272.jpeg',
    category: 'digital-wellness',
    author: 'Prof. Leila Rahman',
    authorAvatar: 'L',
    createdAt: new Date('2025-02-27'),
    readTime: '8 min read'
  },
  {
    id: 'article6',
    title: 'Cultural Identity and Mental Health in College',
    excerpt: 'Navigating the intersection of cultural background and psychological wellbeing during the university years.',
    content: `<p>College represents a significant period of identity exploration and formation for many young adults. For students from diverse cultural backgrounds, this process often involves navigating the complex intersection between their cultural identity and mental health.</p>
    <h2>The Cultural Dimensions of Mental Health</h2>
    <p>Mental health concepts and care approaches have historically been developed within Western cultural frameworks. However, how mental health is understood, expressed, and addressed varies significantly across cultures:</p>
    <ul>
      <li>Some cultures emphasize collective wellbeing over individual mental health</li>
      <li>Expressions of distress may be primarily somatic (physical) rather than emotional in certain cultural contexts</li>
      <li>Help-seeking behaviors are strongly influenced by cultural norms and stigma</li>
      <li>Family involvement in mental health decisions differs dramatically across cultures</li>
    </ul>
    <p>Understanding these differences is crucial for students navigating their mental health within multicultural environments.</p>
    <h2>Common Challenges at the Cultural-Mental Health Intersection</h2>
    <h3>1. Acculturative Stress</h3>
    <p>Many students experience stress resulting from adapting to a new cultural environment. This may involve:</p>
    <ul>
      <li>Adjusting to different social norms and communication styles</li>
      <li>Navigating language barriers or accent discrimination</li>
      <li>Balancing heritage cultural values with those of the mainstream campus culture</li>
      <li>Managing family expectations while adapting to new environments</li>
    </ul>
    <h3>2. Cultural Identity Development</h3>
    <p>College often accelerates cultural identity exploration, which can involve:</p>
    <ul>
      <li>Questioning previously unexamined cultural beliefs and practices</li>
      <li>Experiencing pride in cultural heritage alongside potential marginalization</li>
      <li>Navigating between multiple cultural identities and contexts</li>
      <li>Developing a cohesive sense of self that integrates various cultural influences</li>
    </ul>
    <h3>3. Cultural Stigma Around Mental Health</h3>
    <p>Many students come from backgrounds where mental health issues carry significant stigma:</p>
    <ul>
      <li>Mental health challenges may be viewed as personal weakness or moral failure</li>
      <li>Seeking help might be perceived as bringing shame to one's family</li>
      <li>Some communities emphasize "staying strong" or relying solely on family/faith rather than professional help</li>
      <li>Mental health vocabulary may not have direct translations in some languages</li>
    </ul>
    <h3>4. Discrimination and Microaggressions</h3>
    <p>Experiences of prejudice and subtle forms of discrimination can significantly impact mental health:</p>
    <ul>
      <li>Racial/ethnic microaggressions in classroom or social settings</li>
      <li>Having to represent one's entire cultural group ("spokesperson pressure")</li>
      <li>Encountering stereotypes that affect academic or social interactions</li>
      <li>Navigating systemic barriers that disproportionately affect certain groups</li>
    </ul>
    <h2>Strategies for Navigating Cultural Identity and Mental Health</h2>
    <h3>1. Develop Cultural Identity Awareness</h3>
    <p>Self-understanding is the foundation for navigating these complex intersections:</p>
    <ul>
      <li>Reflect on your cultural values and how they shape your worldview</li>
      <li>Identify aspects of your cultural background that provide strength and resilience</li>
      <li>Recognize areas where cultural expectations may create tension or stress</li>
      <li>Understand how your cultural identity influences your approach to mental health</li>
    </ul>
    <h3>2. Find Culturally Responsive Support</h3>
    <p>Seek resources that acknowledge and respect your cultural background:</p>
    <ul>
      <li>Look for mental health professionals who have cultural competence or shared cultural understanding</li>
      <li>Connect with campus cultural centers that offer supportive communities</li>
      <li>Join cultural student organizations that provide belonging and understanding</li>
      <li>Seek out mentors who have successfully navigated similar cultural-mental health intersections</li>
    </ul>
    <h3>3. Build Bicultural Competence</h3>
    <p>Develop the ability to function effectively in both your heritage culture and the campus environment:</p>
    <ul>
      <li>Learn to code-switch between different cultural contexts when appropriate</li>
      <li>Create flexible boundaries that protect your wellbeing while respecting cultural values</li>
      <li>Identify which aspects of different cultures you want to integrate into your identity</li>
      <li>Practice self-compassion during this complex navigation process</li>
    </ul>
    <h3>4. Engage in Community Education</h3>
    <p>Consider ways to address cultural stigma around mental health:</p>
    <ul>
      <li>Share information about mental health in culturally relevant ways</li>
      <li>Use terminology and frameworks that resonate with your cultural community</li>
      <li>Highlight connections between mental and physical health</li>
      <li>Emphasize how addressing mental health supports valued cultural goals like academic success and family wellbeing</li>
    </ul>
    <h2>Practical Exercise: Cultural Identity and Mental Health Reflection</h2>
    <p>Take time to reflect on these questions:</p>
    <ol>
      <li>What messages about mental health did I receive from my cultural background?</li>
      <li>How do these messages influence my willingness to acknowledge mental health challenges or seek help?</li>
      <li>What cultural strengths and resources can I draw upon for resilience?</li>
      <li>What would culturally responsive mental health support look like for me?</li>
      <li>How can I honor important aspects of my cultural identity while taking care of my mental health?</li>
    </ol>
    <p>Remember that integrating cultural identity and mental health is an ongoing, dynamic process. Finding this balance is not just about managing challenges but can ultimately be a source of strength, resilience, and a more authentic sense of self.</p>`,
    imageUrl: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
    category: 'cultural-awareness',
    author: 'Dr. Aisha Patel',
    authorAvatar: 'A',
    createdAt: new Date('2025-02-25'),
    readTime: '9 min read'
  }
];

// Function to get all articles
function getArticles() {
  return articles;
}

// Function to get articles by category
function getArticlesByCategory(category) {
  if (!category || category === 'all') {
      return articles;
  }
  try {
      return articles.filter(article => article.category === category);
  } catch (error) {
      console.error("Error filtering articles by category:", error);
      return [];
  }
}

// Function to get article by ID
function getArticleById(id) {
  try {
      return articles.find(article => article.id === id);
  } catch (error) {
      console.error("Error finding article by ID:", error);
      return null;
  }
}

// Export functions if running in Node.js environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
      getArticles,
      getArticlesByCategory,
      getArticleById
  };
}