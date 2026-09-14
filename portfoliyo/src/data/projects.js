import blueone from "../assets/images/blue1.jpg";
import bluecolorapp from "../assets/images/blue2.jpg";
import cabbooking from "../assets/images/cab.png";
import hospital from "../assets/images/hospital.jpg";
import railmadad from "../assets/images/railmadad.jpeg";
import resturent from "../assets/images/resturent.png";

export const projects = [
  {
    id: "restaurant-erp",
    title: "Restaurant Operations & Digital Ordering Platform",
    category: "web",
    featured: true,
    image: resturent,
    tagline: "Full-stack web application for menu administration, table ordering, and operational billing.",
    problem:
      "Hospitality environments face coordination latency between dining rooms and kitchen staff, manual paper billing discrepancies, and delayed updates to menu availability.",
    solution:
      "Developed a full-stack platform featuring a responsive customer ordering interface and a role-protected administrative dashboard, facilitating live order progression tracking and centralized catalog management.",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    metrics: "Atomic order state updates & role-segregated access",
    architecture: [
      { layer: "Presentation", detail: "Next.js App Router client with responsive component architecture" },
      { layer: "Backend Service", detail: "Express REST API with middleware validation and JWT authentication" },
      { layer: "Data Persistence", detail: "MongoDB collections with compound indexing on order and menu documents" },
    ],
    features: [
      "Customer ordering interface with real-time cart state and automated total calculation",
      "Administrative dashboard for menu item CRUD operations and price updates",
      "Role-segregated routing protecting administrative actions from general diner sessions",
      "Order lifecycle tracking through discrete operational states (Received, Preparing, Completed)",
      "Customer review and rating feedback integration",
    ],
    links: {
      github: "https://github.com/TUSHAR-hase/resto.git",
      live: "https://github.com/TUSHAR-hase/resto.git",
    },
  },
  {
    id: "rail-madad",
    title: "Rail Madad: Automated Grievance Intake & Triage System",
    category: "ai",
    featured: true,
    image: railmadad,
    tagline: "Multi-channel grievance management platform combining web intake with NLP classification.",
    problem:
      "High volumes of railway passenger complaints submitted via web and voice calls require substantial manual sorting, resulting in administrative delays before routing to responsible departments.",
    solution:
      "Architected a centralized grievance management system integrating a web intake portal, voice call speech-to-text conversion, and a Scikit-learn NLP text classifier that categorizes complaints into divisional queues.",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Python", "Scikit-learn"],
    metrics: "Automated department routing across multiple operational divisions",
    architecture: [
      { layer: "Intake Layer", detail: "Responsive web interface and voice call audio ingestion" },
      { layer: "Processing Pipeline", detail: "Speech-to-text transcription paired with TF-IDF classification" },
      { layer: "API & Data", detail: "Node/Express backend indexing grievances by ticket ID and PNR" },
      { layer: "Admin Console", detail: "Departmental dashboards for divisional staff dispatch" },
    ],
    features: [
      "Dual intake channels supporting both written form submission and voice call audio processing",
      "Automated text classification routing complaints to Sanitation, Security, Catering, and Mechanical queues",
      "Public grievance status lookup by unique reference identifier",
      "Administrative oversight dashboard with priority sorting and resolution records",
    ],
    links: {
      github: "https://github.com/TUSHAR-hase/Rail_Madad_backend",
      live: "https://rail-madad-demo.vercel.app",
    },
  },
  {
    id: "cab-booking",
    title: "Cab Booking & Trip Verification Platform",
    category: "web",
    featured: true,
    image: cabbooking,
    tagline: "Intercity travel booking system with vehicle allocation and OTP trip verification.",
    problem:
      "Intercity ride scheduling requires verified passenger-driver handshakes to avoid unauthorized departures, billing disputes, and uncertain ride state progression.",
    solution:
      "Engineered an end-to-end booking web application with dynamic fare calculation, driver assignment workflows, and two-party OTP verification ensuring secure trip commencement.",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    metrics: "Two-party OTP handshake preventing fraudulent trip starts",
    architecture: [
      { layer: "User Interface", detail: "Next.js client interface for route search and trip status display" },
      { layer: "State Engine", detail: "Express backend managing ride lifecycle and OTP verification logic" },
      { layer: "Database", detail: "MongoDB database storing user credentials, driver records, and trip histories" },
    ],
    features: [
      "Route search and booking flow with distance estimation and fare calculation",
      "Driver assignment protocol with availability toggles",
      "Two-factor OTP handshake required before drivers initiate trip meters",
      "Real-time trip status transitions visible across rider and driver views",
      "Admin monitoring dashboard for active trip oversight",
    ],
    links: {
      github: "https://github.com/naikJagrav/bookinHub.git",
      live: "https://cab-booking-one-jade.vercel.app/",
    },
  },
  {
    id: "blue-color-app",
    title: "Blue Color: Community Skill Marketplace",
    category: "app",
    featured: true,
    image: bluecolorapp,
    tagline: "Mobile application connecting skilled tradespeople with local project opportunities.",
    problem:
      "Skilled manual workers and technicians frequently lack direct digital avenues to showcase verified trade competencies and discover local opportunities without intermediaries.",
    solution:
      "Developed a cross-platform mobile application in Flutter connected to Firebase Firestore, providing structured skill profiles, localized opportunity feeds, and direct communication.",
    tech: ["Flutter", "Dart", "Firebase Firestore", "Cloud Messaging", "Firebase Auth"],
    metrics: "Real-time document synchronization via Firestore streams",
    architecture: [
      { layer: "Mobile Application", detail: "Flutter client with reactive state management and responsive UI" },
      { layer: "Cloud Database", detail: "Firebase Firestore document collections with granular security rules" },
      { layer: "Messaging", detail: "Firebase Cloud Messaging delivering push alerts for matching opportunities" },
    ],
    features: [
      "Structured trade profile creation with skill tags and portfolio details",
      "Localized opportunity discovery feed filterable by trade category",
      "Direct messaging channel for project coordination between clients and workers",
      "Cloud messaging push notifications for newly listed matching jobs",
      "Offline data caching allowing workers to review saved opportunities in low-connectivity areas",
    ],
    links: {
      github: "https://github.com/TUSHAR-hase/blue-color-app.git",
    },
  },
  {
    id: "hospital-ehr",
    title: "Hospital Clinical Records & Scheduling System",
    category: "systems",
    featured: false,
    image: hospital,
    tagline: "Healthcare administration platform for outpatient registration and appointment scheduling.",
    problem:
      "Manual and uncoordinated clinical records impede patient intake, cause doctor double-booking, and slow down retrieval of historical consultation notes.",
    solution:
      "Architected a role-based clinical workflow platform providing receptionists with intake scheduling tools and doctors with structured consultation records and prescription histories.",
    tech: ["Node.js", "Express", "MongoDB", "JavaScript", "HTML5", "CSS3"],
    metrics: "Role-based authorization isolating medical records",
    architecture: [
      { layer: "Interface", detail: "Modular dashboard views configured by user role" },
      { layer: "API Backend", detail: "Express REST routes enforcing session validation and role authorization" },
      { layer: "Persistence", detail: "MongoDB collections storing patient demographics and medical visits" },
    ],
    features: [
      "Role-segregated views for medical practitioners, reception staff, and patients",
      "Outpatient registration and historical medical record indexing",
      "Time-slot appointment scheduling system preventing consultation overlap",
      "Structured diagnostic note and prescription logging",
    ],
    links: {
      github: "https://github.com/TUSHAR-hase/hospital-management.git",
      live: "https://hospital-management-puce.vercel.app",
    },
  },
  {
    id: "garbage-detection-yolo",
    title: "Waste Detection & Localization Pipeline (YOLOv8)",
    category: "ai",
    featured: false,
    image: "/project-covers/garbage-detection-yolo.svg",
    tagline: "Computer vision pipeline for automated public waste detection in camera feeds.",
    problem:
      "Public sanitation monitoring relies on manual field inspections that cannot systematically identify localized waste accumulation or overflowing receptacles across municipal areas.",
    solution:
      "Trained and evaluated a YOLOv8 convolutional object detection model integrated with OpenCV to identify and localize debris in video camera frames with bounding-box coordinates.",
    tech: ["Python", "YOLOv8", "OpenCV", "Deep Learning", "NumPy"],
    metrics: "Automated object bounding-box coordinate generation",
    architecture: [
      { layer: "Model Backbone", detail: "YOLOv8 deep learning architecture trained on labeled waste imagery" },
      { layer: "Vision Pipeline", detail: "OpenCV video frame ingestion and preprocessing loop" },
      { layer: "Detection Output", detail: "Bounding box coordinate calculations with confidence scoring" },
    ],
    features: [
      "Object detection on static photographs and streaming video frames",
      "Categorization across multiple waste categories (plastics, paper, organic waste)",
      "Bounding-box coordinate extraction for logging and reporting",
      "Optimized frame processing loop designed for edge deployment",
    ],
    links: {
      github: "https://github.com/TUSHAR-hase",
    },
  },
  {
    id: "women-safety-sos",
    title: "Women Safety Guardian: One-Touch Alert Application",
    category: "app",
    featured: false,
    image: "/project-covers/women-safety-app.svg",
    tagline: "Emergency mobile application for distress signaling and live GPS broadcast.",
    problem:
      "During acute distress, navigating multi-step smartphone interfaces to request assistance is infeasible, requiring a single-action emergency trigger.",
    solution:
      "Developed a Flutter mobile application that activates an emergency response protocol upon a single gesture, transmitting continuous GPS coordinates to designated emergency contacts.",
    tech: ["Flutter", "Dart", "Firebase", "Geolocation APIs"],
    metrics: "Single-action emergency trigger with live coordinate broadcast",
    architecture: [
      { layer: "Trigger Interface", detail: "Accessible single-touch emergency widget" },
      { layer: "Location Service", detail: "High-accuracy background GPS coordinate acquisition" },
      { layer: "Alert Dispatch", detail: "Firebase Realtime syncing with automated SMS messaging fallback" },
    ],
    features: [
      "One-touch emergency SOS trigger with optional audible distress siren",
      "Continuous live GPS location streaming accessible through a secure web link",
      "Designated emergency contact management with priority dialing integration",
      "Low-overhead background location polling protocol",
    ],
    links: {
      github: "https://github.com/TUSHAR-hase",
    },
  },
  {
    id: "line-follower-robot",
    title: "Autonomous Line-Tracking Robotics Control System",
    category: "systems",
    featured: false,
    image: "/project-covers/line-follower-robot.svg",
    tagline: "Embedded micro-controller system utilizing infrared reflectance and closed-loop motor control.",
    problem:
      "Autonomous ground robots require low-latency sensor feedback to maintain precise trajectory tracking without overshooting or lateral oscillation.",
    solution:
      "Engineered embedded C++ control firmware on an Arduino micro-controller interfacing with a 5-channel infrared reflectance array and differential drive motor controllers running a closed-loop feedback algorithm.",
    tech: ["Arduino", "Embedded C++", "IR Sensor Array", "L298N Motor Driver", "Hardware Design"],
    metrics: "Real-time deterministic sensor feedback loop",
    architecture: [
      { layer: "Sensory Interface", detail: "5-channel infrared reflectance sensor array" },
      { layer: "Control Firmware", detail: "Embedded C++ control loop executing threshold analysis" },
      { layer: "Actuation", detail: "Dual H-Bridge motor driver regulating independent wheel PWM voltages" },
    ],
    features: [
      "Sensor threshold calibration for high-contrast optical line tracking",
      "PWM voltage regulation for smooth trajectory following and 90-degree cornering",
      "Hardware circuit noise filtering to prevent motor interference on sensor lines",
      "Deterministic closed-loop control maintaining path stability",
    ],
    links: {
      github: "https://github.com/TUSHAR-hase",
    },
  },
  {
    id: "farmer-marketplace",
    title: "Agricultural Direct Produce Marketplace",
    category: "web",
    featured: false,
    image: "/project-covers/farmer-marketplace.svg",
    tagline: "Commerce web portal connecting agricultural producers directly with wholesale buyers.",
    problem:
      "Agricultural growers frequently lose substantial margin to multi-tiered brokers due to limited price discovery and direct market access.",
    solution:
      "Constructed a web application enabling farmers to list seasonal harvests with reserve pricing and allowing wholesale buyers to search produce listings and initiate direct procurement.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    metrics: "Direct producer-to-buyer transaction coordination",
    architecture: [
      { layer: "Farmer Portal", detail: "Mobile-responsive harvest listing and inventory management interface" },
      { layer: "Buyer Catalog", detail: "Search and filterable produce catalog with pricing visibility" },
      { layer: "Data Layer", detail: "MongoDB collections storing user accounts, produce listings, and inquiries" },
    ],
    features: [
      "Simplified harvest listing interface designed for accessible crop entry",
      "Produce search filterable by crop type, quantity, and harvest availability window",
      "Direct inquiry messaging linking farmers with verified buyers",
      "User authentication securing account and listing operations",
    ],
    links: {
      github: "https://github.com/TUSHAR-hase",
    },
  },
  {
    id: "ai-storytelling",
    title: "AI Creative Story Sequencing Pipeline",
    category: "ai",
    featured: false,
    image: blueone,
    tagline: "Experimental pipeline exploring deterministic narrative generation and content safety.",
    problem:
      "Automated narrative generation from brief prompts requires structured scene pacing, character consistency, and strict age-appropriate content boundaries.",
    solution:
      "Prototyped a Python and React application that translates creative prompts into structured, sequenced scenes while enforcing deterministic guardrails for child-safe content.",
    tech: ["Python", "Generative AI", "React", "Automation"],
    metrics: "Deterministic safety guardrail enforcement",
    architecture: [
      { layer: "Prompt Interface", detail: "User prompt intake and scene pacing coordinator" },
      { layer: "Filtering Engine", detail: "Deterministic rule-based safety and vocabulary filters" },
      { layer: "Reader Client", detail: "React interactive presentation reader" },
    ],
    features: [
      "Prompt-guided narrative generation with consistent character identities",
      "Deterministic vocabulary and theme filtering preventing inappropriate generation",
      "Interactive turn-by-turn reading layout",
    ],
    links: {
      github: "https://github.com/TUSHAR-hase",
    },
  },
];
