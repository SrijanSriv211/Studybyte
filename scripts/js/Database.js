function Database()
{
    const Index = [
        {
            "Title": "Onestate Coding",
            "URL": "https://www.youtube.com/channel/UCrphqZNc_r-KsOTeTKH5hwA"
        },
        {
            "Title": "How to make a Chatbot using Html, Css and JavaScript ...",
            "URL": "https://www.youtube.com/watch?v=AuThE5bxpDE"
        },
        {
            "Title": "How To Make Your Windows 10 Look Beautiful??? | Windows ...",
            "URL": "https://www.youtube.com/watch?v=4wfpfx_6p3A"
        },
        {
            "Title": "Windows 365 - Explained in Hindi - 2021 | Onestate Coding",
            "URL": "https://www.youtube.com/watch?v=O7OROTmhJwo"
        },
        {
            "Title": "POTENTIAL CALCULATOR FOR LUBRICANT MARKET ...",
            "URL": "https://www.youtube.com/watch?v=pUBhBnJyfZY"
        },
        {
            "Title": "How to Use Windows 10 in built Video Editor | Onestate Coding ...",
            "URL": "https://www.youtube.com/watch?v=-HkwarMWn3I"
        },
        {
            "Title": "Onestate Coding - How to Update your Windows Drivers - YouTube",
            "URL": "https://www.youtube.com/watch?v=_yi_BJXSAVA"
        },
        {
            "Title": "Top 5 Amazing GTA San Andreas Facts in Hindi!!! | Onestate ...",
            "URL": "https://www.youtube.com/watch?v=VbxBUdJApQs"
        },
        {
            "Title": "Top 5 Awesome Fall Guys Facts | Onestate Coding - YouTube",
            "URL": "https://www.youtube.com/watch?v=y5sRDdZrJIY"
        },
        {
            "Title": "How to make chatbot using html, css and javascript | Onestate ...",
            "URL": "https://www.youtube.com/watch?v=tHOQGF8laTc"
        },
        {
            "Title": "How to Create a Random, Strong Password Generator using …",
            "URL": "https://www.youtube.com/watch?v=MUdpWrw_y-k"
        },
        {
            "Title": "Light-Lens/Studybyte: Studybyte search engine. - GitHub",
            "URL": "https://github.com/Light-Lens/Studybyte"
        },
        {
            "Title": "Discussions · Light-Lens/Studybyte · GitHub",
            "URL": "https://github.com/Light-Lens/Studybyte/discussions"
        },
        {
            "Title": "Pull requests · Light-Lens/Studybyte · GitHub",
            "URL": "https://github.com/Light-Lens/Studybyte/pulls"
        },
        {
            "Title": "Light-Lens (Light-Lens) · GitHub",
            "URL": "https://github.com/Light-Lens"
        },
        {
            "Title": "Light-Lens/Studybyte - githubmemory",
            "URL": "https://githubmemory.com/repo/Light-Lens/Studybyte"
        },
        {
            "Title": "Studybyte",
            "URL": "https://light-lens.github.io/Studybyte"
        },
        {
            "Title": "Light-Lens/AOs: AOs is a terminal based Operating ... - GitHub",
            "URL": "https://github.com/Light-Lens/AOs"
        },
        {
            "Title": "Light-Lens/Corelet: Corelet is an antivirus! - GitHub",
            "URL": "https://github.com/Light-Lens/Corelet"
        },
        {
            "Title": "Light-Lens/Hexa: Hexa is an open-source game ... - GitHub",
            "URL": "https://github.com/Light-Lens/Hexa"
        },
        {
            "Title": "Light-Lens/POTENTIAL-CALCULATOR: POTENTIAL ... - GitHub",
            "URL": "https://github.com/Light-Lens/POTENTIAL-CALCULATOR"
        },
        {
            "Title": "Use things with one Quote missing · Issue #2 · Light-Lens ...",
            "URL": "https://github.com/Light-Lens/Glass/issues/2"
        },
        {
            "Title": "GitHub - Wikipediahttps://en.wikipedia.org › wiki › GitHub",
            "URL": "https://en.wikipedia.org/wiki/GitHub"
        },
        {
            "Title": "GitHub · GitHub",
            "URL": "https://github.com/Github"
        },
        {
            "Title": "GitHub: Where the world builds software · GitHub",
            "URL": "https://github.com"
        },
        {
            "Title": "GitHub Desktop | Simple collaboration from your desktop",
            "URL": "https://desktop.github.com"
        },
        {
            "Title": "GitHub Documentation",
            "URL": "https://docs.github.com/en"
        },
        {
            "Title": "Home | GitHub Resources",
            "URL": "https://resources.github.com"
        },
        {
            "Title": "GitHub Pages | Websites for you and your projects, hosted ...",
            "URL": "https://pages.github.com"
        },
        {
            "Title": "GitHub Copilot · Your AI pair programmer",
            "URL": "https://copilot.github.com"
        },
        {
            "Title": "The GitHub Blog | Updates, ideas, and inspiration from ...",
            "URL": "https://github.blog"
        },
        {
            "Title": "Google",
            "URL": "http://www.google.com"
        },
        {
            "Title": "Google India",
            "URL": "http://www.google.co.in"
        },
        {
            "Title": "Google - About Google, Our Culture & Company News",
            "URL": "https://about.google"
        },
        {
            "Title": "Browse All of Google's Products & Services - Google",
            "URL": "https://about.google/products"
        },
        {
            "Title": "Google Account",
            "URL": "https://account.google.com"
        },
        {
            "Title": "Gmail - Google",
            "URL": "https://www.google.com/gmail"
        },
        {
            "Title": "Google - YouTube",
            "URL": "https://www.youtube.com/channel/UCK8sQmJBp8GCxrOtXWBpyEA"
        },
        {
            "Title": "Google - Wikipedia",
            "URL": "https://en.wikipedia.org/wiki/Google"
        },
        {
            "Title": "Google Trends",
            "URL": "https://trends.google.com/trends/?geo=US"
        },
        {
            "Title": "Cloud Computing Services | Google Cloud",
            "URL": "https://cloud.google.com"
        },
        {
            "Title": "Google Classroom",
            "URL": "https://classroom.google.com/u/1/h"
        },
        {
            "Title": "Sign in - Google Accounts",
            "URL": "https://classroom.google.com"
        },
        {
            "Title": "Classroom | Google for Education",
            "URL": "https://edu.google.com/intl/ALL_in/products/classroom"
        },
        {
            "Title": "YouTube",
            "URL": "https://www.youtube.com"
        },
        {
            "Title": "YouTube - Wikipedia",
            "URL": "https://en.wikipedia.org/wiki/YouTube"
        },
        {
            "Title": "YouTube India",
            "URL": "http://in.youtube.com"
        },
        {
            "Title": "YouTube Music",
            "URL": "https://music.youtube.com"
        },
        {
            "Title": "#shorts - YouTube",
            "URL": "https://www.youtube.com/hashtag/shorts"
        },
        {
            "Title": "YouTube Official Blog",
            "URL": "https://blog.youtube"
        },
        {
            "Title": "Learn CBSE",
            "URL": "https://www.learncbse.in"
        },
        {
            "Title": "Learn CBSE | CBSE Syllabus | Learn CBSE Study Material ...",
            "URL": "http://www.learncbse.com"
        },
        {
            "Title": "Learn CBSE - Sarkari Result",
            "URL": "https://sarkariresult9curry.com/learn-cbse"
        },
        {
            "Title": "NCERT Books for all Classes 12, 11, 10, 9, 8, 7, 6, 5, 4 ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-books"
        },
        {
            "Title": "MCQ Questions of all subjects for Classes 6, 7, 8, 9, 10 ... - Learn CBSE",
            "URL": "https://www.learncbse.in/mcq-questions"
        },
        {
            "Title": "NCERT Books for Class 9 - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-books-for-class-9"
        },
        {
            "Title": "NCERT Solutions for Class 10 English Updated for 2020-21 - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-10-english-literature"
        },
        {
            "Title": "NCERT Solutions for Class 10 Maths PDF Updated for 2021-22 - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-class-10-math-solutions"
        },
        {
            "Title": "CBSE Books for Class 1 to 12 All Subject - Download free ... - byjus.com",
            "URL": "https://byjus.com/cbse/cbse-books"
        },
        {
            "Title": "E learning courses for CBSE board | Video lessons, notes ...",
            "URL": "https://learnfatafat.com/cbse"
        },
        {
            "Title": "LearnNext+: Education site for CBSE, ICSE, State Boards ...",
            "URL": "https://www.learnnext.com"
        },
        {
            "Title": "CBSE - Central Board of Secondary Education",
            "URL": "https://www.cbse.gov.in"
        },
        {
            "Title": "Printable CBSE Worksheets for LKG, UKG, Class 1 to Class ...",
            "URL": "https://www.worksheetsbuddy.com/printable-worksheets-cbse"
        },
        {
            "Title": "Learn Cbse Sample Papers Class 10 Hindi - examplspaper",
            "URL": "https://examplspaper.blogspot.com/2021/07/learn-cbse-sample-papers-class-10-hindi.html"
        },
        {
            "Title": "CBSE Board - Get Free CBSE Board Exam Study Materials - Byjus",
            "URL": "https://byjus.com/cbse"
        },
        {
            "Title": "CBSE Notes for Quick Revision | CBSE Short Notes for ... - Learn Insta",
            "URL": "https://www.learninsta.com/cbse-notes"
        },
        {
            "Title": "NCERT Solutions for CBSE Class 10 Maths TopperLearning",
            "URL": "https://www.topperlearning.com/ncert-solutions/cbse-class-10-mathematics"
        },
        {
            "Title": "CBSE Class 7 Solutions - Study Material, Notes, Videos ... - BYJUS",
            "URL": "https://byjus.com/cbse/class-7"
        },
        {
            "Title": "CBSE School in Pune, Best CBSE School in Pune, CBSE ...",
            "URL": "https://pune.globalindianschool.org/curricula/cbse"
        },
        {
            "Title": "CBSE Sample Papers 2015 to 2021 - BYJU'S Online learning ... - BYJUS",
            "URL": "https://byjus.com/cbse/cbse-sample-papers"
        },
        {
            "Title": "CBSE Class 12 Sample Papers 2022 - Learn Math Formula ...",
            "URL": "https://learn.sarthaks.com/cbse-sample-papers-class-12"
        },
        {
            "Title": "CBSE Class 10 E Learning Courses Maths, Science, SST By ...",
            "URL": "https://learnfatafat.com/cbse-class-10"
        },
        {
            "Title": "NCERT Solutions for CBSE Class 10 English TopperLearning",
            "URL": "https://www.topperlearning.com/ncert-solutions/cbse-class-10-english"
        },
        {
            "Title": "Learn Insta - RD Sharma Solutions , RS Aggarwal Solutions ... - Learninsta",
            "URL": "https://www.learninsta.com"
        },
        {
            "Title": "Brainly.in - For students. By students.",
            "URL": "https://brainly.in"
        },
        {
            "Title": "Brainly - Wikipedia",
            "URL": "https://en.wikipedia.org/wiki/Brainly"
        },
        {
            "Title": "Brainly - Crunchbase Company Profile & Funding",
            "URL": "https://www.crunchbase.com/organization/brainly-com"
        },
        {
            "Title": "Brainly - For students. By students.",
            "URL": "https://brainly.com"
        },
        {
            "Title": "Tiwari Academy",
            "URL": "https://www.tiwariacademy.com"
        },
        {
            "Title": "Tiwari Academy - A Step towards free Education",
            "URL": "https://www.tiwariacademy.in"
        },
        {
            "Title": "Tiwari Academy - YouTube",
            "URL": "https://www.youtube.com/channel/UClc7F_LEMPH2VRCxJwvvrlg"
        },
        {
            "Title": "NCERT Solutions for Class 6, 7, 8, 9, 10, 11, 12 (in PDF)",
            "URL": "https://www.tiwariacademy.in/about"
        },
        {
            "Title": "About - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/about-us"
        },
        {
            "Title": "Questions – Page 1534 – Tiwari Academy Discussion",
            "URL": "https://www.tiwariacademy.com/discussion/questions/page/1534"
        },
        {
            "Title": "NCERT Solutions for Class 10 - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-10"
        },
        {
            "Title": "NCERT Solutions for Class 9 - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-9"
        },
        {
            "Title": "NCERT Books for Class 11 All Subjects - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-books/class-11"
        },
        {
            "Title": "NCERT Solutions and UP Board Solution for Class 12, 11, 10 ... - Tiwari Academy",
            "URL": "https://www.tiwariacademy.in/ncert-solutions"
        },
        {
            "Title": "Questions - Page 1540 - Tiwari Academy Discussion",
            "URL": "https://www.tiwariacademy.com/discussion/questions/page/1540"
        },
        {
            "Title": "BYJUS",
            "URL": "https://byjus.com"
        },
        {
            "Title": "BYJUS - YouTube",
            "URL": "https://www.youtube.com/channel/UCkDw-LPU1Nnd2WRsfnDbUcA"
        },
        {
            "Title": "BYJUS - Wikipedia",
            "URL": "https://en.wikipedia.org/wiki/BYJU'S"
        },
        {
            "Title": "Byju's Online learning Programs For K3, K10, K12, NEET",
            "URL": "https://learn.byjus.com"
        },
        {
            "Title": "Byju's - Login/Sign up",
            "URL": "https://students.byjus.com"
        },
        {
            "Title": "BYJU'S FutureSchool| Live Online Coding for Kids",
            "URL": "https://www.byjusfutureschool.com"
        },
        {
            "Title": "BYJU'S - YouTube",
            "URL": "https://www.youtube.com/user/byjusclasses"
        },
        {
            "Title": "Learn Insta",
            "URL": "https://learninsta.tumblr.com"
        },
        {
            "Title": "NCERT Solutions for Class 10 - Learn Insta",
            "URL": "https://www.learninsta.com/ncert-solutions-for-class-10"
        },
        {
            "Title": "RS Aggarwal Solutions Class 10 (2020-2021 Edition) - Learn Insta",
            "URL": "https://www.learninsta.com/rs-aggarwal-class-10-solutions"
        },
        {
            "Title": "ML Aggarwal Class 10 Solutions for ICSE Maths - Learn Insta",
            "URL": "https://www.learninsta.com/ml-aggarwal-icse-solutions-for-class-10-maths"
        },
        {
            "Title": "RD Sharma Class 10 Solutions (2020-2021 Edition) - Learn Insta",
            "URL": "https://www.learninsta.com/rd-sharma-class-10-solutions"
        },
        {
            "Title": "Class 5 – CBSE Online",
            "URL": "https://cbse.online/class-5"
        },
        {
            "Title": "NCERT Solutions for Class 5 - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-5"
        },
        {
            "Title": "Class 5 maths (India) | NCERT | Khan Academy",
            "URL": "https://www.khanacademy.org/math/in-in-class-5th-math-cbse"
        },
        {
            "Title": "New NCERT Solutions for Class 5 - Maths, English, Hindi",
            "URL": "https://schools.aglasem.com/ncert/ncert-solutions-class-5"
        },
        {
            "Title": "NCERT Solutions for Class 5 - All Subjects - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-5"
        },
        {
            "Title": "CBSE Class 5 Syllabus, Solutions, Question Papers Available - Byjus",
            "URL": "https://byjus.com/cbse/class-5"
        },
        {
            "Title": "NCERT Solutions For Class 5 Maths - Free Chapterwise PDF - Byjus",
            "URL": "https://byjus.com/ncert-solutions/ncert-solutions-for-class-5-maths"
        },
        {
            "Title": "NCERT Books For Class 5 All Subjects - Download Free PDFs - Byjus",
            "URL": "https://byjus.com/ncert-books-for-class-5"
        },
        {
            "Title": "Class 5 - Syllabus, Question Papers and Solutions",
            "URL": "https://www.toppr.com/class/5"
        },
        {
            "Title": "NCERT Books For Class 5 Maths- Download Free PDFs - Byjus",
            "URL": "https://byjus.com/ncert-books-for-class-5-maths"
        },
        {
            "Title": "Class 5 - YouTube",
            "URL": "https://www.youtube.com/playlist?list=PLzzdco7KuD2OPrDNffFhhhop4ray-vFUy"
        },
        {
            "Title": "NCERT Solutions for Class 5 Maths Math Magic (Updated for 2019-20) - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-5-mathematics"
        },
        {
            "Title": "NCERT Solutions for Class 5 Maths Updated for 2020 - 2021 - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-5-maths"
        },
        {
            "Title": "Find and follow posts tagged class-5 on Tumblr",
            "URL": "https://www.tumblr.com/tagged/class-5"
        },
        {
            "Title": "Class 5 Maths Syllabus - Cuemath",
            "URL": "https://www.cuemath.com/class-5-maths"
        },
        {
            "Title": "NCERT Solutions for Class 5 Math, Free NCERT Solutions - Free NCERT Solutions",
            "URL": "https://www.freencertsolutions.com/ncert-solutions-for-class-5-math"
        },
        {
            "Title": "NCERT Book for Class 5 Maths PDF| Latest Textbook for 2021",
            "URL": "https://www.jagranjosh.com/articles/ncert-class-5-maths-book-pdf-download-1559298962-1"
        },
        {
            "Title": "CBSE Class 5 Maths Syllabus | Videos, Revision, Summary",
            "URL": "https://www.toppr.com/ask/content/cbse/class-5/maths"
        },
        {
            "Title": "NCERT Solutions for Class 5 Mathematics - New Solutions",
            "URL": "https://schools.aglasem.com/ncert/ncert-solutions-class-5-maths"
        },
        {
            "Title": "Math for Class 5 | Maths Practice, Tests, Worksheets, Quizzes",
            "URL": "https://in.edugain.com/math/grade-5"
        },
        {
            "Title": "NCERT Class 5 Maths Book PDF - Vedantu",
            "URL": "https://www.vedantu.com/ncert-books/ncert-books-class-5-maths"
        },
        {
            "Title": "[PDF] NCERT Solutions for Class 5 Maths PDF Free Download",
            "URL": "https://www.ncertbooks.guru/ncert-solutions-class-5-maths"
        },
        {
            "Title": "Maths Guide for Class 5 CBSE",
            "URL": "https://maths.olympiadsuccess.com/class-5"
        },
        {
            "Title": "CBSE Class 5 Maths - Learn Maths Online",
            "URL": "http://www.learnmathsonline.org/category/cbse-class-5-maths"
        },
        {
            "Title": "CBSE Class 5 Science - Byjus",
            "URL": "https://byjus.com/cbse/class-5-science"
        },
        {
            "Title": "NCERT Solutions For Class 5 EVS - CBSE 2020 - Byjus",
            "URL": "https://byjus.com/ncert-solutions/ncert-solutions-for-class-5-science"
        },
        {
            "Title": "NCERT Solutions for Class 5 Science - Extramarks",
            "URL": "https://www.extramarks.com/ncert-solutions-for-class-5-science"
        },
        {
            "Title": "General Science for Class 5 - Topperlearning",
            "URL": "https://www.topperlearning.com/study/junior/class-5/general-science/b122c105s25"
        },
        {
            "Title": "NCERT Solutions for Class 5 EVS Looking Around - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-5-evs"
        },
        {
            "Title": "Class 5 Science - Fliplearn",
            "URL": "https://www.fliplearn.com/cbse/class-5-science-2"
        },
        {
            "Title": "Notes for 5th Class Science - Studyadda.com",
            "URL": "https://www.studyadda.com/notes/5th-class/36/science/5"
        },
        {
            "Title": "Class 5 Science Worksheets Assignments, Chapter notes",
            "URL": "https://www.studiestoday.com/cbse-class-v-science-587.html"
        },
        {
            "Title": "NCERT Books For Class 5 EVS (Science) - Download PDFs Here",
            "URL": "https://byjus.com/ncert-class-5-science-book"
        },
        {
            "Title": "CBSE Class 5 Science Syllabus and Worksheets",
            "URL": "https://byjus.com/cbse/class-5-science-syllabus"
        },
        {
            "Title": "CBSE Class 5 Science Book Free PDF Download @ BYJU'S",
            "URL": "https://byjus.com/cbse/class-5-science-book"
        },
        {
            "Title": "Download ICSE Class 5 Science syllabus- BYJU'S",
            "URL": "https://byjus.com/icse-class-5-science-syllabus"
        },
        {
            "Title": "NCERT Class 5 Science Classes Online CBSE | ICSE",
            "URL": "https://www.takshilalearning.com/course/class-5-science-online-classes"
        },
        {
            "Title": "CBSE Guide for Science Class 5",
            "URL": "https://science.olympiadsuccess.com/class-5"
        },
        {
            "Title": "ICSE Class 5 Science Syllabus| study material| Assessments| E …",
            "URL": "http://www.teachlearnweb.com/school-syllabus/icse/class5-science.aspx"
        },
        {
            "Title": "Online mock tests CBSE Class 5 Science - StudiesToday",
            "URL": "https://www.studiestoday.com/online-test/587/science.html"
        },
        {
            "Title": "CBSE Class 5 Notes - Learn CBSE",
            "URL": "https://www.learncbse.in/cbse-class-5-notes"
        },
        {
            "Title": "Class 5 Science - YouTube",
            "URL": "https://www.youtube.com/playlist?list=PLxxZGbURPDs0x-Uwzq-eWx4cah4J5BUGt"
        },
        {
            "Title": "class 5 science chapter 1 - part 1",
            "URL": "https://www.youtube.com/watch?v=TWKNUCGGwjE"
        },
        {
            "Title": "COMPLETE SCIENCE CLASS FIVE NOTES | Teacher.co.ke",
            "URL": "https://teacher.co.ke/complete-science-class-five-notes"
        },
        {
            "Title": "CBSE Class 5 Science Sample Question Papers & Worksheets",
            "URL": "https://www.ribblu.com/class-5-science"
        },
        {
            "Title": "MCQ Questions for Class 5 Science with Answers - NCERT Books",
            "URL": "https://www.ncertbooks.guru/mcq-questions-for-class-5-science-with-answers"
        },
        {
            "Title": "ICSE Class 5 Science Revision Notes | Swifearn",
            "URL": "https://swiflearn.com/revision-notes/icse/class-5/science"
        },
        {
            "Title": "Download NCERT Class 5 Science Books [CBSE] PDF 2020",
            "URL": "https://www.kopykitab.com/Class-5-Science"
        },
        {
            "Title": "5th class Science chapter wise online mcq test with answers for",
            "URL": "https://www.ilmkidunya.com/online-test/5th-class-science-english-meduim"
        },
        {
            "Title": "Class 5 ICSE Science Syllabus",
            "URL": "https://www.lidolearning.com/syllabus/class5-icse-science"
        },
        {
            "Title": "Science Olympiad Questions for Class 5",
            "URL": "https://www.practice-olympiad.com/olympiad-questions/science/class5"
        },
        {
            "Title": "What are the good books for the CBSE class 5 science and - Quora",
            "URL": "https://www.quora.com/What-are-the-good-books-for-the-CBSE-class-5-science-and-maths?share=1"
        },
        {
            "Title": "MCQ Questions Class 5 SCIENCE Subject Chapter 1 to 10. NCERT...",
            "URL": "https://biographyinhindi.com/mcq-questions-class-5-science-subject-chapter-1-to-10"
        },
        {
            "Title": "5th Class General Science All Chapter... - EASY MCQS QUIZ TEST",
            "URL": "https://www.easymcqs.com/2018/09/5th-class-general-science-all-chapter.html"
        },
        {
            "Title": "Multiple Choice Questions Class 5 Science | Seed | Bacteria",
            "URL": "https://www.scribd.com/document/261250812/Multiple-Choice-Questions-Class-5-Science-docx"
        },
        {
            "Title": "CBSE NCERT Worksheets for Class 5 Science - WorksheetsBuddy.com",
            "URL": "https://www.worksheetsbuddy.com/worksheets-for-class-5-science"
        },
        {
            "Title": "5th Class NCERT Solutions Science, Maths, SST, English - Class...",
            "URL": "https://www.2classnotes.com/5th-class"
        },
        {
            "Title": "Class 5 science - Home | Facebook",
            "URL": "https://www.facebook.com/Class-5-science-101746278139054"
        },
        {
            "Title": "Science Olympiad for Class 5 | Indian Talent Olympiad",
            "URL": "https://www.indiantalent.org/international-science-olympiad/class-5"
        },
        {
            "Title": "Course: Environmental Science - Class 5, Topic: Simple Machines",
            "URL": "https://educationwithfun.com/course/view.php?id=26&section=5"
        },
        {
            "Title": "Grade 5 Science: Videos, Practice Questions, Worksheets & Tests",
            "URL": "https://www.meritnation.com/junior/grade-5/Science/2"
        },
        {
            "Title": "Online Test for 5th Class Science - Studyadda.com",
            "URL": "https://www.studyadda.com/online-test/5th-class/36/science/5"
        },
        {
            "Title": "Cbse Class 5 Science",
            "URL": "https://clip-share.net/rev/cbse+class+5+science"
        },
        {
            "Title": "Top 10 Science Experiments for Class 5 kids",
            "URL": "https://www.zlifeeducation.com/blog/top-10-science-experiments-for-class-5-kids"
        },
        {
            "Title": "NCERT Solutions for Class 5 English Marigold",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-5-english"
        },
        {
            "Title": "NCERT Solutions for Class 5 English, Free NCERT Solutions",
            "URL": "https://www.freencertsolutions.com/ncert-solutions-for-class-5-english"
        },
        {
            "Title": "NCERT Solutions for Class 5 English access PDF free. - Byjus",
            "URL": "https://byjus.com/ncert-solutions-class-5-english"
        },
        {
            "Title": "NCERT Solutions for Class 5 English | myCBSEguide | CBSE",
            "URL": "https://mycbseguide.com/blog/ncert-solutions-for-class-5-english"
        },
        {
            "Title": "NCERT Solutions for Class 5 English - New Solutions",
            "URL": "https://schools.aglasem.com/ncert/ncert-solutions-class-5-english"
        },
        {
            "Title": "NCERT Book for Class 5 English (Marigold) PDF| Latest",
            "URL": "https://www.jagranjosh.com/articles/ncert-book-for-class-5-english-marigold-pdf-download-1622033774-1"
        },
        {
            "Title": "NCERT Solutions for Class 5 English Marigold - Free PDF",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-5-english-marigold"
        },
        {
            "Title": "NCERT Books for Class 5 English: Download Marigold PDF",
            "URL": "https://www.embibe.com/exams/ncert-books-for-class-5-english"
        },
        {
            "Title": "Class 5 - English / CBSE / School Books: Books - Amazon.in",
            "URL": "https://www.amazon.in/CBSE-Class-5-English-School-Books/s?rh=n:4149808031,p_n_feature_seventeen_browse-bin:4149844031,p_n_feature_sixteen_browse-bin:4149853031"
        },
        {
            "Title": "CBSE NCERT Solutions for Class 5 English Grammar for 2021-2022",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-5/english/grammar"
        },
        {
            "Title": "CBSE Notes for Class 5 English - Learn CBSE",
            "URL": "https://www.learncbse.in/cbse-notes-class-5-english"
        },
        {
            "Title": "NCERT Class 5 English Marigold Book PDF Download [Updated …",
            "URL": "https://www.ncertbooks.guru/ncert-class-5-english-book"
        },
        {
            "Title": "CBSE Class 5 English Syllabus 2021-22: Download 5th English …",
            "URL": "https://www.embibe.com/exams/cbse-class-5-english-syllabus"
        },
        {
            "Title": "Course: English - Class 5 - Education With Fun",
            "URL": "https://educationwithfun.com/course/view.php?id=27"
        },
        {
            "Title": "NCERT Solutions for Class 5 English Unit 1 Chapter 1 Ice-Cream …",
            "URL": "https://www.learncbse.in/ncert-solutions-class-5-english-unit-1"
        },
        {
            "Title": "CBSE Class 5 English Syllabus | Videos, Revision, Summary",
            "URL": "https://www.toppr.com/ask/content/cbse/class-5/english"
        },
        {
            "Title": "Английский язык - 5 класс - Российская электронная школа",
            "URL": "https://resh.edu.ru/subject/11/5"
        },
        {
            "Title": "NCERT Solutions for Class 5 Hindi रिमझिम",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-5-hindi"
        },
        {
            "Title": "NCERT Solutions for Class 5 Hindi, Free NCERT Solutions",
            "URL": "https://www.freencertsolutions.com/ncert-solutions-for-class-5-hindi"
        },
        {
            "Title": "NCERT Solutions for Class 5 Hindi | myCBSEguide | CBSE",
            "URL": "https://mycbseguide.com/blog/ncert-solutions-for-class-5-hindi"
        },
        {
            "Title": "NCERT Solutions for Class 5 Hindi - New Solutions | AglaSem",
            "URL": "https://schools.aglasem.com/ncert/ncert-solutions-class-5-hindi"
        },
        {
            "Title": "NCERT Books For Class 5 All Subjects, Hindi, English, Maths",
            "URL": "https://www.tiwariacademy.com/ncert-books/class-5"
        },
        {
            "Title": "CBSE NCERT Solutions for Class 5 Hindi Rimjhim for session",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-5/hindi"
        },
        {
            "Title": "NCERT Solutions for Class 5 Hindi Chapters - ncert books",
            "URL": "http://ncert-books.in/ncert-solutions-books-for-class-5-hindi-chapters"
        },
        {
            "Title": "NCERT Book for Class 5 Hindi Rimjhim - Free PDF Download",
            "URL": "https://www.jagranjosh.com/articles/ncert-book-for-class-5-hindi-pdf-download-1559908553-1"
        },
        {
            "Title": "NCERThttps://ncert.nic.in › textbook",
            "URL": "https://ncert.nic.in/textbook.php?ehhn1=0-18"
        },
        {
            "Title": "NCERT Class 5 Hindi Book PDF",
            "URL": "https://www.vedantu.com/ncert-books/ncert-books-class-5-hindi"
        },
        {
            "Title": "NCERT Books For Class 5 Hindi: Download 'Rimjhim' PDF Now",
            "URL": "https://www.embibe.com/exams/ncert-books-for-class-5-hindi"
        },
        {
            "Title": "Hindi Rimjhim Class 5 CBSE - Rankers Study Tutorial",
            "URL": "https://rstudytutorial.com/cbse-ncert/class-5-cbse/hindi-class-5"
        },
        {
            "Title": "CBSE NCERT Class 5 Hindi Grammar, Hindi Vyakaran for 2021-2022.",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-5/hindi/grammar"
        },
        {
            "Title": "Worksheets for Class 5 Hindi - StudiesToday",
            "URL": "https://www.studiestoday.com/worksheets/585/hindi.html"
        },
        {
            "Title": "Class 5 Hindi Worksheets Download Pdf with Solutions",
            "URL": "https://cbsencertsolutions.com/class-5-hindi-worksheets"
        },
        {
            "Title": "Class 5 Hindi (2214) - YouTube",
            "URL": "https://www.youtube.com/playlist?list=PLqf3auwQWuTXbB-lB6WuhYPp_sFqs93Um"
        },
        {
            "Title": "NCERT Hindi Class 5 Hindi - PDF Drive",
            "URL": "https://www.pdfdrive.com/ncert-hindi-class-5-hindi-e26940380.html"
        },
        {
            "Title": "Course: हिंदी - Class 5",
            "URL": "https://educationwithfun.com/course/view.php?id=28"
        },
        {
            "Title": "Class 5 Hindi Online Classes & Live CBSE | ICSE |",
            "URL": "https://www.takshilalearning.com/course/class-5-hindi-online-classes"
        },
        {
            "Title": "[PDF] NCERT Solutions for Class 5 Hindi PDF Free Download",
            "URL": "https://www.ncertbooks.guru/ncert-solutions-class-5-hindi"
        },
        {
            "Title": "best Class 5 moral stories hindi | Mauryamotivation.com",
            "URL": "https://mauryamotivation.com/class-5-moral-stories-hindi"
        },
        {
            "Title": "class 5 Hindi language chap1 Armaan L2 on Vimeo",
            "URL": "https://vimeo.com/538561585"
        },
        {
            "Title": "Class 5 Hindi Chapter 5 जहाँ चाह वहाँ राह | हिन्दीकुंज, Hindi...",
            "URL": "https://www.hindikunj.com/2020/06/jahan-chah-wahan-raah-class-5.html"
        },
        {
            "Title": "SSC Exams - Class- 5 (in Hindi) Offered by Unacademy",
            "URL": "https://unacademy.com/lesson/class-5-in-hindi/P0MQZJ2A"
        },
        {
            "Title": "UP Board Solutions for Class 5 Hindi हिन्दी कलरव - UP Board Solutions",
            "URL": "https://www.upboardsolutions.com/class-5-hindi"
        },
        {
            "Title": "CBSE Class 5 Hindi Worksheets & Sample Question Papers",
            "URL": "https://www.ribblu.com/class-5-hindi"
        },
        {
            "Title": "NCERT Books for Class 5 Hindi PDF Download",
            "URL": "https://ncertbooks.solutions/ncert-books-class-5/hindi"
        },
        {
            "Title": "Download NCERT Class 5 Hindi Books [CBSE] PDF 2020",
            "URL": "https://www.kopykitab.com/Class-5-Hindi"
        },
        {
            "Title": "Download CBSE Class 5 Hindi Worksheets in PDF 2021-22.",
            "URL": "https://school.edufever.com/cbse/cbse-class-5-hindi-worksheets"
        },
        {
            "Title": "Download CBSE Syllabus for Class 5 Hindi Academic Year 2020-2021",
            "URL": "https://byjus.com/cbse-class-5-hindi-syllabus"
        },
        {
            "Title": "Class 5 Hindi Solutions for Chapter 3-Khilaunewala - हिन्दी ज्ञान सागर",
            "URL": "https://www.hindigyansagar.com/class-5-hindi-solution-for-chapter-3"
        },
        {
            "Title": "NCERT Book Class 5 Hindi | AglaSem Schools",
            "URL": "https://schools.aglasem.com/ncert/ncert-books-class-5-hindi"
        },
        {
            "Title": "RBSE Solutions for Class 5 Hindi हिन्द",
            "URL": "https://www.rbsesolutions.com/class-5-hindi"
        },
        {
            "Title": "Hindi: NCERT Books Class 5 PDF Download - NCERT Books...",
            "URL": "https://freehomedelivery.net/ncert-book-class-5-hindi"
        },
        {
            "Title": "Class 5 HINDI worksheet",
            "URL": "https://www.liveworksheets.com/nv1215473iy"
        },
        {
            "Title": "NCERT Solutions for Class 6 Hindi -Vasant & Durva - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-6-hindi"
        },
        {
            "Title": "NCERT Solutions for class 6 Hindi Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-6/hindi"
        },
        {
            "Title": "NCERT Solutions for Class 6 Hindi Vasant - Free PDF - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-6-hindi-vasant"
        },
        {
            "Title": "Textbooks PDF (I-XII) - NCERT",
            "URL": "https://ncert.nic.in/textbook.php?fhvs1=0-17"
        },
        {
            "Title": "NCERT Solutions for Class 6 Hindi - Latest Solutions ...",
            "URL": "https://schools.aglasem.com/ncert/ncert-solutions-class-6-hindi"
        },
        {
            "Title": "NCERT Solutions for Class 6 Hindi, Free NCERT Solutions ...",
            "URL": "https://www.freencertsolutions.com/ncert-solutions-for-class-6-hindi"
        },
        {
            "Title": "Class 6 Hindi NCERT books: Download Hindi Solutions PDF",
            "URL": "https://www.embibe.com/exams/ncert-books-for-class-6-hindi"
        },
        {
            "Title": "NCERT Solutions for Class 6 Hindi | myCBSEguide | CBSE ...",
            "URL": "https://mycbseguide.com/blog/ncert-solutions-for-class-6-hindi"
        },
        {
            "Title": "NCERT Books For Class 6 Hindi PDF: Download NCERT Textbook …",
            "URL": "https://www.vedantu.com/ncert-books/ncert-books-class-6-hindi"
        },
        {
            "Title": "NCERT Solutions for Class 6 Hindi",
            "URL": "https://ncertsolutions.app/ncert/class-6/hindi"
        },
        {
            "Title": "NCERT Books Class 6 Hindi - Download Free PDFs Here",
            "URL": "https://myncert.com/cbse-ncert-books-class-6-hindi"
        },
        {
            "Title": "NCERT Class 6 Hindi Books PDF Download [Updated 2021-22]",
            "URL": "https://www.ncertbooks.guru/ncert-class-6-hindi-books"
        },
        {
            "Title": "CBSE Syllabus For Class 6 Hindi For Academic Year 2020 ...",
            "URL": "https://byjus.com/cbse-class-6-hindi-syllabus"
        },
        {
            "Title": "CBSE NCERT Worksheets for Class 6 Hindi - WorksheetsBuddy.com",
            "URL": "https://www.worksheetsbuddy.com/cbse-worksheets-for-class-6-hindi"
        },
        {
            "Title": "NCERT Book Class 6 Hindi Vasant Chapter 1 वह चिड़िया जो ...",
            "URL": "https://schools.aglasem.com/ncert/ncert-books-class-6-hindi-chapter-1"
        },
        {
            "Title": "Class 6 Hindi Assignments Download Pdf with Solutions",
            "URL": "https://cbsencertsolutions.com/class-6-hindi-assignments"
        },
        {
            "Title": "Class-6. - Kendriya Vidyalaya No.2 Jaipur(Online Study ...",
            "URL": "https://kvno2jaipur.wordpress.com/class-6-2"
        },
        {
            "Title": "NCERT ebook pdf For Class 6 Hindi - Vasant - Free PDF ...",
            "URL": "https://www.saralstudy.com/ncert-ebook-pdf-for-class-6-hindi-vasant"
        },
        {
            "Title": "Class 6th Hindi - Video Tutorial - Magnet Brains",
            "URL": "https://www.magnetbrains.com/course/class-6th-hindi"
        },
        {
            "Title": "Class 6 Hindi Worksheets Download Pdf with Solutions",
            "URL": "https://cbsencertsolutions.com/class-6-hindi-worksheets"
        },
        {
            "Title": "CBSE Notes for Class 6 Hindi - Learn CBSE",
            "URL": "https://www.learncbse.in/cbse-notes-class-6-hindi"
        },
        {
            "Title": "NCERT Books for Class 6 all subjects Hindi, English Maths - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-books/class-6"
        },
        {
            "Title": "RBSE Solutions for Class 6 Hindi हिंदी",
            "URL": "https://www.rbsesolutions.com/class-6-hindi"
        },
        {
            "Title": "NCERT Solutions For Class 6 Hindi Chapter Wise Solutions ...",
            "URL": "https://www.entrancei.com/ncert-solutions-for-class-6-hindi"
        },
        {
            "Title": "MCQ Questions for Class 6 Hindi with Answers Vasant Bhag 1",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-6-hindi-with-answers"
        },
        {
            "Title": "CBSE Sample Papers Class 6 Hindi PDF Solutions Download",
            "URL": "https://www.studiestoday.com/sample-paper/71/hindi.html"
        },
        {
            "Title": "Navodaya Model Paper In Hindi Medium Class 6 - Navodaya study",
            "URL": "https://navodayastudy.com/navodaya-model-paper-in-hindi-medium-class-6"
        },
        {
            "Title": "NCERT Books For Class 6 PDF Of All Subjects - Download Now.",
            "URL": "https://byjus.com/ncert-books-class-6"
        },
        {
            "Title": "CBSE 6th Class Hindi Syllabus for Vasant, Durva & Bal Ram ...",
            "URL": "https://www.embibe.com/exams/cbse-class-6-hindi-syllabus"
        },
        {
            "Title": "MCQ Questions for Class 6 Hindi Chapter 1 वह चिड़िया जो ...",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-6-hindi-chapter-1"
        },
        {
            "Title": "NCERT Solutions for Class 6 English (Updated for 2020-21) - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-6-english"
        },
        {
            "Title": "NCERT Solutions for Class 6 English - Byjus",
            "URL": "https://byjus.com/ncert-solutions-class-6-english"
        },
        {
            "Title": "NCERT Solutions class 6 English Honeysuckle & A pact with - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-6/english"
        },
        {
            "Title": "NCERT Solutions for Class 6 English Honeysuckle 2020 - 21 - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-6-english-honeysuckle"
        },
        {
            "Title": "Class 6th English NCERT Books: Download English Textbook",
            "URL": "https://www.embibe.com/exams/ncert-books-for-class-6-english"
        },
        {
            "Title": "NCERT Solutions for Class 6 English, Free NCERT Solutions ...",
            "URL": "https://www.freencertsolutions.com/ncert-solutions-for-class-6-english"
        },
        {
            "Title": "NCERT Solutions for Class 6 English (Honeysuckle and A ...",
            "URL": "https://schools.aglasem.com/ncert/ncert-solutions-class-6-english"
        },
        {
            "Title": "NCERT Books for Class 6 English in PDF| Download latest ...",
            "URL": "https://www.jagranjosh.com/articles/ncert-books-for-class-6-english-pdf-1606919455-1"
        },
        {
            "Title": "NCERT Books Class 6 English - Download PDF",
            "URL": "https://byjus.com/ncert-books-class-6-english"
        },
        {
            "Title": "ICSE Syllabus For Class 6 English | Latest Syllabus For the Year 2020",
            "URL": "https://byjus.com/icse/icse-class-6-english-syllabus"
        },
        {
            "Title": "Class 6 English Online Classes CBSE | ICSE",
            "URL": "https://www.takshilalearning.com/course/class-6-english-online-classes"
        },
        {
            "Title": "NCERT Solutions for Class 6 English Grammar - (Updated for 2020 …",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-6-english-grammar"
        },
        {
            "Title": "NCERT Books for Class 6 English 2020-21 - Download pdf here",
            "URL": "https://school.careers360.com/articles/ncert-books-for-class-6-english"
        },
        {
            "Title": "Class 6 English Grammar verbs, modals, noun, etc, for 2021-2022.",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-6/english/grammar"
        },
        {
            "Title": "Grade 6 English Lessons, English Teaching and Learning ...",
            "URL": "https://www.kidsworldfun.com/learn-english/english-lessons-for-grade-6.php"
        },
        {
            "Title": "Class 6 - English - DAV PUBLIC SCHOOL",
            "URL": "https://davbrsonline.wordpress.com/class-6-english"
        },
        {
            "Title": "NCTB Class 6 English Book PDF 2021",
            "URL": "https://bdexamresults.com/class-6-english-book"
        },
        {
            "Title": "Class 6 English Assignment 8th Week Answer 2021 - All New ...",
            "URL": "https://allnewjobcircular.com/class-6-english-assignment"
        },
        {
            "Title": "English Assignment Class 6, 7, 8, 9 Answer 2021 (All Week)",
            "URL": "https://bdnewresults.com/english-assignment"
        },
        {
            "Title": "Unseen Passage for Class 6 - Learn CBSE",
            "URL": "https://www.learncbse.in/unseen-passage-for-class-6"
        },
        {
            "Title": "English Grammar for Class 6, 7, 8, 9, 10, 11 and 12 for ...",
            "URL": "https://www.learncbse.in/english-grammar"
        },
        {
            "Title": "CBSE Question Papers Class 6 English PDF Solutions Download",
            "URL": "https://www.studiestoday.com/question-papers/70/english.html"
        },
        {
            "Title": "NCERT Solutions for Class 6 English",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-6-english"
        },
        {
            "Title": "8th Week Assignment Answer Class 6 (English & Arts and Crafts)",
            "URL": "https://newresultbd.com/8th-week-assignment-class-6"
        },
        {
            "Title": "NCERT Solutions For Class 6 English Unit 1 - Who Did ...",
            "URL": "https://byjus.com/ncert-solutions-class-6-english/unit-1-who-did-patricks-homework"
        },
        {
            "Title": "Swiflearn | English Grammar for Class 6 (CBSE & ICSE) All ...",
            "URL": "https://swiflearn.com/revision-notes/english-grammar/class-6"
        },
        {
            "Title": "CBSE Syllabus for Class 6 English 2020-2021 Examination",
            "URL": "https://www.vedantu.com/syllabus/cbse-class-6-english-syllabus"
        },
        {
            "Title": "KSEEB Solutions for Class 6 English Karnataka State ...",
            "URL": "https://www.kseebsolutions.com/kseeb-solutions-class-6-english"
        },
        {
            "Title": "NCERT Solutions For Class 6 English Unit 3 - The Shepherd ...",
            "URL": "https://byjus.com/ncert-solutions-class-6-english/supplementary-chapter-3"
        },
        {
            "Title": "Class 6th English - Video Tutorial - Magnet Brains",
            "URL": "https://www.magnetbrains.com/course/class-6th-english-video-tutorial"
        },
        {
            "Title": "English Grammar for Class 6, 7, 8, 9, 10, 11 and 12 ...",
            "URL": "https://www.learncram.com/english/english-grammar"
        },
        {
            "Title": "RBSE Solutions for Class 6 English अंग्रेज़ी",
            "URL": "https://www.rbsesolutions.com/class-6-english"
        },
        {
            "Title": "CBSE NCERT Worksheets for Class 6 English ...",
            "URL": "https://www.worksheetsbuddy.com/cbse-worksheets-for-class-6-english"
        },
        {
            "Title": "NCERT Solutions For Class 6 English Unit 3 - Taro's Reward ...",
            "URL": "https://byjus.com/ncert-solutions-class-6-english/unit-3-taros-reward"
        },
        {
            "Title": "MCQ Questions for Class 6 English with Answers Honeysuckle ...",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-6-english-with-answers"
        },
        {
            "Title": "NCERT Solutions for Class 6 Science (Updated for 2020-21) - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-6-science"
        },
        {
            "Title": "NCERT Solutions for Class 6 Science Updated for 2021-22 - Byjus",
            "URL": "https://byjus.com/ncert-solutions-class-6-science"
        },
        {
            "Title": "Science - NCERT",
            "URL": "https://ncert.nic.in/textbook.php?fesc1=0-16"
        },
        {
            "Title": "NCERT Solutions for Class 6 Science (Updated for 2021-2022) - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-6/science"
        },
        {
            "Title": "NCERT Solutions for Class 6 Science - Free PDF Download",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-6-science"
        },
        {
            "Title": "NCERT Book for Class 6 Science (2021-2022)| Download in ...",
            "URL": "https://www.jagranjosh.com/articles/ncert-book-for-class-6-science-1563364410-1"
        },
        {
            "Title": "NCERT Solutions for Class 6 Science - Latest Solutions ...",
            "URL": "https://schools.aglasem.com/ncert/ncert-solutions-class-6-science"
        },
        {
            "Title": "Class 6th Science NCERT Books: Download Free PDFs Here!",
            "URL": "https://www.embibe.com/exams/ncert-books-for-class-6-science"
        },
        {
            "Title": "NCERTBooks For Class 6 Science - Click to Download Free PDF",
            "URL": "https://byjus.com/ncert-books-class-6-science"
        },
        {
            "Title": "CBSE Notes for Class 6 Science - Free PDF Download for All Chapters",
            "URL": "https://byjus.com/cbse-notes/class-6-science-notes"
        },
        {
            "Title": "CBSE Class 6 Science Revision Notes - Free Download - Vedantu",
            "URL": "https://www.vedantu.com/revision-notes/cbse-class-6-science-notes"
        },
        {
            "Title": "NCERT Solutions for Class 6 Science Chapter 1 - Byjus",
            "URL": "https://byjus.com/ncert-solutions-class-6-science/chapter-1-food-where-does-it-come-from"
        },
        {
            "Title": "CBSE Class 6 Science Notes - Free PDF Download for All Chapters - Learn CBSE",
            "URL": "https://www.learncbse.in/cbse-notes-class-6-science"
        },
        {
            "Title": "CBSE Guide for Science Class 6",
            "URL": "https://science.olympiadsuccess.com/class-6"
        },
        {
            "Title": "Class 6 Science Notes and Questions | Primary School - EsomaKe",
            "URL": "https://esomake.co.ke/primary/class-6/science"
        },
        {
            "Title": "Science class 6 | Quiz - Quizizz",
            "URL": "https://quizizz.com/admin/quiz/5ea3b45a0315f6001bcfceb7/science-class-6"
        },
        {
            "Title": "Class 6 Science Worksheets with Answers | Entrancei",
            "URL": "https://www.entrancei.com/class-6-science"
        },
        {
            "Title": "UP Board Solutions for Class 6 Science विज्ञान : आओ समझें ...",
            "URL": "https://www.upboardsolutions.com/class-6-science"
        },
        {
            "Title": "NCERT Solutions for Class 6 Science Chapter 2 Components ...",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-6th-science-chapter-2-components-of-food"
        },
        {
            "Title": "CBSE Class 6 Science Worksheets - Free & Printable",
            "URL": "https://blog.ribblu.com/class-6-science-worksheets"
        },
        {
            "Title": "NCERT ebook pdf For Class 6 Science - Free PDF Download ...",
            "URL": "https://www.saralstudy.com/ncert-ebook-pdf-for-class-6-science"
        },
        {
            "Title": "NCERT Solutions for Class 6 Science Chapter 11 Light ...",
            "URL": "https://byjus.com/ncert-solutions-class-6-science/chapter-11-light-shadow-and-reflection"
        },
        {
            "Title": "NCERT Solutions for Class 6 Science Chapter 5 Separation ...",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-6th-science-chapter-5-separation-of-substances"
        },
        {
            "Title": "Important Questions for CBSE Class 6 Science, Chapter wise ...",
            "URL": "https://www.vedantu.com/cbse/important-questions-class-6-science"
        },
        {
            "Title": "Science | Khan Academy",
            "URL": "https://www.khanacademy.org/science"
        },
        {
            "Title": "Class 6 - EDUREV.IN",
            "URL": "https://edurev.in/cbse/class-6"
        },
        {
            "Title": "NCERT Solutions for Class 6 Science Chapter 7 Getting to ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-6th-science-chapter-7-getting-to-know-plants"
        },
        {
            "Title": "NCERT Solutions for Class 6 Science Chapter 1 Food: Where ... - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-6-science-chapter-1"
        },
        {
            "Title": "Class 6 Science Chapter 3 MCQ (Multiple Choice Questions ... - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-6/science/chapter-3/mcq"
        },
        {
            "Title": "MCQ Questions for Class 6 Science with Answers PDF ...",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-6-science-with-answers"
        },
        {
            "Title": "MCQ Questions for Class 6 Science Chapter 1 Food Where ...",
            "URL": "https://www.learncram.com/cbse/mcq-questions-for-class-6-science-chapter-1"
        },
        {
            "Title": "NCERT Solutions for Class 6 Social Science - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-6-social-science"
        },
        {
            "Title": "NCERT Solutions for Class 6 Social Science - Byjus",
            "URL": "https://byjus.com/ncert-solutions-class-6-social-science"
        },
        {
            "Title": "NCERT Solutions for Class 6 Social Science - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-6-social-science"
        },
        {
            "Title": "NCERT Solutions for Class 6 Social Science updated for 2021 - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-6/social-science"
        },
        {
            "Title": "NCERT Books for Class 6 Social Science Free PDF Download ...",
            "URL": "https://www.embibe.com/exams/ncert-books-for-class-6-social-science"
        },
        {
            "Title": "NCERT Books for Class 6 Social Science (PDF): History ...",
            "URL": "https://www.jagranjosh.com/articles/ncert-books-for-class-6-social-science-1593111206-1"
        },
        {
            "Title": "NCERT Solutions for Class 6 Social Science - Latest Solutions ...",
            "URL": "https://schools.aglasem.com/ncert/ncert-solutions-class-6-social-science"
        },
        {
            "Title": "NCERT Solutions for Class 6 Social Science - Meritnation",
            "URL": "https://www.meritnation.com/cbse-class-6/social-science/ncert-solutions/8_8"
        },
        {
            "Title": "NCERT Solutions for Class 6 Social Science, Free NCERT ...",
            "URL": "https://www.freencertsolutions.com/ncert-solutions-for-class-6-social-science"
        },
        {
            "Title": "NCERT Social Science Book For Class 6 - Download now.",
            "URL": "https://byjus.com/ncert-books-class-6-social-science"
        },
        {
            "Title": "Access CBSE Class 6 Social Science Notes - BYJUS",
            "URL": "https://byjus.com/cbse-notes/class-6-social-science-notes"
        },
        {
            "Title": "Class 6 Social Science - Ace Lessons",
            "URL": "https://acelessons.com/class-6-social-science"
        },
        {
            "Title": "NCERT Syllabus Class 6 Social Science Updated for 2021- 22 ...",
            "URL": "https://byjus.com/ncert-solutions/ncert-syllabus-for-class-6-social-science"
        },
        {
            "Title": "NCERT Book for Class 6 Social Science Download PDF",
            "URL": "https://www.ncertbooksolutions.com/ncert-book-for-class-6-social-science-download-pdf"
        },
        {
            "Title": "Worksheets For Class 6 Social Science - WorksheetsBag.com",
            "URL": "https://worksheetsbag.com/worksheets-for-class-6-social-science"
        },
        {
            "Title": "NCERT Book Class 6 Social Science | AglaSem Schools",
            "URL": "https://schools.aglasem.com/ncert/ncert-books-class-6-social-science"
        },
        {
            "Title": "CBSE Class 6 Social Science Revision Notes - Learn CBSE",
            "URL": "https://www.learncbse.in/cbse-notes-class-6-social"
        },
        {
            "Title": "MCQ Questions for Class 6 Social Science with Answers PDF ...",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-6-social-science-with-answers"
        },
        {
            "Title": "CBSE NCERT Books for Class 6 Social Science - Free PDF ...",
            "URL": "https://www.getmyuni.com/articles/ncert-books-for-class-6-social-science"
        },
        {
            "Title": "Extra Questions for Class 6 Social Science - Learn CBSE",
            "URL": "https://www.learncbse.in/extra-questions-for-class-6-social-science"
        },
        {
            "Title": "CBSE Class 6 Social Science Notes - Learn Insta",
            "URL": "https://www.learninsta.com/class-6-social-science-notes"
        },
        {
            "Title": "CBSE Syllabus for Class 6 Social Science 2020-2021 Examination",
            "URL": "https://www.vedantu.com/syllabus/cbse-class-6-social-science-syllabus"
        },
        {
            "Title": "class 6 | Learning Excellence Record | social science ...",
            "URL": "https://www.youtube.com/watch?v=yPeU_MTkpOg"
        },
        {
            "Title": "MCQs For NCERT Class 6 Social Science With Answers",
            "URL": "https://www.ncertbooksolutions.com/mcqs-for-ncert-class-6-social-science-with-answers"
        },
        {
            "Title": "Extra Questions for Class 6 Social Science with Answers ...",
            "URL": "https://www.thestudypath.com/class-6/extra-questions/social-science"
        },
        {
            "Title": "NCERT Solutions for Class 6 Social Science Chapter 1 PDF ...",
            "URL": "https://www.toppr.com/guides/ncert-solutions-for-class-6-social-science-chapter-1"
        },
        {
            "Title": "Class 6 Social Science Assignments Download Pdf with Solutions",
            "URL": "https://cbsencertsolutions.com/class-6-social-science-assignments"
        },
        {
            "Title": "NCERT Solutions for Class 6 Social Science in Hindi PDF ...",
            "URL": "https://ncertsolutions.guru/ncert-solutions-for-class-6-social-science-in-hindi"
        },
        {
            "Title": "Class 6 NCERT Social Science History Chapter 2? - Tiwari ...",
            "URL": "https://www.tiwariacademy.com/discussion/question/class-6-ncert-social-science-history-chapter-2"
        },
        {
            "Title": "KSEEB Solutions for Class 6 Social Science Karnataka State ...",
            "URL": "https://www.kseebsolutions.com/kseeb-solutions-class-6-social-science"
        },
        {
            "Title": "NCERT Solutions for Class 6 Maths (Updated for 2020-21) - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-6-maths-solutions"
        },
        {
            "Title": "NCERT Solutions for Class 6 Maths Updated for 2021-22 - Byjus",
            "URL": "https://byjus.com/ncert-solutions-class-6-maths"
        },
        {
            "Title": "NCERT Solutions for Class 6 Maths (Session 2021-2022) - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-6/maths"
        },
        {
            "Title": "NCERT Solutions for Class 6 Maths Updated for 2021-22 - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-6-maths"
        },
        {
            "Title": "NCERT Solutions for Class 6 Maths, Free NCERT Solutions ...",
            "URL": "https://www.freencertsolutions.com/ncert-solutions-for-class-6-math"
        },
        {
            "Title": "NCERT Solutions for CBSE Class 6 Maths TopperLearning",
            "URL": "https://www.topperlearning.com/ncert-solutions/cbse-class-6-mathematics"
        },
        {
            "Title": "CBSE Class 6 Maths Questions & Answers - Chapter-Wise ...",
            "URL": "https://www.embibe.com/exams/cbse-ncert-solutions-for-class-6-maths"
        },
        {
            "Title": "NCERT Books For Class 6 Maths - Downlaod Free PDF By Clicking …",
            "URL": "https://byjus.com/ncert-books-class-6-maths"
        },
        {
            "Title": "Math for Class 6 | Maths Practice, Tests, Worksheets, Quizzes ...",
            "URL": "https://in.edugain.com/math/grade-6"
        },
        {
            "Title": "CBSE Syllabus for Class 6 Maths Exam 2020-2021 - Byjus",
            "URL": "https://byjus.com/cbse/class-6-maths-syllabus"
        },
        {
            "Title": "RS Aggarwal Solutions Class 6 Maths - VEDANTU",
            "URL": "https://www.vedantu.com/rs-aggarwal-solutions/rs-aggarwal-class-6-solutions"
        },
        {
            "Title": "NCERT Solutions Class 6 Maths Chapter 1 Knowing Our Numbers …",
            "URL": "https://byjus.com/ncert-solutions-class-6-maths/chapter-1-knowing-our-numbers"
        },
        {
            "Title": "RS Aggarwal Solutions Class 6 PDF Download - A Plus Topper",
            "URL": "https://www.aplustopper.com/rs-aggarwal-class-6-solutions"
        },
        {
            "Title": "Class 6 maths (India) | NCERT | Khan Academy",
            "URL": "https://www.khanacademy.org/math/in-in-class-6th-math-cbse"
        },
        {
            "Title": "NCERT Solutions for Class 6 Maths - With Videos - Teachoo",
            "URL": "https://www.teachoo.com/subjects/cbse-maths/class-6"
        },
        {
            "Title": "Sixth grade math worksheets - free & printable | K5 Learning",
            "URL": "https://www.k5learning.com/free-math-worksheets/sixth-grade-6"
        },
        {
            "Title": "NCERT Books for Class 6 Maths PDF Download",
            "URL": "https://www.ncertbooks.guru/ncert-books-class-6-maths"
        },
        {
            "Title": "NCERT Book for Class 6 Maths PDF| Download for 2021-22",
            "URL": "https://www.jagranjosh.com/articles/ncert-book-for-class-6-maths-pdf-1562240436-1"
        },
        {
            "Title": "CBSE Sample Paper for Class 6 Maths - Download Free PDF",
            "URL": "https://byjus.com/cbse-sample-paper-for-class-6-maths"
        },
        {
            "Title": "Class 6 Mathematics - SlideShare",
            "URL": "https://www.slideshare.net/AbhishekBhartee/class-6-mathematics"
        },
        {
            "Title": "Course: Mathematics - Class 6",
            "URL": "https://educationwithfun.com/course/view.php?id=35"
        },
        {
            "Title": "Maths Quiz For Grade 6 With Answers - ProProfs Quiz",
            "URL": "https://www.proprofs.com/quiz-school/story.php?title=mathematics-quiz-class-6"
        },
        {
            "Title": "CBSE NCERT Class 6 Maths Syllabus 2021-22: Details Here",
            "URL": "https://www.embibe.com/exams/cbse-syllabus-for-class-6-mathematics"
        },
        {
            "Title": "NCERT Solutions Class 6 Maths Chapter 2 Whole Numbers ...",
            "URL": "https://byjus.com/ncert-solutions-class-6-maths/chapter-2-whole-numbers"
        },
        {
            "Title": "NCERT Solutions Class 6 Maths Chapter 3 Playing With ...",
            "URL": "https://byjus.com/ncert-solutions-class-6-maths/chapter-3-playing-with-numbers"
        },
        {
            "Title": "NCERT Solutions for Class 6 Maths Chapter 7 Fractions",
            "URL": "https://byjus.com/ncert-solutions-class-6-maths/chapter-7-fractions"
        },
        {
            "Title": "Important Questions for CBSE Class 6 Maths, Chapter wise ...",
            "URL": "https://www.vedantu.com/cbse/important-questions-class-6-maths"
        },
        {
            "Title": "Grade 6 mathematics Questions and Answer Solutions | LIDO",
            "URL": "https://www.lidolearning.com/ncert-solutions-grade-6/mathematics"
        },
        {
            "Title": "NCERT Solutions for Class 6 Maths Chapter 1 Knowing Our ...",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-6-maths-knowing-our-numbers-exercise-1-1"
        },
        {
            "Title": "NCERT Solutions for Class 6 Maths Chapter 3 Playing With ...",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-6-maths-playing-with-numbers-exercise-3-1"
        },
        {
            "Title": "NCERT Solutions for Class 6 (Updated for 2020-21)",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-6"
        },
        {
            "Title": "NCERT Solutions for Class 6 Maths Chapter 2 Whole Numbers",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-6-maths-whole-numbers-exercise-2-1"
        },
        {
            "Title": "NCERT Solutions for Class 7 Science (Updated for 2020 - 2021) - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-7-science"
        },
        {
            "Title": "NCERT Solutions for Class 7 Science Updated for 2021-22 - Byjus",
            "URL": "https://byjus.com/ncert-solutions-class-7-science"
        },
        {
            "Title": "NCERT Solutions For Class 7 Science Updated for 2020-21 - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-7-science"
        },
        {
            "Title": "NCERT Solutions for Class 7 Science in PDF format for 2021-22. - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-7/science"
        },
        {
            "Title": "NCERT Book for Class 7 Science PDF: 2021-22 - Jagran Josh",
            "URL": "https://www.jagranjosh.com/articles/ncert-book-for-class-7-science-pdf-hindi-english-1591706810-1"
        },
        {
            "Title": "NCERT Solutions for CBSE Class 7 Science TopperLearning",
            "URL": "https://www.topperlearning.com/ncert-solutions/cbse-class-7-science"
        },
        {
            "Title": "NCERT Solutions For Class 7 Science - Extramarks",
            "URL": "https://www.extramarks.com/ncert-solutions/cbse-class-7/science"
        },
        {
            "Title": "NCERT Books For Class 7 Science in Eng and हिन्दी - Free PDF - Byjus",
            "URL": "https://byjus.com/ncert-books-for-class-7-science"
        },
        {
            "Title": "CBSE Class 7 Science Notes - Get Chapter wise Notes for Free - Byjus",
            "URL": "https://byjus.com/cbse-notes/cbse-class-7-science-notes"
        },
        {
            "Title": "CBSE Sample Papers for Class 7 Science - Click to Download Free - Byjus",
            "URL": "https://byjus.com/cbse-sample-paper-for-class-7-science"
        },
        {
            "Title": "NCERT Solutions for Class 7 Science Chapter 2 Nutrition in Animals - Byjus",
            "URL": "https://byjus.com/ncert-solutions-class-7-science/chapter-2-nutrition-in-animals"
        },
        {
            "Title": "NCERT Solutions Class 7 Science Chapter 5 Acid Base and Salt Free - Byjus",
            "URL": "https://byjus.com/ncert-solutions-class-7-science/chapter-5-acid-base-and-salt"
        },
        {
            "Title": "NCERT Book Class 7 Science | AglaSem Schools",
            "URL": "https://schools.aglasem.com/ncert/ncert-books-class-7-science"
        },
        {
            "Title": "NCERT Solutions for Class 7 Science Chapter 4 Heat - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-class-7-science-chapter-4-heat"
        },
        {
            "Title": "NCERT Books for Class 7 Science PDF Download",
            "URL": "https://www.ncertbooks.guru/ncert-books-class-7-science"
        },
        {
            "Title": "Grade 7 | Science | Kullabs",
            "URL": "https://kullabs.com/class-7/science-1"
        },
        {
            "Title": "CBSE NCERT Worksheets for Class 7 Science ...",
            "URL": "https://www.worksheetsbuddy.com/cbse-worksheets-for-class-7-science"
        },
        {
            "Title": "Extra Questions for Class 7 Science with Answers - Study Path",
            "URL": "https://www.thestudypath.com/class-7/extra-questions/science"
        },
        {
            "Title": "Class 7th Science - Video Tutorials In Hindi | Magnet Brains",
            "URL": "https://www.magnetbrains.com/course/class-7-science"
        },
        {
            "Title": "NCERT Solutions for Class 7 Science Chapter 4 Heat - Byjus",
            "URL": "https://byjus.com/ncert-solutions-class-7-science/chapter-4-heat"
        },
        {
            "Title": "NCERT Solutions for Class 7 Science Chapter 6 Physical and ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-class-7-science-chapter-6-physical-and-chemical-changes"
        },
        {
            "Title": "Science Assignment for Class 7 Answer 4th Week 2021 (সপ্তম ...",
            "URL": "https://allresultbd.com/science-assignment-class-7"
        },
        {
            "Title": "CBSE Class 7 Science Worksheets with Answers - Vedantu",
            "URL": "https://www.vedantu.com/cbse/class-7-science-worksheets"
        },
        {
            "Title": "NCERT Solutions for Class 7 Science Chapter 6 Physical and ... - Byjus",
            "URL": "https://byjus.com/ncert-solutions-class-7-science/chapter-6-physical-and-chemical-changes"
        },
        {
            "Title": "NCERT Revised Books for Class 7 Science 2021: Check Here",
            "URL": "https://www.embibe.com/exams/ncert-books-for-class-7-science"
        },
        {
            "Title": "NCERT Solutions for Class 7 Science Chapter 2 Nutrition in ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-class-7-science-chapter-2-nutrition-in-animals"
        },
        {
            "Title": "CBSE Class 7 Science Syllabus 2021-22: Check Here on Embibe",
            "URL": "https://www.embibe.com/exams/cbse-syllabus-for-class-7-science"
        },
        {
            "Title": "NCERT Solutions for Class 7 Science Chapter 1 Nutrition in ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-class-7-science-chapter-1-nutrition-in-plants"
        },
        {
            "Title": "NCERT Solutions for Class 7 Science Chapter 5 Acids Bases ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-class-7-science-chapter-5-acids-bases-salts"
        },
        {
            "Title": "Important Questions for CBSE Class 7 Science, Chapter wise ... - Vedantu",
            "URL": "https://www.vedantu.com/cbse/important-questions-class-7-science"
        },
        {
            "Title": "MCQ Questions for Class 7 Science with Answers PDF ...",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-7-science-with-answers"
        },
        {
            "Title": "MCQ Questions for Class 7 Science Chapter 4 Heat with ...",
            "URL": "https://www.learncram.com/cbse/mcq-questions-for-class-7-science-chapter-4"
        },
        {
            "Title": "UP Board Solutions for Class 7 Science विज्ञान : आओ समझें ...",
            "URL": "https://www.upboardsolutions.com/class-7-science"
        },
        {
            "Title": "MCQ Questions for Class 7 Science Chapter 4 Heat with Answers",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-7-science-chapter-4"
        },
        {
            "Title": "MCQ Questions for Class 7 Science Chapter 2 Nutrition in ...",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-7-science-chapter-2"
        },
        {
            "Title": "NCERT Solutions for Class 7 Maths (Updated for 2020 - 2021) - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-7-maths"
        },
        {
            "Title": "NCERT Solutions for Class 7 Maths Updated for 2021-22 - Byjus",
            "URL": "https://byjus.com/ncert-solutions-class-7-maths"
        },
        {
            "Title": "NCERT Solutions for Class 7 Maths in PDF for session 2021 - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-7/maths"
        },
        {
            "Title": "Mathematics Class VII - YouTube",
            "URL": "https://www.youtube.com/channel/UCcdlZGFCT-pJv3-SQwAQ-5Q"
        },
        {
            "Title": "NCERT Solutions for Class 7 Maths Updated for 2021-22 - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-7-maths"
        },
        {
            "Title": "Class 7 maths (India) | NCERT | Khan Academy",
            "URL": "https://www.khanacademy.org/math/in-in-class-7th-math-cbse"
        },
        {
            "Title": "NCERT Solutions for Class 7 Maths [Updated PDF for 2021-22] - Cuemath",
            "URL": "https://www.cuemath.com/ncert-solutions/class-7-maths"
        },
        {
            "Title": "NCERT Solutions for CBSE Class 7 Maths TopperLearning",
            "URL": "https://www.topperlearning.com/ncert-solutions/cbse-class-7-mathematics"
        },
        {
            "Title": "NCERT Books For Class 7 Maths in English and Hindi - Byjus",
            "URL": "https://byjus.com/ncert-books-class-7-maths"
        },
        {
            "Title": "Class 7 Maths Index (All Chapters) - BYJUS",
            "URL": "https://byjus.com/maths/class-7-maths-index"
        },
        {
            "Title": "CBSE Notes Class 7 Maths - Updated As Per The Latest Prescribed - BYJUS",
            "URL": "https://byjus.com/cbse-notes/cbse-notes-class-7-maths"
        },
        {
            "Title": "NCERT Solutions for Class 7 Maths Chapter 1 Integers access free - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-7-maths/chapter-1-integers"
        },
        {
            "Title": "Math for Class 7 | Maths Practice, Tests, Worksheets, Quizzes ...",
            "URL": "https://in.edugain.com/math/grade-7"
        },
        {
            "Title": "NCERT Solutions For Class 7 Maths Chapter 3 Data Handling - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-7-maths/chapter-3-data-handling"
        },
        {
            "Title": "NCERT Books for Class 7 Maths PDF Download",
            "URL": "https://www.ncertbooks.guru/ncert-books-class-7-maths"
        },
        {
            "Title": "CBSE NCERT Books for Class 7 Maths 2021: Check Here",
            "URL": "https://www.embibe.com/exams/ncert-books-for-class-7-maths"
        },
        {
            "Title": "Class 7 NCERT Solutions Maths - Teachoo (All chapters with ...",
            "URL": "https://www.teachoo.com/subjects/cbse-maths/class-7"
        },
        {
            "Title": "Latest CBSE Class 7 Mathematics Study Material & Practice ...",
            "URL": "https://edusaksham.com/cbse-maths-study-material-class-7"
        },
        {
            "Title": "NCERT Solutions for Class 7 Maths Chapter 2 Fractions and ... - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-7-maths/chapter-2-fractions-and-decimals"
        },
        {
            "Title": "NCERT Solutions for Class 7 Maths Chapter 12 Algebraic ... - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-7-maths/chapter-12-algebraic-expressions"
        },
        {
            "Title": "CBSE Worksheets for Class 7 Maths | MCQ Questions for ...",
            "URL": "https://www.worksheetsbuddy.com/cbse-worksheets-for-class-7-maths"
        },
        {
            "Title": "Class 7 Mathematics Notes, Revision Questions and Answers ...",
            "URL": "https://esomake.co.ke/primary/class-7/maths"
        },
        {
            "Title": "NCERT Solutions for Class 7 Maths Chapter 2 Fractions and ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-7-maths-chapter-2-fractions-and-decimals-ex-2-1"
        },
        {
            "Title": "RS Aggarwal Maths Book Class 7 Solutions PDF Download - A ...",
            "URL": "https://www.aplustopper.com/rs-aggarwal-class-7-solutions"
        },
        {
            "Title": "MCQ Questions for Class 7 Maths with Answers PDF Download ...",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-7-maths-with-answers"
        },
        {
            "Title": "NCERT Solutions for Class 7 Maths Chapter 1 Integers - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-7-maths-integers-exercise-1-1"
        },
        {
            "Title": "NCERT Class 7 Maths Book PDF - Vedantu",
            "URL": "https://www.vedantu.com/ncert-books/ncert-books-class-7-maths"
        },
        {
            "Title": "MCQ Questions for Class 7 Maths Chapter 1 Integers with ...",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-7-maths-chapter-1"
        },
        {
            "Title": "NCERT Solutions for Class 7 Maths Chapter 2 Fractions and ... - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-7/maths/chapter-2"
        },
        {
            "Title": "MCQ Questions for Class 7 Maths Chapter 2 Fractions and ...",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-7-maths-chapter-2"
        },
        {
            "Title": "CBSE Class 7 Maths Worksheets | Worksheet with Answers",
            "URL": "https://www.entrancei.com/class-7-maths-worksheet"
        },
        {
            "Title": "NCERT Solutions For Class 7 Maths Chapter 2 Fractions and ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-7-maths-fractions-and-decimals-exercise-2-3"
        },
        {
            "Title": "Class 7th Maths - Video Tutorials In Hindi | Magnet Brains",
            "URL": "https://www.magnetbrains.com/course/class-7-maths"
        },
        {
            "Title": "NCERT Solutions for Class 7 English - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-7-english"
        },
        {
            "Title": "NCERT Solutions for Class 7 English Updated for 2021-22 - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-7-english"
        },
        {
            "Title": "NCERT Solutions for Class 7 English - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-7-english-honeycomb"
        },
        {
            "Title": "NCERT Solutions for Class 7 English Honeycomb for session Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-7/english"
        },
        {
            "Title": "NCERT Solutions for Class 7 English (Honeycomb, Alien ...",
            "URL": "https://schools.aglasem.com/ncert/ncert-solutions-class-7-english"
        },
        {
            "Title": "NCERT Solutions for Class 7 English, Free NCERT Solutions ...",
            "URL": "https://www.freencertsolutions.com/ncert-solutions-for-class-7-english"
        },
        {
            "Title": "NCERT English Books for Class 7: Free PDF Download Now!",
            "URL": "https://www.embibe.com/exams/ncert-books-for-class-7-english"
        },
        {
            "Title": "CBSE Class 7 English - Sample Papers, Syllabus, Textbook - TopperLearning",
            "URL": "https://www.topperlearning.com/cbse-class-7-english"
        },
        {
            "Title": "NCERT Books Class 7 English - Download PDF! - BYJUS",
            "URL": "https://byjus.com/ncert-books-class-7-english"
        },
        {
            "Title": "CBSE Class 7 English Lesson Explanation, Summary, Difficult words",
            "URL": "https://www.successcds.net/learn-english/class-7"
        },
        {
            "Title": "NCERT Solutions For Class 7 English Honeycomb - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-7-english-honeycomb-2"
        },
        {
            "Title": "CBSE Class 7 English Notes - Learn CBSE",
            "URL": "https://www.learncbse.in/cbse-notes-class-7-english"
        },
        {
            "Title": "Class 7 English Grammar All chapters updated for new ... - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-7/english/grammar"
        },
        {
            "Title": "Class 7 English Assignment Answer 2021 8th Week & 6th Week ...",
            "URL": "https://examresultbd.com/class-7-english-assignment"
        },
        {
            "Title": "UP Board Solutions for Class 7 English Rainbow",
            "URL": "https://www.upboardsolutions.com/class-7-english"
        },
        {
            "Title": "Class 7 English? - Tiwari Academy Discussion",
            "URL": "https://www.tiwariacademy.com/discussion/question/class-7-english"
        },
        {
            "Title": "NCERT Solutions for Class 7th English Chapter 2 A Gift of ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-7th-english-chapter-2-a-gift-of-chappals"
        },
        {
            "Title": "UP Board Solutions for Class 7 English Rainbow - UP Board ...",
            "URL": "https://www.upboardguide.com/class-7-english"
        },
        {
            "Title": "Class 7 English: Expert Tips to Help Your Ace the Exam ...",
            "URL": "https://hammburg.com/class-7-english-expert-tips-to-help-your-ace-the-exam"
        },
        {
            "Title": "NCERT Solutions for Class 7 English Unit 5 Quality - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-7-english/unit-5-quality"
        },
        {
            "Title": "41 Short English Poems For Kids - Class 1 to 7th",
            "URL": "https://www.momjunction.com/articles/english-poems-for-kids_00461956"
        },
        {
            "Title": "Class 7 English Assignment Answer 2021- 8th week",
            "URL": "https://chakrirkhobor.net/class-7-english-assignment-answer"
        },
        {
            "Title": "NCERT Solutions for Class 7 English Honeycomb Chapter 1 ... - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-7-english-honeycomb-chapter-1"
        },
        {
            "Title": "MCQ Questions for Class 7 English with Answers Honeycomb ...",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-7-english-with-answers"
        },
        {
            "Title": "NCERT Solutions for Class 7 English Honeycomb Chapter 2 ... - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-7/english/chapter-2"
        },
        {
            "Title": "Class 7th English - Video Tutorial - Magnet Brains",
            "URL": "https://www.magnetbrains.com/course/class-7th-english"
        },
        {
            "Title": "English Assignment Class 6, 7, 8, 9 Answer 2021 (All Week)",
            "URL": "https://bdnewresults.com/english-assignment"
        },
        {
            "Title": "Class 7 Assignment 8th Week 2021 Answer English & Charu O ...",
            "URL": "https://allnewjobcircular.com/class-7-assignment-8th-week-2021"
        },
        {
            "Title": "MCQs Class 7 English with Answers PDF Download",
            "URL": "https://www.studiestoday.com/multiple-choice-questions/86/english.html"
        },
        {
            "Title": "NCERT Solutions for Class 7 English Honeycomb Poem 1 The ...",
            "URL": "https://www.cbsetuts.com/ncert-solutions-for-class-7-english-honeycomb-poem-1"
        },
        {
            "Title": "Course: English Literature - Class 7",
            "URL": "https://educationwithfun.com/course/view.php?id=40"
        },
        {
            "Title": "CBSE Sample Paper for Class 7 English Based on Revised ...",
            "URL": "https://www.studiestoday.com/sample-paper/86/english.html"
        },
        {
            "Title": "NCERT Solutions for Class 7 Hindi (Updated for ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-7-hindi"
        },
        {
            "Title": "NCERT Solutions for Class 7 Hindi Vasant - All Chaterwise ... - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-7-hindi-vasant"
        },
        {
            "Title": "Class 7 Hindi NCERT Solutions Vasant, Durva, Question ... - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-7/hindi"
        },
        {
            "Title": "NCERT Solutions for Class 7 Hindi - Vasant, Durva ...",
            "URL": "https://schools.aglasem.com/ncert/ncert-solutions-class-7-hindi"
        },
        {
            "Title": "NCERT Solutions for Class 7 Hindi, Free NCERT Solutions ...",
            "URL": "https://www.freencertsolutions.com/ncert-solutions-for-class-7-hindi"
        },
        {
            "Title": "NCERT Solutions for Class 7 Hindi, वसंत, भाग 2 - Meritnation",
            "URL": "https://www.meritnation.com/cbse-class-7/hindi/वसंत,-भाग-2-ncert-solutions/ncert-solutions/9_3_1291"
        },
        {
            "Title": "NCERT Solutions for Class 7 Hindi (All Chapters Free PDF ...",
            "URL": "https://www.learninsta.com/ncert-solutions-for-class-7-hindi"
        },
        {
            "Title": "NCERT Solutions for CBSE Class 7 Hindi TopperLearning",
            "URL": "https://www.topperlearning.com/ncert-solutions/cbse-class-7-hindi"
        },
        {
            "Title": "Class 7 Hindi NCERT Books: Download Latest Version Now!",
            "URL": "https://www.embibe.com/exams/ncert-books-for-class-7-hindi"
        },
        {
            "Title": "NCERT Solutions for Class 7 Hindi - Free PDF Download",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-7-hindi"
        },
        {
            "Title": "Class 7 Hindi Lessons Explanation, Summary, Difficult words",
            "URL": "https://www.successcds.net/class7/hindi"
        },
        {
            "Title": "NCERT books for Class 7 all subjects in PDF form for session 2020 …",
            "URL": "https://www.vedantu.com/ncert-books/ncert-books-class-7-hindi"
        },
        {
            "Title": "NCERT Solutions for Class 7 Hindi - Meritnation",
            "URL": "https://www.meritnation.com/cbse-class-7/hindi/ncert-solutions/9_3"
        },
        {
            "Title": "CBSE Notes for Class 7 Hindi - Learn CBSE",
            "URL": "https://www.learncbse.in/cbse-notes-class-7-hindi"
        },
        {
            "Title": "Class 7 Hindi - Eduniz",
            "URL": "https://eduniz.com/course/class-7-hindi"
        },
        {
            "Title": "Worksheets For Class 7 Hindi - WorksheetsBag.com",
            "URL": "https://worksheetsbag.com/worksheets-for-class-7-hindi"
        },
        {
            "Title": "Class 7 Hindi Assignments Download Pdf with Solutions",
            "URL": "https://cbsencertsolutions.com/class-7-hindi-assignments"
        },
        {
            "Title": "UP Board - Class 7 - Hindi - Chapter 1 - Part 1 - YouTube",
            "URL": "https://www.youtube.com/watch?v=1T0eMMsBz2Y"
        },
        {
            "Title": "NCERT Class 7 Hindi : Free Audio : Free Download, Borrow ...",
            "URL": "https://archive.org/details/podcast_ncert-class-7-hindi_1441461284"
        },
        {
            "Title": "UP Board Solutions for Class 7 Hindi हिन्दी : मंजरी, महान ...",
            "URL": "https://www.upboardsolutions.com/class-7-hindi"
        },
        {
            "Title": "Hindi Class 7 - YouTube",
            "URL": "https://www.youtube.com/c/HindiClass7"
        },
        {
            "Title": "CBSE Sample Questions Paper for Class 7 Hindi with Solutions - Vedantu",
            "URL": "https://www.vedantu.com/sample-papers/cbse-sample-papers-for-class-7-hindi"
        },
        {
            "Title": "MCQ Questions for Class 7 Hindi with Answers Vasant Bhag 2",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-7-hindi-with-answers"
        },
        {
            "Title": "Hindi Grammar CBSE Class 6, 7, 8, 9, 10, 11 and 12 for ... - Learn CBSE",
            "URL": "https://www.learncbse.in/hindi-grammar"
        },
        {
            "Title": "Class 7 (Foundation) - Hindi | Math | Khan Academy",
            "URL": "https://www.khanacademy.org/math/in-class-7-math-foundation-hindi"
        },
        {
            "Title": "Class 7 Hindi NCERT Solutions Sample papers Question ...",
            "URL": "https://www.studiestoday.com/cbse-class-vii-hindi-87.html"
        },
        {
            "Title": "Class 7 Hindi Archives - PGRMS Education",
            "URL": "https://www.pgrmseducation.com/category/class-7-hindi"
        },
        {
            "Title": "NCERT Solutions for Class 7 Hindi Chapter 5 मीठाईवाला - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-7-hindi-chapter-5-मीठाईवाला"
        },
        {
            "Title": "RBSE Solutions for Class 7 Hindi हिंदी",
            "URL": "https://www.rbsesolutions.com/class-7-hindi"
        },
        {
            "Title": "Unseen Poem Class 7 in Hindi | Latest Unseen poem",
            "URL": "https://unseenpassage.com/hindi/unseen-poems-for-class-7"
        },
        {
            "Title": "NCERT Solutions for Class 7 Hindi Durva - Arinjay Academy",
            "URL": "https://arinjayacademy.com/ncert-solutions-for-class-7-hindi-durva"
        },
        {
            "Title": "NCERT Solutions for Class 7 Maths In Hindi - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-7-maths-in-hindi"
        },
        {
            "Title": "Algebra (Hindi) | Class 7 (Foundation) - Hindi | Math ...",
            "URL": "https://www.khanacademy.org/math/in-class-7-math-foundation-hindi/xeacf28af88e15b77:algebra-hindi"
        },
        {
            "Title": "NCERT 7th Class Hindi Solutions 2022 Pdf Download",
            "URL": "https://boardmodelpaper.com/ncert-solutions-for-class-7-hindi"
        },
        {
            "Title": "NCERT Solutions for Class 7 Social Science - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-7-social-sciences"
        },
        {
            "Title": "NCERT Solutions for Class 7 Social Science Updated for ... - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-7-social-science"
        },
        {
            "Title": "NCERT Solutions Class 7 Social Science Free PDFs - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-7-social-science"
        },
        {
            "Title": "NCERT Book for Class 7 Social Science 2021-22| Download ...",
            "URL": "https://www.jagranjosh.com/articles/class-7-social-science-ncert-book-1592832502-1"
        },
        {
            "Title": "NCERT Solutions for Class 7 Social Science: History, Civics ... - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-7/social-science"
        },
        {
            "Title": "NCERT Solutions for Class 7 Social Science - Meritnation",
            "URL": "https://www.meritnation.com/cbse-class-7/social-science/ncert-solutions/9_8"
        },
        {
            "Title": "NCERT Solutions for Class 7 Social Science, Free NCERT ...",
            "URL": "https://www.freencertsolutions.com/ncert-solutions-for-class-7-social-science"
        },
        {
            "Title": "NCERT Revised Books for Class 7 Social Science 2021 ...",
            "URL": "https://www.embibe.com/exams/ncert-books-for-class-7-social-science"
        },
        {
            "Title": "NCERT Solutions for Class 7 Social Science - History, Civics ...",
            "URL": "https://schools.aglasem.com/ncert/ncert-solutions-class-7-social-science"
        },
        {
            "Title": "NCERT Social Science Book Class 7 Download PDF - BYJUS",
            "URL": "https://byjus.com/ncert-books-class-7-social-science"
        },
        {
            "Title": "NCERT Books for Class 7 Social Science PDF Download [Updated …",
            "URL": "https://www.ncertbooks.guru/ncert-books-for-class-7-social-science"
        },
        {
            "Title": "CBSE Notes Class 7 Social Science - Access for Free! - BYJUS",
            "URL": "https://byjus.com/cbse-notes/class-7-social-science-notes"
        },
        {
            "Title": "Class 7 Social Science – Tiwari Academy Discussion",
            "URL": "https://www.tiwariacademy.com/discussion/question-category/class-7-social-science"
        },
        {
            "Title": "MCQ Questions for Class 7 Social Science with Answers PDF …",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-7-social-science-with-answers"
        },
        {
            "Title": "CBSE Syllabus for Class 7 Social Science for Academic Year ... - BYJUS",
            "URL": "https://byjus.com/cbse-class-7-social-science-syllabus"
        },
        {
            "Title": "NCERT Solutions for Class 7 Social Science (2021-2022 ...",
            "URL": "https://www.jagranjosh.com/articles/ncert-solutions-for-class-7-social-science-in-pdf-1593791368-1"
        },
        {
            "Title": "Extra Questions for Class 7 Social Science with Answers ...",
            "URL": "https://www.thestudypath.com/class-7/extra-questions/social-science"
        },
        {
            "Title": "KSEEB Solutions for Class 7 Social Science Karnataka State ...",
            "URL": "https://www.kseebsolutions.com/kseeb-solutions-class-7-social-science"
        },
        {
            "Title": "Class 7 Social Science Assignments Download Pdf with Solutions",
            "URL": "https://cbsencertsolutions.com/class-7-social-science-assignments"
        },
        {
            "Title": "NCERT Books for Class 7 Geography (Social Science - Our ...",
            "URL": "https://www.jagranjosh.com/articles/ncert-book-for-class-7-social-science-geography-our-environment-all-chapters-1593001099-1"
        },
        {
            "Title": "NCERT ebook pdf For Class 7 Social Science - Our ...",
            "URL": "https://www.saralstudy.com/ncert-ebook-pdf-for-class-7-social-science-our-environment-geography"
        },
        {
            "Title": "NCERT Book for Class 7 History (Social Science) 2021-22: PDF",
            "URL": "https://www.jagranjosh.com/articles/ncert-book-for-class-7-history-social-science-pdf-all-chapters-1592564985-1"
        },
        {
            "Title": "NCERT Solutions For Class 7 Civics Social Science Chapter ...",
            "URL": "https://byjus.com/ncert-solutions-class-7-social-science-civics-chapter-3-how-the-state-government-works"
        },
        {
            "Title": "Rocks and Minerals -Inside Our Earth - Class 7 Social ...",
            "URL": "https://www.takshilalearning.com/rocks-and-minerals-inside-our-earth-class-7-social-science"
        },
        {
            "Title": "CBSE Class 7 Social Science Syllabus 2021-22: Check Here ...",
            "URL": "https://www.embibe.com/exams/cbse-syllabus-for-class-7-social-science"
        },
        {
            "Title": "CBSE Class 7 Social Science Notes - Learn Insta",
            "URL": "https://www.learninsta.com/class-7-social-science-notes"
        },
        {
            "Title": "Kerala SCERT Class 7 Social Science Question Answer",
            "URL": "https://www.netexplanations.com/kerala-scert-class-7-social-science-question-answer"
        },
        {
            "Title": "RBSE Solutions for Class 7 Social Science सामाजिक विज्ञान",
            "URL": "https://www.rbsesolutions.com/class-7-social-science"
        },
        {
            "Title": "NCERT Books for Class 7 Social Science - Civics: 2021-22",
            "URL": "https://www.jagranjosh.com/articles/ncert-book-for-class-7-social-science-civics-social-and-political-life-ii-all-chapters-1592304037-1"
        },
        {
            "Title": "Worksheets for Class 7 Social Science - StudiesToday",
            "URL": "https://www.studiestoday.com/worksheets/322/social-science.html"
        },
        {
            "Title": "Gujarat State Board Class 7 Social Science Ch 3 Government ...",
            "URL": "https://www.netexplanations.com/gujarat-state-board-class-7-social-science-ch-3-government-solution"
        },
        {
            "Title": "NCERT Solutions for Class 8 Science (Updated for 2020-21) - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-8-science"
        },
        {
            "Title": "NCERT Solutions for Class 8 Science Updated for 2021-22 - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-8-science"
        },
        {
            "Title": "NCERT Solutions for Class 8 Science in PDF updated for - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-8/science"
        },
        {
            "Title": "NCERT Solutions for Class 8 Science - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-8-science"
        },
        {
            "Title": "Class 8th Science NCERT Textbook - Fliplearn",
            "URL": "https://www.fliplearn.com/class-8th-science-ncert-textbook-2-2-2"
        },
        {
            "Title": "Textbooks PDF (I-XII) - NCERT",
            "URL": "https://ncert.nic.in/textbook.php?iesc1=1-15"
        },
        {
            "Title": "NCERT Solutions for Class 8 Science (Chapters Wise ...",
            "URL": "https://school.careers360.com/ncert/ncert-solutions-class-8-science"
        },
        {
            "Title": "NCERT Science Book Class 8 PDFs - Download Now! - BYJUS",
            "URL": "https://byjus.com/ncert-science-book-class-8"
        },
        {
            "Title": "CBSE Class 8 Science Notes - Get Free Notes Here - BYJUS",
            "URL": "https://byjus.com/cbse-notes/class-8-science-notes"
        },
        {
            "Title": "CBSE Class 8 Science Notes - Learn CBSE",
            "URL": "https://www.learncbse.in/cbse-notes-class-8-science"
        },
        {
            "Title": "NCERT Solutions for Class 8 Science Chapter 4 Materials Metals - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-8-science/chapter-4-materials-metals-and-non-metals"
        },
        {
            "Title": "NCERT Books for Class 8 Science PDF Download - NCERT Books",
            "URL": "https://www.ncertbooks.guru/ncert-books-class-8-science"
        },
        {
            "Title": "NCERT Solutions for Class 8 Science Chapter 5 Materials Coal and ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-8-materials-coal-and-petroleum"
        },
        {
            "Title": "Rucha K. - Online Tutor in Shivajinagar, Pune for Class 8 Tuition",
            "URL": "https://www.urbanpro.com/pune/rucha-k/28397471"
        },
        {
            "Title": "Class 8 Science Chapters List | Notes | Khullakitab",
            "URL": "http://www.khullakitab.com/science/chapters/class-8/39/notes"
        },
        {
            "Title": "NCERT Solutions for Class 8 Science Chapter 3 Synthetic ... - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-8-science/chapter-3-synthetic-fibres-and-plastics"
        },
        {
            "Title": "CLASS 8 NCERT Science Archives - ExamTube",
            "URL": "https://examtube.in/class-8/class-8-ncert-science"
        },
        {
            "Title": "NCERT Solutions for Class 8 Science Chapter 1 Crop ... - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-8-science/chapter-1-crop-production-and-management"
        },
        {
            "Title": "NCERT Solutions for Class 8 Science Chapter 8 Cell ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-8-science-cell-structure-and-functions"
        },
        {
            "Title": "NCERT Books for Class 8 Social Science - NCERT Books",
            "URL": "https://www.ncertbooks.guru/ncert-books-for-class-8-social-science"
        },
        {
            "Title": "CBSE Class 8 - Science - Stars and The Solar System ...",
            "URL": "https://cbse.eduvictors.com/2021/08/cbse-class-8-science-stars-and-solar.html"
        },
        {
            "Title": "NCERT Solutions for Class 8 Science Chapter 6 Combustion ... - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-8-science/chapter-6-combustion-and-flames"
        },
        {
            "Title": "NCERT Solutions Class 8 Science Chapter 5 Coal and Petroleum - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-8-science/chapter-5-coal-and-petroleum"
        },
        {
            "Title": "NCERT Solutions for Class 8 Science - with Concepts - Teachoo",
            "URL": "https://www.teachoo.com/subjects/science/class-8"
        },
        {
            "Title": "NCERT Solutions Class 8 Science Chapter 2 Microorganism ... - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-8-science/chapter-2-microorganism-friend-foe"
        },
        {
            "Title": "NCERT solution for Class 8 Science Chapter 6 Combustion ...",
            "URL": "https://modeducation.com/class-8-science-chapter-6"
        },
        {
            "Title": "NCERT Solutions for Class 8 Science Chapter 2 ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-8-science-microorganisms-friend-and-foe"
        },
        {
            "Title": "NCERT Solutions for Class 8 Science Chapter 3 Synthetic ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-8-science-synthetic-fibers-and-plastics"
        },
        {
            "Title": "Class 8 Science Notes - DronStudy.com",
            "URL": "https://www.dronstudy.com/book/class-8-science-notes"
        },
        {
            "Title": "NCERT Solutions for Class 8 Science Chapter 1 Crop ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-8-science-crop-production-and-management"
        },
        {
            "Title": "NCERT Class 8 Science Chapter 1 MCQ? - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/discussion/question/ncert-class-8-science-chapter-1-mcq"
        },
        {
            "Title": "CBSE Class 8 Science Revision Notes - Free Download - Vedantu",
            "URL": "https://www.vedantu.com/revision-notes/cbse-class-8-science-notes"
        },
        {
            "Title": "Science Quiz For Class 8th Students - ProProfs Quiz",
            "URL": "https://www.proprofs.com/quiz-school/story.php?title=science-quiz-class-8"
        },
        {
            "Title": "Grade 8 | Science | Kullabs",
            "URL": "https://www.kullabs.com/class-8/science-8"
        },
        {
            "Title": "NCERT Solutions for Class 8 Maths Chapter wise - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-8-maths"
        },
        {
            "Title": "NCERT Solutions for Class 8 Maths Chapter wise ... - Byjus",
            "URL": "https://byjus.com/ncert-solutions-class-8-maths"
        },
        {
            "Title": "NCERT Solutions for Class 8 Maths PDF Download - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-8-maths"
        },
        {
            "Title": "Mathematics Class 8 - YouTube",
            "URL": "https://www.youtube.com/channel/UCEZrGzfVHP7AhNWa_NKra8g"
        },
        {
            "Title": "NCERT Textbooks PDF (I-XII)",
            "URL": "https://ncert.nic.in/textbook.php?hemh1=0-16"
        },
        {
            "Title": "Download PDF for 2021 ... - NCERT Solutions for Class 8 Maths - Cuemath",
            "URL": "https://www.cuemath.com/ncert-solutions/class-8-maths"
        },
        {
            "Title": "Class 8 maths (India) | NCERT | Khan Academy",
            "URL": "https://www.khanacademy.org/math/in-in-class-8th-math-cbse"
        },
        {
            "Title": "Important Questions For Class 8 Maths - Byjus",
            "URL": "https://byjus.com/maths/important-questions-class-8-maths"
        },
        {
            "Title": "Class 8 Maths MCQs (With Answers) - BYJUS",
            "URL": "https://byjus.com/maths/class-8-maths-mcqs"
        },
        {
            "Title": "Class 8 Mathematics - biovisions.in",
            "URL": "https://www.biovisions.in/p/class-8-mathematics.html"
        },
        {
            "Title": "Top 100 Class 8 Tuition Classes in Shivajinagar, Pune @UrbanPro",
            "URL": "https://www.urbanpro.com/pune/class-8-tuition/shivajinagar"
        },
        {
            "Title": "NCERT 2021: Download Chapter-wise NCERT Maths PDF for Class 8",
            "URL": "https://www.embibe.com/exams/ncert-books-for-class-8-maths"
        },
        {
            "Title": "8-th math - Kar",
            "URL": "http://www.ktbs.kar.nic.in/New/website textbooks/class8/8th-english-maths.pdf"
        },
        {
            "Title": "NCERT Books for Class 8 Maths - byjus.com",
            "URL": "https://byjus.com/ncert-maths-book-class-8"
        },
        {
            "Title": "NCERT Books for Class 8 Maths PDF Download",
            "URL": "https://www.ncertbooks.guru/ncert-books-class-8-maths"
        },
        {
            "Title": "CLICK TO DOWNLOAD CLASS-8 BOOK - bsmeb",
            "URL": "http://bsmeb.org/class8.html"
        },
        {
            "Title": "Bihar Board Class 8th Maths Solutions गणित",
            "URL": "https://biharboardsolutions.com/bihar-board-class-8th-maths-solutions"
        },
        {
            "Title": ". Class 8 - Section C - Trinity Global School",
            "URL": "https://www.trinityglobalschool.com/class-8-section-c"
        },
        {
            "Title": "NCERT Solutions For Class 8 Maths - Download Free PDF",
            "URL": "https://www.embibe.com/exams/ncert-solutions-for-class-8-maths"
        },
        {
            "Title": "NCERT Solutions for Class 8 Maths Chapter 1 Rational Numbers",
            "URL": "https://byjus.com/ncert-solutions-class-8-maths/chapter-1-rational-numbers"
        },
        {
            "Title": "Class 8 Maths Index (All Chapters) - BYJU'S Online ...",
            "URL": "https://byjus.com/maths/class-8-maths-index"
        },
        {
            "Title": "Class 8 Math - YouTube",
            "URL": "https://www.youtube.com/watch?v=dexGBJ8dOKM"
        },
        {
            "Title": "Grade 8 - Practice with Math Games",
            "URL": "https://www.mathgames.com/grade8"
        },
        {
            "Title": "NCERT Solutions for Class 8 Maths Chapter 6 Squares and ... - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-8-maths/chapter-6-square-square-roots"
        },
        {
            "Title": "NCERT Solutions Class 8 Maths Chapter 3 Understanding ... - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-8-maths/chapter-3-understanding-quadrilaterals"
        },
        {
            "Title": "Download Mathematics class 8 notes APK - Mob1.org",
            "URL": "https://mob1.org/mathematics-class-8-notes"
        },
        {
            "Title": "Selina Concise Mathematics Class 8 ICSE Solutions - CBSE Tuts",
            "URL": "https://www.cbsetuts.com/selina-concise-mathematics-class-8-icse-solutions"
        },
        {
            "Title": "NCERT Solutions for Class 8 Maths Chapter 2 Linear ... - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-8-maths/chapter-2-linear-equation"
        },
        {
            "Title": "NCERT Class 8 Maths Book PDF - Vedantu",
            "URL": "https://www.vedantu.com/ncert-books/ncert-books-class-8-maths"
        },
        {
            "Title": "NCERT Solutions for Class 8 Maths Chapter 6 Squares and ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-8-maths-squares-and-square-roots"
        },
        {
            "Title": "RS Aggarwal Solutions for Class 8 Maths PDF Download - Vedantu",
            "URL": "https://www.vedantu.com/rs-aggarwal-solutions/rs-aggarwal-class-8-solutions"
        },
        {
            "Title": "NCERT Solutions for Class 8 Maths Chapter 7 Cubes and Cube ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-8-maths-chapter-7-cubes-and-cube-roots"
        },
        {
            "Title": "NCERT Solutions for Class 8 Maths Chapter 5 Data Handling ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-8-maths-chapter-5-data-handling"
        },
        {
            "Title": "NCERT Solutions for Class 8 Maths Chapter 3 Understanding ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-class-8-solutions-maths-chapter-3-understanding-quadrilaterals"
        },
        {
            "Title": "NCERT Solutions for Class 8 English Honeydew (2020-21) - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-8-english-honeydew"
        },
        {
            "Title": "NCERT Solutions for Class 8 English (2019-20 Book) - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-class-8-english"
        },
        {
            "Title": "NCERT Solutions for Class 8 English Updated for 2021-22 - Byjus",
            "URL": "https://byjus.com/ncert-solutions-class-8-english"
        },
        {
            "Title": "NCERT Solutions for Class 8 English Honeydew Updated for ... - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-8-english-honeydew"
        },
        {
            "Title": "NCERT Solutions for Class 8 English Honeydew and It So ... - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-8/english"
        },
        {
            "Title": "NCERT Solutions for Class 8 English - Honeydew, It So ...",
            "URL": "https://schools.aglasem.com/ncert/ncert-solutions-class-8-english"
        },
        {
            "Title": "NCERT Solutions for Class 8 English Free PDF Download For ...",
            "URL": "https://www.learninsta.com/ncert-solutions-for-class-8-english"
        },
        {
            "Title": "Textbooks PDF (I-XII) - NCERT",
            "URL": "https://ncert.nic.in/textbook.php?hehd1=0-10"
        },
        {
            "Title": "NCERT Solutions for Class 8 English, Free NCERT Solutions ...",
            "URL": "https://www.freencertsolutions.com/ncert-solutions-for-class-8-english"
        },
        {
            "Title": "NCERT Books Class 8 English Available for Free! - BYJUS",
            "URL": "https://byjus.com/ncert-books-class-8-english"
        },
        {
            "Title": "Class 8 English - biovisions.in",
            "URL": "https://www.biovisions.in/p/class-8-english.html"
        },
        {
            "Title": "NCERT Solutions For Class 8 English Unit 1: The Best Christmas … - Byjus",
            "URL": "https://byjus.com/ncert-solutions-class-8-english/unit-1-the-best-christmas-present-in-the-world"
        },
        {
            "Title": "NCERT Solutions for Class 8 English Chapter 1 - How The Camel … - Byjus",
            "URL": "https://byjus.com/ncert-solutions-class-8-english/supplementary-chapter-1"
        },
        {
            "Title": "CBSE Unseen Passage for Class 8 - BYJUS",
            "URL": "https://byjus.com/cbse/unseen-passages-for-class-8"
        },
        {
            "Title": "NCERT Solutions For Class 8 English Unit 1 Poem - The Ant and … - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-8-english/unit-1-poem-the-ant-and-the-cricket"
        },
        {
            "Title": "CLASS 8 NCERT English Archives - ExamTube",
            "URL": "https://examtube.in/class-8/class-8-ncert-english"
        },
        {
            "Title": "NCERT solutions for class 8 English It So Happened (2020 ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-8-english-it-so-happened"
        },
        {
            "Title": "English class 8 worksheet 8 - YouTube",
            "URL": "https://www.youtube.com/watch?v=xLUcBGQi2iE"
        },
        {
            "Title": "Class 8 Assignment Answer English 8th Week 2021 [English ...",
            "URL": "https://examresultbd.com/class-8-english-assignment"
        },
        {
            "Title": "Download CBSE Syllabus for Class 8 English for Academic ... - BYJUS",
            "URL": "https://byjus.com/cbse-class-8-english-syllabus"
        },
        {
            "Title": "NCERT Solutions for Class 8 English Unit 5 - The Summit Within - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-8-english/unit-5-the-summit-within"
        },
        {
            "Title": "NCERT Solutions for Class 8 English Honeydew Chapter 3 ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-8-english-honeydew-glimpses-of-the-past"
        },
        {
            "Title": "Notice Writing Class 8 Format, Examples, Topics, Exercises ...",
            "URL": "https://www.learncram.com/english-grammar/notice-writing-for-class-8"
        },
        {
            "Title": "NCERT Solutions for Class 8 English Grammar all chapters ... - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-8/english/grammar"
        },
        {
            "Title": "Class 8 NCERT English Honeydew Chapter 3? - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/discussion/question/class-8-ncert-english-honeydew-chapter-3"
        },
        {
            "Title": "Extra Questions for Class 8 English Honeydew, It So Happened",
            "URL": "https://www.learninsta.com/extra-questions-for-class-8-english"
        },
        {
            "Title": "MCQ Questions for Class 8 English with Answers Honeydew ... - Learninsta",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-8-english-with-answers"
        },
        {
            "Title": "NCERT Solutions for class 8 (Updated for 2021-2022) All ... - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-8"
        },
        {
            "Title": "Class 8 Assignment 2nd Week 2021 English & BGS Answer ...",
            "URL": "https://allnewjobcircular.com/class-8-assignment-2nd-week"
        },
        {
            "Title": "KSEEB Solutions for Class 8 English Karnataka State ...",
            "URL": "https://www.kseebsolutions.com/kseeb-solutions-class-8-english"
        },
        {
            "Title": "Class 8 English Chapter 2 | The Tsunami Explanation (Part ...",
            "URL": "https://www.youtube.com/watch?v=a5mEiX8kDYY"
        },
        {
            "Title": "Class 8 Assignment 6th Week 2021 Answer English ...",
            "URL": "https://allnewjobcircular.com/class-8-assignment-6th-week-2021"
        },
        {
            "Title": "NCERT Solutions for Class 8 English Honeydew Chapter 1 The ...",
            "URL": "https://www.learninsta.com/ncert-solutions-for-class-8-english-honeydew-chapter-1"
        },
        {
            "Title": "CBSE Notes for Class 8 English Honeydew - Learn CBSE",
            "URL": "https://www.learncbse.in/cbse-notes-class-8-english-honeydew"
        },
        {
            "Title": "Class 8th English - Video Tutorial - Magnet Brains",
            "URL": "https://www.magnetbrains.com/course/class-8-english"
        },
        {
            "Title": "Class 8 Essay Topics List for Students & Children | 8th ...",
            "URL": "https://www.aplustopper.com/class-8-essay-topics"
        },
        {
            "Title": "NCERT Solutions for Class 8 Hindi (2020-21 Book) - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-8-hindi"
        },
        {
            "Title": "NCERT Solutions for class 8 Hindi (Kaksha 8 Hindi) Durva - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-8/hindi"
        },
        {
            "Title": "NCERT Solutions for Class 8 Hindi Vasant Updated for 2020-21 - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-8-hindi-vasant"
        },
        {
            "Title": "NCERT Solutions for Class 8 Hindi - Vasant, Durva, Sanship ...",
            "URL": "https://schools.aglasem.com/ncert/ncert-solutions-class-8-hindi"
        },
        {
            "Title": "Textbooks PDF (I-XII) - NCERT",
            "URL": "https://ncert.nic.in/textbook.php?hhvs1=0-18"
        },
        {
            "Title": "NCERT Solutions for Class 8 Hindi, वसंत, भाग 3 - Meritnation",
            "URL": "https://www.meritnation.com/cbse-class-8/hindi/वसंत,-भाग-3-ncert-solutions/ncert-solutions/10_3_1303"
        },
        {
            "Title": "NCERT Solutions for Class 8 Hindi – Chapterwise PDF ...",
            "URL": "https://www.learninsta.com/ncert-solutions-for-class-8-hindi"
        },
        {
            "Title": "NCERT Solutions for CBSE Class 8 Hindi TopperLearning",
            "URL": "https://www.topperlearning.com/ncert-solutions/cbse-class-8-hindi"
        },
        {
            "Title": "NCERT Solutions for Class 8 Hindi - VEDANTU",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-8-hindi"
        },
        {
            "Title": "NCERT Class 8 Hindi Book - Embibe",
            "URL": "https://www.embibe.com/exams/ncert-class-8-hindi-book"
        },
        {
            "Title": "NCERT Class 8 Hindi Books PDF Download [Updated 2021-22]",
            "URL": "https://www.ncertbooks.guru/ncert-class-8-hindi-books"
        },
        {
            "Title": "Class 8 Hindi Lessons Explanation, Summary, Difficult words",
            "URL": "https://www.successcds.net/class-8/hindi"
        },
        {
            "Title": "NCERT Book Class 8 Hindi | AglaSem Schools",
            "URL": "https://schools.aglasem.com/ncert/ncert-books-class-8-hindi"
        },
        {
            "Title": "Class 8 Hindi - biovisions.in",
            "URL": "https://www.biovisions.in/p/class-8-hindi.html"
        },
        {
            "Title": "SuccessCDs - School Lessons, Entrance Exams & Admission Alerts …",
            "URL": "https://www.successcds.net/class-8/category/hindi"
        },
        {
            "Title": "Class VIII All Chapters DAV DAVCMC Hindi Solutions By Avinash …",
            "URL": "https://www.onlinehindi.in/2017/11/class-viii-all-chapters-dav-davcmc.html"
        },
        {
            "Title": "Class 8 Hindi Worksheets Download Pdf with Solutions",
            "URL": "https://cbsencertsolutions.com/class-8-hindi-worksheets"
        },
        {
            "Title": "CBSE Class 8 - Study Material, Notes, Videos, Syllabus ... - BYJUS",
            "URL": "https://byjus.com/cbse/class-8"
        },
        {
            "Title": "Class 8 Hindi Worksheet II हिंदी कार्यपत्रक 8 II लाख की ... - YouTube",
            "URL": "https://www.youtube.com/watch?v=kEXfhPGFoWQ"
        },
        {
            "Title": "NCERT Books for Class 8 All Subjects in PDF format for ... - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-books/class-8"
        },
        {
            "Title": "CBSE Syllabus for Class 8 Hindi 2020-2021 Examination - Vedantu",
            "URL": "https://www.vedantu.com/syllabus/cbse-class-8-hindi-syllabus"
        },
        {
            "Title": "एनसीईआरटी समाधान कक्षा 8 गणित (NCERT Solutions for class 8 ...",
            "URL": "https://hindi.aglasem.com/ncert-8-solution-maths-hindi"
        },
        {
            "Title": "CBSE Sample Questions Paper for Class 8 Hindi with Solutions - Vedantu",
            "URL": "https://www.vedantu.com/sample-papers/cbse-sample-papers-for-class-8-hindi"
        },
        {
            "Title": "UP Board Solutions for Class 8 Hindi हिन्दी : मंजरी, महान ...",
            "URL": "https://www.upboardsolutions.com/class-8-hindi"
        },
        {
            "Title": "NCERT Solutions For Class 8 Hindi CBSE | Books | Syllabus ...",
            "URL": "https://www.zigya.com/cbse/Class-8th/Hindi"
        },
        {
            "Title": "CLASS 8 NCERT Hindi Vasant Archives - ExamTube",
            "URL": "https://examtube.in/class-8/class-8-ncert-hindi-vasant"
        },
        {
            "Title": "KSEEB Solutions for Class 8 Hindi वल्लरी Karnataka State ...",
            "URL": "https://kseebsolutions.guru/kseeb-solutions-class-8-hindi"
        },
        {
            "Title": "Chapter 14 लोकगीत - NCERT Solutions for Class 8 Hindi ... - TopperLearning",
            "URL": "https://www.topperlearning.com/study/maharashtra/class-8/hindi/text-book-solutions/ncert-vasant-bhag-1-viii/468/lokgeet/1725/b144c7s17e9"
        },
        {
            "Title": "NCERT Solutions for Class 8 Hindi Vasant Chapter 2 लाख की ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-class-8-hindi-chapter-2-laakh-kee-choodiyaan"
        },
        {
            "Title": "CBSE NCERT Worksheets for Class 8 Hindi - WorksheetsBuddy.com",
            "URL": "https://www.worksheetsbuddy.com/cbse-worksheets-for-class-8-hindi"
        },
        {
            "Title": "NCERT Solutions for Class 8 Hindi Vasant Chapter 3 - Bus ... - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-8-hindi-vasant-chapter-3"
        },
        {
            "Title": "NCERT Solutions for Class 8 Hindi Vasant Chapter 7 क्या ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-8-hindi-chapter-7-क्या-निराश-हुआ-जाए"
        },
        {
            "Title": "NCERT Solutions for class 8 (Updated for 2021-2022) All ... - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-8"
        },
        {
            "Title": "Hindi Class 8 - YouTube",
            "URL": "https://www.youtube.com/c/HindiClass8"
        },
        {
            "Title": "MCQ Questions for Class 8 Hindi Chapter 7 क्या निराश हुआ ...",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-8-hindi-chapter-7"
        },
        {
            "Title": "Telangana - Class 8 - Hindi Second Language - Wonderslate",
            "URL": "https://www.wonderslate.com/resources/ebook/Telangana---Class-8---Hindi-Second-Language?siteName=books&bookId=22088&preview=true"
        },
        {
            "Title": "Class 8 Hindi Chapter 1 - YouTube",
            "URL": "https://www.youtube.com/watch?v=tscqWz5yl7s"
        },
        {
            "Title": "NCERT Solutions for Class 8 Maths PDF English and Hindi - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-8/maths"
        },
        {
            "Title": "NCERT Solutions for Class 8 Social Science - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-8-social-science"
        },
        {
            "Title": "NCERT Solutions for Class 8 Social Science Updated for ... - Byjus",
            "URL": "https://byjus.com/ncert-solutions-class-8-social-science"
        },
        {
            "Title": "NCERT Solutions for class 8 Social Science in PDF for 2021-22. - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-8/social-science"
        },
        {
            "Title": "NCERT Solutions for Class 8 Social Science - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-8-social-science"
        },
        {
            "Title": "NCERT Books for Class 8 Social Science 2021-22| Download ...",
            "URL": "https://www.jagranjosh.com/articles/ncert-books-for-class-8-social-science-history-geography-civics-pdf-1591099547-1"
        },
        {
            "Title": "NCERT Solutions for Class 8 Social Science 2021-2022 ...",
            "URL": "https://www.jagranjosh.com/articles/ncert-solutions-for-class-8-social-science-pdf-1592224574-1"
        },
        {
            "Title": "NCERT Books for Class 8 Social Science 2021 ... - EMBIBE",
            "URL": "https://www.embibe.com/exams/ncert-books-for-class-8-social-science"
        },
        {
            "Title": "NCERT Solutions for Class 8 Social Science (Chapterwise ... - Learninsta",
            "URL": "https://www.learninsta.com/ncert-solutions-for-class-8-social-science"
        },
        {
            "Title": "NCERT Solutions for Class 8 Social Science - History, Civics ...",
            "URL": "https://schools.aglasem.com/ncert/ncert-solutions-class-8-social-science"
        },
        {
            "Title": "NCERT Social Science Book Class 8 PDF - BYJUS",
            "URL": "https://byjus.com/ncert-books-class-8-social-science"
        },
        {
            "Title": "CBSE Notes Class 8 Social Science-Access Revision Notes for Exam - BYJUS",
            "URL": "https://byjus.com/cbse-notes/class-8-social-science-notes"
        },
        {
            "Title": "NCERT Books for Class 8 Social Science - NCERT Books",
            "URL": "https://www.ncertbooks.guru/ncert-books-for-class-8-social-science"
        },
        {
            "Title": "Class 8 Social science - biovisions.in",
            "URL": "https://www.biovisions.in/p/class-8-social-science.html"
        },
        {
            "Title": "Download CBSE Syllabus for Class 8 Social Science for 2020-21 - BYJUS",
            "URL": "https://byjus.com/cbse-class-8-social-science-syllabus"
        },
        {
            "Title": "Class 8 Social Science Worksheets Download Pdf with Solutions",
            "URL": "https://cbsencertsolutions.com/class-8-social-science-worksheets"
        },
        {
            "Title": "NCERT Books for Class 8 Social Science PDF Download",
            "URL": "https://cbseacademics.com/ncert-books-for-class-8-social-science-pdf-download"
        },
        {
            "Title": "MCQ Questions for Class 8 Social Science with Answers PDF ...",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-8-social-science-with-answers"
        },
        {
            "Title": "CBSE NCERT Worksheets for Class 8 Social Science ...",
            "URL": "https://www.worksheetsbuddy.com/cbse-worksheets-for-class-8-social-science"
        },
        {
            "Title": "NCERT Solutions for class 8 Social Science PDF Free Download",
            "URL": "https://www.fresherwave.com/ncert-solutions-for-class-8-social-science-pdf"
        },
        {
            "Title": "Class -8 Social Science Worksheet -7 Hindi Medium ... - YouTube",
            "URL": "https://www.youtube.com/watch?v=YmUT-OjePBo"
        },
        {
            "Title": "NCERT Books for Class 8 Social Science PDF Download ...",
            "URL": "https://www.getmyuni.com/articles/ncert-books-for-class-8-social-science"
        },
        {
            "Title": "CBSE Class 8 Social Science Notes - Learn Insta",
            "URL": "https://www.learninsta.com/class-8-social-science-notes"
        },
        {
            "Title": "CBSE Class 8 Social Science Notes for Revision - Vedantu",
            "URL": "https://www.vedantu.com/revision-notes/cbse-class-8-social-science-notes"
        },
        {
            "Title": "PDF GSEB Board Class 8 Social Science Textbook English Medium - Byjus",
            "URL": "https://cdn1.byjus.com/wp-content/uploads/2020/01/GSEB-Board-Class-8-Social-Science-Textbook-English-Medium.pdf"
        },
        {
            "Title": "PDF Annual Plan SST Class 8 - rdpsbetul.org",
            "URL": "http://www.rdpsbetul.org/uploads/pdf/syllabus-19-20/class-8/ANNUAL PLAN SST CLASS 8.pdf"
        },
        {
            "Title": "History Chapter 4 Tribals, Dikus and the Vision of a ...",
            "URL": "https://classnotes.org.in/class-8/social-science8/history8/ch4-golden-age"
        },
        {
            "Title": "Class 8 Social Science Archives » NCERT CAREER",
            "URL": "https://ncertcareer.com/class-8-social-science"
        },
        {
            "Title": "NCERT Solutions for Class 8 Social Science Geography ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-8-geography-social-science-minerals-and-power-resources"
        },
        {
            "Title": "Extra Questions for Class 8 Social Science CBSE - Learn CBSE",
            "URL": "https://www.learncbse.in/extra-questions-for-class-8-social-science"
        },
        {
            "Title": "CBSE Class 8 Social Science Revision Notes - Learn CBSE",
            "URL": "https://www.learncbse.in/cbse-notes-class-8-social"
        },
        {
            "Title": "Worksheets for Class 8 Social Science - StudiesToday",
            "URL": "https://www.studiestoday.com/worksheets/411/social-science.html"
        },
        {
            "Title": "NCERT Solutions for Class 9 Science 2020 - 21 Edition - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-class-9-science"
        },
        {
            "Title": "NCERT Solutions for Class 9 Science Updated for 2021-22 - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-9-science"
        },
        {
            "Title": "NCERT Solutions for Class 9 Science 2020- 21 Updated - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-science"
        },
        {
            "Title": "NCERT Solutions for Class 9 Science (Updated 2021-2022 ... - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-9/science"
        },
        {
            "Title": "Class 9th Science NCERT Textbook - Fliplearn",
            "URL": "https://www.fliplearn.com/class-9th-science-ncert-textbook-2-2"
        },
        {
            "Title": "Textbooks PDF (I-XII) - NCERT",
            "URL": "https://ncert.nic.in/textbook.php?jesc1=9-16"
        },
        {
            "Title": "NCERT Solutions for Class 9 Science - Study Rankers",
            "URL": "https://www.studyrankers.com/2014/11/science-class-9th-ncert-solutions.html"
        },
        {
            "Title": "NCERT Solutions for Class 9 Science - Download Free PDF's ...",
            "URL": "https://www.aakash.ac.in/ncert-solutions/class-9/science"
        },
        {
            "Title": "NCERT Science Book Class 9 - Available here. - BYJUS",
            "URL": "https://byjus.com/ncert-science-book-class-9"
        },
        {
            "Title": "CBSE Class 9 Science Notes - Download PDF Notes Free - BYJUS",
            "URL": "https://byjus.com/cbse-notes/class-9-science-notes"
        },
        {
            "Title": "NCERT Solutions for Class 9 Science Chapter 2 Is Matter Around … - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-9-science/chapter-2-is-matter-around-us-pure"
        },
        {
            "Title": "NCERT Solutions for Class 9 Science Chapter 9 Force and Laws of … - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-9-science-force-and-laws-of-motion"
        },
        {
            "Title": "NCERT Solutions For Class 9 Science Chapter 2 Is Matter Around … - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-9-science-is-matter-around-us-pure"
        },
        {
            "Title": "NCERT Books for Class 9 Science [2020 -21 Edition Revised ...",
            "URL": "https://www.ncertbooks.guru/ncert-books-class-9-science"
        },
        {
            "Title": "All Chapters Notes for Class 9 Science",
            "URL": "https://www.dronstudy.com/book/class-9-science-notes"
        },
        {
            "Title": "NCERT Class 9th Science Book 2021-2022| Free PDF Download",
            "URL": "https://www.jagranjosh.com/articles/cbse-class-9-science-ncert-book-1522396937-1"
        },
        {
            "Title": "9th Class General Science Notes All Chapters General ...",
            "URL": "https://educatehell.com/9th-class-general-science-notes-all-chapters"
        },
        {
            "Title": "NCERT Solutions Class 9 Science Chapter 9 Force And Laws ... - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-9-science/chapter-9-force-and-laws-of-motion"
        },
        {
            "Title": "General Science 9th Class Pairing Scheme 2021 | 9th ...",
            "URL": "https://biseweb.com/general-science-9th-class-pairing-scheme-2021-9th-general-science-scheme-paper"
        },
        {
            "Title": "NCERT Solutions Class 9 Science Chapter 8 Motion - BYJU'S",
            "URL": "https://byjus.com/ncert-solutions-class-9-science/chapter-8-motion"
        },
        {
            "Title": "Class 9 Science Live Class chapter 3 - YouTube",
            "URL": "https://www.youtube.com/watch?v=aly1uUJ_o9M"
        },
        {
            "Title": "Class 9 Science Archives - ExamTube",
            "URL": "https://examtube.in/class-9-science"
        },
        {
            "Title": "CBSE Class 9 Science Revision ... - Learn CBSE",
            "URL": "https://www.learncbse.in/cbse-notes-class-9-science"
        },
        {
            "Title": "Class 9 Science Chapters List | Notes | Khullakitab",
            "URL": "http://www.khullakitab.com/science/chapters/class-9/17/notes"
        },
        {
            "Title": "MCQ Questions for Class 9 Science with Answers - NCERT ...",
            "URL": "https://www.ncert-solutions.com/mcq-questions-for-class-9-science-with-answers"
        },
        {
            "Title": "CBSE Class 9 Science Chapter-Wise Notes 2021-2022",
            "URL": "https://www.jagranjosh.com/articles/cbse-class-9-science-chapter-notes-1511957260-1"
        },
        {
            "Title": "NCERT Solutions for Class 9 Science Chapter 8 Motion - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-9-science-motion"
        },
        {
            "Title": "Free Class 9 Science Test 3 | THE EDUCATION PLANET",
            "URL": "https://theeducationplanet.org/free-class-9-science-test-3"
        },
        {
            "Title": "NCERT Solutions For Class 9 Science Chapter 1 Matter in ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-9-science-matter-in-our-surroundings"
        },
        {
            "Title": "Notes-Class 9-Science-Chapter-12-Study of Sound ...",
            "URL": "https://kitabcd.org/9th/notes-class-9-science-chapter-12-study-of-sound-maharashtra-board"
        },
        {
            "Title": "MCQ Questions for Class 9 Science with Answers PDF ... - Learn Insta",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-9-science-with-answers"
        },
        {
            "Title": "Tissues Activity Solution NCERT Class 9 Std Science Book ...",
            "URL": "https://studdy.in/tissues-activity-solution-ncert-class-9-std-science-book-chapter-6"
        },
        {
            "Title": "Class 9 Science MCQ - Online Test - StudyRankers Test",
            "URL": "https://studyrankerstest.com/class-9-science-mcq"
        },
        {
            "Title": "Science 9 - CBSE Online",
            "URL": "https://cbse.online/class-9/science-9"
        },
        {
            "Title": "Is Matter Around Us Pure Class 9 Notes Science Chapter 2 ... - Learn CBSE",
            "URL": "https://www.learncbse.in/matter-around-us-pure-cbse-notes-class-9-science"
        },
        {
            "Title": "Important Questions for CBSE Class 9 Science Chapter wise ... - Vedantu",
            "URL": "https://www.vedantu.com/cbse/important-questions-class-9-science"
        },
        {
            "Title": "NCERT Solutions for Class 9 Maths (Updated for 2021-22) - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-9-maths"
        },
        {
            "Title": "NCERT Solutions for Class 9 Maths (Updated for 2021-22 ... - Byjus",
            "URL": "https://byjus.com/ncert-solutions-class-9-maths"
        },
        {
            "Title": "NCERT Solutions for Class 9 Maths (Updated for 2021-2022 ... - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-9/maths"
        },
        {
            "Title": "NCERT Solutions for Class 9 Maths PDF Download (Updated ... - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-maths"
        },
        {
            "Title": "NCERT",
            "URL": "https://ncert.nic.in/textbook.php?iemh1=0-15"
        },
        {
            "Title": "Mathematics Class IX - YouTube",
            "URL": "https://www.youtube.com/channel/UC4aAjMbliaCFSdsoTkd3YTw"
        },
        {
            "Title": "NCERT Solutions for Class 9 Maths [Updated for 2021-22] - Cuemath",
            "URL": "https://www.cuemath.com/ncert-solutions/class-9-maths"
        },
        {
            "Title": "NCERT Solutions for Class 9 Maths - Download Free PDF's ...",
            "URL": "https://www.aakash.ac.in/ncert-solutions/class-9/maths"
        },
        {
            "Title": "NCERT Solutions Maths for Class 9 - with Videos - Teachoo",
            "URL": "https://www.teachoo.com/subjects/cbse-maths/class-9th"
        },
        {
            "Title": "CBSE Class 9 Maths Book Pdf in English and Hindi - Updated for … - BYJUS",
            "URL": "https://byjus.com/cbse/class-9-math-book"
        },
        {
            "Title": "NCERT Solutions for Class 9 Maths Chapter 4 Linear Equations In … - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-9-maths/chapter-4-linear-equation-in-two-variables"
        },
        {
            "Title": "NCERT Solutions for Class 9 Maths Chapter 6 Lines And Angles - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-9-maths/chapter-6-lines-and-angles"
        },
        {
            "Title": "Class 9 Mathematics - biovisions.in",
            "URL": "https://www.biovisions.in/p/class-9-mathematics.html"
        },
        {
            "Title": "NCERT Solutions Class 9 Maths Chapter 14 Statistics - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-9-maths/chapter-14-statistics"
        },
        {
            "Title": "Class 9 Maths MCQs - Chapter-wise - BYJUS",
            "URL": "https://byjus.com/maths/class-9-maths-mcqs"
        },
        {
            "Title": "NCERT - Free PDF Download for Class 9 Maths NCERT 2021",
            "URL": "https://www.embibe.com/exams/ncert-books-for-class-9-maths"
        },
        {
            "Title": "NCERT Solutions for Class 9 Maths Chapter 7 Triangles - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-9-maths/chapter-7-geometry-of-triangles"
        },
        {
            "Title": "NCERT Solutions Class 9 Maths Chapter 12 Heron's Formula - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-9-maths/chapter-12-herons-formula"
        },
        {
            "Title": "Class 9 Maths Notes for FBISE - Notes, Solved Exercises",
            "URL": "https://classnotes.xyz/class-9-maths-notes-fbise"
        },
        {
            "Title": "9th Class Maths Notes All Chapters Maths Notes",
            "URL": "https://educatehell.com/9th-class-maths-notes-all-chapters"
        },
        {
            "Title": "Extra Questions for Class 9 Maths with Solutions Chapter ... - Learn CBSE",
            "URL": "https://www.learncbse.in/extra-questions-for-class-9-maths"
        },
        {
            "Title": "Class 9 Maths Solutions Chapter 13? - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/discussion/question/class-9-maths-solutions-chapter-13"
        },
        {
            "Title": "NCERT Solutions for CBSE Class 9 Maths TopperLearning",
            "URL": "https://www.topperlearning.com/ncert-solutions/cbse-class-9-mathematics"
        },
        {
            "Title": "10 Extra Questions For Class 9 Maths Chapter 1 with ...",
            "URL": "https://practice-questions.maxtute.com/CBSE-Class-9-Math/number-system"
        },
        {
            "Title": "NCERT Solutions for Class 9 Maths Chapter 2 Polynomials - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-9-maths-chapter-2-polynomials"
        },
        {
            "Title": "NCERT Solutions for Class 9 Maths Chapter 13 Surface Areas ...",
            "URL": "https://ncerttextbook.in/ncert-solutions-books-for-class-9-maths-chapter-13-surface-areas-and-volumes"
        },
        {
            "Title": "Simple Tricks to Score Good Marks in Class 9 Maths Exam",
            "URL": "https://www.allblogthings.com/2021/08/simple-tricks-to-score-good-marks-in-class-9-maths-exam.html"
        },
        {
            "Title": "MCQ Questions for Class 9 Maths with Answers - NCERT Solutions",
            "URL": "https://www.ncert-solutions.com/mcq-questions-for-class-9-maths-with-answers"
        },
        {
            "Title": "NCERT Solutions for Class 9 Maths Chapter 7 Triangles - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-9-maths-chapter-7-triangles"
        },
        {
            "Title": "CBSE Worksheets for Class 9 Maths | MCQ Questions for ...",
            "URL": "https://www.worksheetsbuddy.com/cbse-worksheets-for-class-9-maths"
        },
        {
            "Title": "R S AGGARWAL AND V AGGARWAL Solutions for Class 9 Maths CBSE - Topper Learning",
            "URL": "https://www.topperlearning.com/r-s-aggarwal-and-v-aggarwal-solutions/cbse-class-9-mathematics"
        },
        {
            "Title": "NCERT Solutions For Class 9 Math Chapter - 3 Exercise - 3.3",
            "URL": "https://sunstarup.com/ncert-solutions-for-class-9-math-chapter-3-exercise-3-3"
        },
        {
            "Title": "NCERT Solutions for Class 9 Maths - Study Rankers",
            "URL": "https://www.studyrankers.com/2014/11/math-class-9th-ncert-solutions.html"
        },
        {
            "Title": "CLASS IX - My Study materials - Kumar",
            "URL": "https://kumarsir34.wordpress.com/class-ix"
        },
        {
            "Title": "MCQ Questions for Class 9 Maths Chapter 3 Coordinate ... - Learn Insta",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-9-maths-chapter-3"
        },
        {
            "Title": "NCERT Solutions for Class 9 Maths Chapter 12 Heron's Formula - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-9-maths-chapter-12-herons-formula"
        },
        {
            "Title": "MCQ Questions for Class 9 Maths Chapter 3 Coordinate ...",
            "URL": "https://www.ncertbooks.guru/mcq-questions-for-class-9-maths-chapter-3-with-answers"
        },
        {
            "Title": "NCERT solutions for class 9 English (Updated for 2020-21) - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-class-9-english"
        },
        {
            "Title": "NCERT Solutions for class 9 English Beehive ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-9-english-beehive"
        },
        {
            "Title": "NCERT Solutions for Class 9 English Updated for 2021-22 - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-9-english"
        },
        {
            "Title": "NCERT Solutions for class 9 English Beehive ... - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-english-beehive"
        },
        {
            "Title": "NCERT Solutions for Class 9 English in PDF updated for 2021 - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-9/English"
        },
        {
            "Title": "NCERT Class 9 English Books Beehive, Moments, Words ...",
            "URL": "https://www.jagranjosh.com/articles/ncert-books-for-class-9-english-pdf-1587740354-1"
        },
        {
            "Title": "NCERT Solutions Class 9th English - Free Chapter-Wise PDF ...",
            "URL": "https://www.jagranjosh.com/articles/class-9-english-ncert-solutions-pdf-download-1590419009-1"
        },
        {
            "Title": "Class 9 English - Explanation, Summary, Difficult words",
            "URL": "https://www.successcds.net/learn-english/class-9"
        },
        {
            "Title": "NCERT Book For Class 9 English PDF - Download Now - Byjus",
            "URL": "https://byjus.com/ncert-books-class-9-english"
        },
        {
            "Title": "CBSE Class 9 English Notes And Summary - BYJUS",
            "URL": "https://byjus.com/cbse-notes/english-notes-class-9"
        },
        {
            "Title": "NCERT Solutions for CBSE Class 9 English TopperLearning",
            "URL": "https://www.topperlearning.com/ncert-solutions/cbse-class-9-english"
        },
        {
            "Title": "NCERT Class 9 English Main Course Book [2020 - 21 Edition …",
            "URL": "https://www.ncertbooks.guru/ncert-class-9-english-book"
        },
        {
            "Title": "NCERT Solutions for Class 9 English in PDF updated for 2021-2022. - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-9/english"
        },
        {
            "Title": "NCERT 2021: Get the updated English NCERT Book For Class 9",
            "URL": "https://www.embibe.com/exams/ncert-books-for-class-9-english"
        },
        {
            "Title": "NCERT solutions for class 9 English (Updated for 2020-21) - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-english"
        },
        {
            "Title": "Grade 9 | English | Kullabs",
            "URL": "https://www.kullabs.com/class-9/english-1"
        },
        {
            "Title": "Class 9 English - YouTube",
            "URL": "https://www.youtube.com/watch?v=cdVCr_kEdNE"
        },
        {
            "Title": "English 9 - CBSE Online",
            "URL": "https://cbse.online/class-9/english-9"
        },
        {
            "Title": "NCERT Solutions for Class 9 English Beehive Chapter 1 The ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-9-english-beehive-the-fun-they-had"
        },
        {
            "Title": "CBSE Class 9 English Grammar 2021 | Download Exclusive 9th ...",
            "URL": "https://www.kopykitab.com/blog/cbse-class-9-english-grammar"
        },
        {
            "Title": "NCERT Solutions for Class 9 English Beehive Chapter 2 The ...",
            "URL": "https://byjus.com/ncert-solutions-class-9-english/beehive-chapter-2"
        },
        {
            "Title": "MCQ Questions for Class 9 English Beehive",
            "URL": "https://www.studyrankers.com/2021/08/mcq-questions-for-class-9-english-beehive.html"
        },
        {
            "Title": "English Class 9 - YouTube",
            "URL": "https://www.youtube.com/c/EnglishClass9/videos"
        },
        {
            "Title": "NCERT English class 9 Beehive Chapter 4? - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/discussion/question/ncert-english-class-9-beehive-chapter-4"
        },
        {
            "Title": "English 9th Class Pairing Scheme 2021 | 9th English Scheme ...",
            "URL": "https://biseweb.com/english-9th-class-pairing-scheme-2021-9th-english-scheme-paper"
        },
        {
            "Title": "CBSE Class 9 English Notes - Learn CBSE",
            "URL": "https://www.learncbse.in/class-9-english-notes"
        },
        {
            "Title": "Introduction to Tenses | English Grammer Tenses | Class 9 ... - YouTUbe",
            "URL": "https://www.youtube.com/watch?v=dQopxi5PpL4"
        },
        {
            "Title": "Class 9 English Notes for FBISE - Notes, Exercises ...",
            "URL": "https://classnotes.xyz/class-9-english-notes-fbise"
        },
        {
            "Title": "NCERT Solutions for Class 9 English Moments Chapter 5 The ... - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-9-english/supplementary-chapter-5"
        },
        {
            "Title": "MCQ Questions for Class 9 English with Answers Beehive ...",
            "URL": "https://www.learncram.com/cbse/mcq-questions-for-class-9-english-with-answers"
        },
        {
            "Title": "Formal Letter Writing Topics for Class 9 Format, Samples ...",
            "URL": "https://www.learncram.com/english-grammar/formal-letter-writing-topics-for-class-9"
        },
        {
            "Title": "Extra Questions for Class 9 English Beehive, Moments ... - Learn Insta",
            "URL": "https://www.learninsta.com/extra-questions-for-class-9-english"
        },
        {
            "Title": "NCERT Solutions for Class 9 Hindi - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-class-9-hindi"
        },
        {
            "Title": "NCERT Solutions for Class 9 Hindi Kshitij क्षितिज भाग 1 - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-9th-hindi-kshitiz"
        },
        {
            "Title": "NCERT Solutions for Class 9 Hindi Updated for 2020-21 - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-hindi"
        },
        {
            "Title": "NCERT Solutions for Class 9 Hindi Kshitij, Kritika ... - Learn Insta",
            "URL": "https://www.learninsta.com/ncert-solutions-for-class-9-hindi"
        },
        {
            "Title": "NCERT Solutions for Class 9 Hindi (Updated for 2021-2022) - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-9/hindi"
        },
        {
            "Title": "NCERT Solutions for Class 9 Hindi, Free NCERT Solutions ...",
            "URL": "https://www.freencertsolutions.com/ncert-solutions-for-class-9-hindi"
        },
        {
            "Title": "NCERT Solutions for CBSE Class 9 Hindi TopperLearning",
            "URL": "https://www.topperlearning.com/ncert-solutions/cbse-class-9-hindi"
        },
        {
            "Title": "NCERT Class 9th Hindi Book PDF - Kshitij, Kritika, Sparsh ...",
            "URL": "https://www.jagranjosh.com/articles/ncert-books-for-class-9-hindi-pdf-1603379852-1"
        },
        {
            "Title": "NCERT Hindi Book Class 9 Chapterwise PDF - BYJUS",
            "URL": "https://byjus.com/ncert-books-class-9-hindi"
        },
        {
            "Title": "NCERT Class 9 Hindi Book PDF - Vedantu",
            "URL": "https://www.vedantu.com/ncert-books/ncert-books-class-9-hindi"
        },
        {
            "Title": "NCERT 2021- Download revised Hindi Textbooks for Class 9",
            "URL": "https://www.embibe.com/exams/ncert-books-for-class-9-hindi"
        },
        {
            "Title": "Class 9 Hindi - biovisions.in",
            "URL": "https://www.biovisions.in/p/class-9-hindi.html"
        },
        {
            "Title": "NCERT Solutions for Class 9 Hindi - Study Rankers",
            "URL": "https://www.studyrankers.com/2019/07/ncert-solutions-for-class-9-hindi.html"
        },
        {
            "Title": "NCERT Solutions for Class 9th Kshitiz I Hindi",
            "URL": "https://www.studyrankers.com/2014/11/kshitiz-class-9th-ncert-solutions-in-hindi.html"
        },
        {
            "Title": "NCERT Solutions for Class 9th Sparsh Hindi",
            "URL": "https://www.studyrankers.com/2014/11/sparsh-i-class-9th-ncert-solutions-in-hindi.html"
        },
        {
            "Title": "NCERT Solutions for Class 9 Hindi - Download Fully Solved ...",
            "URL": "https://myncert.com/ncert-solutions-class-9-hindi"
        },
        {
            "Title": "Download 9th Class Hindi Syllabus For Course A and B",
            "URL": "https://www.embibe.com/exams/cbse-class-9-hindi-syllabus"
        },
        {
            "Title": "Download NCERT Class 9 Hindi Book PDF",
            "URL": "https://wbbsebooks.com/ncert-class-9-hindi-book-pdf"
        },
        {
            "Title": "Class 9th NCERT Books Hindi Medium",
            "URL": "https://vksofficial.blogspot.com/p/class-9th-ncert-hindi-medium.html"
        },
        {
            "Title": "KSEEB Solutions for Class 9 Hindi वल्लरी Karnataka State ...",
            "URL": "https://www.kseebsolutions.com/kseeb-solutions-class-9-hindi"
        },
        {
            "Title": "1St Hindi Worksheet / Download Cbse Class 9 Hindi ...",
            "URL": "https://talkstrendings.blogspot.com/2021/08/1st-hindi-worksheet-download-cbse-class.html"
        },
        {
            "Title": "CBSE Syllabus For Class 9 Hindi 2021-22 | Download Term ... - BYJUS",
            "URL": "https://byjus.com/cbse-class-9-hindi-syllabus"
        },
        {
            "Title": "NCERT Class 9 Hindi Sparsh and Sanchayan Explanation ...",
            "URL": "https://www.successcds.net/Class9/hindi"
        },
        {
            "Title": "CBSE Class 9 Hindi Syllabus 2021-22 (Released) in PDF",
            "URL": "https://school.edufever.com/cbse/class-9-hindi-syllabus"
        },
        {
            "Title": "MCQ Questions for Class 9 Hindi Sparsh",
            "URL": "https://www.studyrankers.com/2021/08/mcq-questions-for-class-9-hindi-sparsh.html"
        },
        {
            "Title": "MCQ Questions for Class 9 Hindi with Answers Kshitij ... - Learn Insta",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-9-hindi-with-answers"
        },
        {
            "Title": "NCERT Solutions For Class 9 Sparsh Hindi Chapter 4 - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-9-sparsh-hindi-chapter-4"
        },
        {
            "Title": "Latest CBSE Class 9 Hindi Sample Papers 2020-21 for Hindi ...",
            "URL": "https://www.kopykitab.com/blog/cbse-class-9-hindi-sample-papers"
        },
        {
            "Title": "Top 20 Hindi Moral Story For Class 9 हिंदी नैतिक कहानी ...",
            "URL": "https://www.hindimein.in/2019/12/hindi-moral-story-for-class-9.html"
        },
        {
            "Title": "CLASS 9 HINDI - YouTube",
            "URL": "https://www.youtube.com/playlist?list=PLhdLeRS-9igdUGb6RhBPL6IhrkcSZEVMR"
        },
        {
            "Title": "NCERT Class 9 Hindi Kshitij Book PDF - Download New ...",
            "URL": "https://www.jagranjosh.com/articles/ncert-book-class-9-hindi-kshitij-pdf-1600717588-1"
        },
        {
            "Title": "Oswaal CBSE Question Bank Class 9 Hindi B Book. Latest For ...",
            "URL": "https://thebookmasters.in/product/oswaal-cbse-question-bank-class-9-hindi-b-book-chapterwise-topicwise-with-paperback-latest-for-examination-2021-22"
        },
        {
            "Title": "NCERT Solutions for Class 9 Maths (Hindi Medium)",
            "URL": "https://www.ncert-solutions.com/class-9-maths-hindi"
        },
        {
            "Title": "NCERT Solutions for Class 9 Social Science SST in Hindi ...",
            "URL": "https://www.ncert-solutions.com/class-9-social-science-hindi"
        },
        {
            "Title": "MCQ Questions for Class 9 Hindi Kshitij with Answers - Learn Insta",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-9-hindi-kshitij-with-answers"
        },
        {
            "Title": "NCERT Solutions for Class 9 Social Science ... - Learn CBSE",
            "URL": "https://www.learncbse.in/ncert-solutions-for-class-9-social-science"
        },
        {
            "Title": "NCERT Solutions for Class 9 Social Science Updated for ... - BYJUS",
            "URL": "https://byjus.com/ncert-solutions-class-9-social-science"
        },
        {
            "Title": "NCERT Solutions Class 9 Social Science Updated for 2020-21 - Vedantu",
            "URL": "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-social-science"
        },
        {
            "Title": "NCERT Solutions for Class 9 Social Science-History, Geog ... - Tiwari Academy",
            "URL": "https://www.tiwariacademy.com/ncert-solutions/class-9/social-science"
        },
        {
            "Title": "NCERT Solutions for Class 9 Social Science - Download Free ...",
            "URL": "https://www.aakash.ac.in/ncert-solutions/class-9/social-science"
        },
        {
            "Title": "NCERT Book for 9th Social Science PDF! - Jagran Josh",
            "URL": "https://www.jagranjosh.com/articles/ncert-textbooks-for-class-9-social-science-history-geography-economics-civics-1586775469-1"
        },
        {
            "Title": "SOCIAL SCIENCE - CBSE Academic",
            "URL": "http://cbseacademic.nic.in/web_material/CurriculumMain22/Sec/Social_Science_Sec_2021-22.pdf"
        },
        {
            "Title": "NCERT Solutions for Class 9 Social Science | AglaSem Schools",
            "URL": "https://schools.aglasem.com/ncert/ncert-solutions-class-9-social-science"
        },
        {
            "Title": "NCERT- Download Class 9 Social Science NCERT Books 2021",
            "URL": "https://www.embibe.com/exams/ncert-books-for-class-9-social-science"
        },
        {
            "Title": "Access CBSE Class 9 Social Science Notes. - BYJUS",
            "URL": "https://byjus.com/cbse-notes/class-9-social-science-notes"
        },
        {
            "Title": "Class 9 Social science - biovisions.in",
            "URL": "https://www.biovisions.in/p/class-9-social-science.html"
        },
        {
            "Title": "SOCIAL SCIENCE - CBSE",
            "URL": "http://www.cbseacademic.nic.in/web_material/CurriculumMain22/Sec/Social_Science_Sec_2021-22.pdf"
        },
        {
            "Title": "CBSE Syllabus for Class 9 Social Science 2021-2022 PDF - Vedantu",
            "URL": "https://www.vedantu.com/syllabus/cbse-class-9-social-science-syllabus"
        },
        {
            "Title": "NCERT Solutions for Class 9 Social Science in PDF (2020 - 2021) - Tiwari Academy",
            "URL": "https://www.tiwariacademy.in/ncert-solutions/class-9/social-science"
        },
        {
            "Title": "NCERT Social Science Book Class 9 PDF - BYJUS",
            "URL": "https://byjus.com/ncert-books-class-9-social-science"
        },
        {
            "Title": "Term Wise CBSE Syllabus for Class 9 Social Science 2021-22 - BYJUS",
            "URL": "https://byjus.com/cbse-class-9-social-science-syllabus"
        },
        {
            "Title": "SCERT Kerala Books for Class 9 Social Science | Kerala ...",
            "URL": "https://www.ncertbooks.guru/scert-kerala-books-for-class-9-social-science"
        },
        {
            "Title": "GSEB Solutions Class 9 Social Science Chapter 9 ...",
            "URL": "https://gsebsolutions.com/gseb-solutions-class-9-social-science-chapter-9"
        },
        {
            "Title": "Class 9 Social Science Chapter Notes - DronStudy.com",
            "URL": "https://www.dronstudy.com/book/class-9-social-science-notes"
        },
        {
            "Title": "MCQ Questions for Class 9 Social Science with Answers PDF ... - Learn Insta",
            "URL": "https://www.learninsta.com/mcq-questions-for-class-9-social-science-with-answers"
        },
        {
            "Title": "SEBA Class 9 Social Science Solutions » Dev Library",
            "URL": "https://devlibrary.in/class-9-social-science-solutions"
        },
        {
            "Title": "CBSE Syllabus for Class 9 Social Science 2021-22 [Revised ...",
            "URL": "https://schools.aglasem.com/cbse/cbse-syllabus-class-9-social-science"
        },
        {
            "Title": "Class 9 Social Science Books by Goyal Brothers Prakashan ...",
            "URL": "https://www.kopykitab.com/Class-9-Social-Science/Books/Goyal-Brothers-Prakashan/Textbook/English"
        },
        {
            "Title": "PDF CLASS IX Deleted portion (NCERT Textbook) UNIT 1: INDIA ...",
            "URL": "http://cbseacademic.nic.in/web_material/CurriculumMain21/revisedsyllabi/Deduction/DELETEDSocial_Science_Sec_2020-21.pdf"
        },
        {
            "Title": "Extra Questions for Class 9 Social Science SST with Answers - Learninsta",
            "URL": "https://www.learninsta.com/extra-questions-for-class-9-social-science"
        },
        {
            "Title": "NCERT Class 9 Social Science Book PDF - Vedantu",
            "URL": "https://www.vedantu.com/ncert-books/ncert-books-class-9-social-science"
        },
        {
            "Title": "Download Social Science CBSE Sample Paper for Class 9 - Byjus",
            "URL": "https://byjus.com/cbse-sample-papers-for-class-9-social-science"
        },
        {
            "Title": "Oswaal CBSE Question Bank Class 9 Social Science (Reduced ...",
            "URL": "https://www.government-job.info/oswaal-cbse-question-bank-class-9-social-science-reduced-syllabus-for-2021-exam"
        },
        {
            "Title": "Social Science (SST) Class 9 (Videos | Docs | MCQs)",
            "URL": "https://edurev.in/courses/2396_Social-Science--SST--Class-9--Videos--Docs--MCQs-"
        },
        {
            "Title": "Kerala Syllabus 9th Standard Social Science Solutions ...",
            "URL": "https://www.hsslive.guru/kerala-syllabus-9th-standard-social-science-solutions"
        },
        {
            "Title": "NCERT Solutions for Class 9 Social Science Geography ...",
            "URL": "https://www.yosearch.net/ncert-solutions/ncert-solutions-for-class-9-social-science-geography-physical-features-of-india"
        }
    ];

    return Index;
}
