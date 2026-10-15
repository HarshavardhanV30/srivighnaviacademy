import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import javaLogo from "../assets/Java-Logo.png";
import pythonLogo from "../assets/python logo.jpeg";
import javaFullStack from "../assets/java-fullstack.jpg";
import pythonFullStack from "../assets/python full stack.jpeg";
import mernStack from "../assets/mernstack.jpeg";
import dataAnalytics from "../assets/data analytics.jpeg";
import genaiLogo from "../assets/genai logo.png";
import devopsLogo from "../assets/devops.png";
import javaSqlLogo from "../assets/java with sql combo.png";
const courses = [
  {
  title: "Java Development",

  image: javaLogo,

  category: "Programming",

  level: "Beginner",

  duration: "45 Days",

  mode: "Online Live",

  badge: "Popular",

  description:
    "Master Java programming from fundamentals to advanced concepts through practical coding, projects, DSA, JDBC, testing, and interview preparation.",

  topics: [
    "Java Introduction & JVM",
    "Java Fundamentals",
    "Variables & Data Types",
    "Operators & Type Casting",
    "Control Statements",
    "Arrays",
    "Strings",
    "Methods",
    "Classes & Objects",
    "Encapsulation",
    "Inheritance",
    "Polymorphism",
    "Abstraction",
    "Interfaces",
    "Packages & Access Modifiers",
    "Exception Handling",
    "Wrapper Classes & Enums",
    "Collections Framework",
    "Generics",
    "Lambda Expressions",
    "Stream API",
    "Optional & Date-Time API",
    "File Handling & I/O",
    "Multithreading & Concurrency",
    "JDBC & Database Connectivity",
    "JVM & Memory Management",
    "Testing & Debugging",
    "Design Principles & Patterns",
    "DSA with Java",
    "Projects & Interview Preparation",
  ],

  modules: [
    {
      name: "Module 1 - Introduction to Java",
      topics: [
        "Introduction to Java",
        "History & Evolution of Java",
        "Features of Java",
        "Java Applications",
        "Java Editions",
        "JDK",
        "JRE",
        "JVM",
        "JDK vs JRE vs JVM",
        "JVM Architecture",
        "Bytecode",
        "Java Compilation & Execution",
        "Java Installation",
        "IDE Setup",
        "First Java Program",
      ],
    },

    {
      name: "Module 2 - Java Fundamentals",
      topics: [
        "Java Syntax",
        "Java Program Structure",
        "Keywords",
        "Identifiers",
        "Variables",
        "Constants",
        "Primitive Data Types",
        "Reference Data Types",
        "Literals",
        "Comments",
        "Variable Scope",
        "Variable Lifetime",
        "Naming Conventions",
      ],
    },

    {
      name: "Module 3 - Operators & Type Conversion",
      topics: [
        "Arithmetic Operators",
        "Unary Operators",
        "Assignment Operators",
        "Relational Operators",
        "Logical Operators",
        "Ternary Operator",
        "Bitwise Operators",
        "Shift Operators",
        "Operator Precedence",
        "Operator Associativity",
        "Type Casting",
        "Widening",
        "Narrowing",
        "Implicit Conversion",
        "Explicit Conversion",
      ],
    },

    {
      name: "Module 4 - Input, Output & Control Statements",
      topics: [
        "Scanner",
        "BufferedReader",
        "Command-Line Arguments",
        "System.out",
        "print()",
        "println()",
        "printf()",
        "if Statement",
        "if-else",
        "else-if",
        "Nested if",
        "switch Statement",
        "Switch Expressions",
        "for Loop",
        "while Loop",
        "do-while Loop",
        "Nested Loops",
        "break",
        "continue",
        "return",
      ],
    },

    {
      name: "Module 5 - Arrays",
      topics: [
        "Array Fundamentals",
        "Array Declaration",
        "Array Initialization",
        "One-Dimensional Arrays",
        "Two-Dimensional Arrays",
        "Multidimensional Arrays",
        "Jagged Arrays",
        "Array of Objects",
        "Array Traversal",
        "Searching Arrays",
        "Sorting Arrays",
        "Copying Arrays",
        "Comparing Arrays",
        "Arrays Utility Class",
        "Common Array Programs",
      ],
    },

    {
      name: "Module 6 - Strings",
      topics: [
        "String Introduction",
        "String Creation",
        "String Literals",
        "String Pool",
        "String Immutability",
        "String Comparison",
        "String Methods",
        "String Searching",
        "String Manipulation",
        "substring()",
        "indexOf()",
        "replace()",
        "split()",
        "trim()",
        "StringBuilder",
        "StringBuffer",
        "String vs StringBuilder vs StringBuffer",
        "String Practice Programs",
      ],
    },

    {
      name: "Module 7 - Methods",
      topics: [
        "Method Introduction",
        "Method Declaration",
        "Method Definition",
        "Method Calling",
        "Parameters",
        "Arguments",
        "Return Types",
        "Void Methods",
        "Static Methods",
        "Instance Methods",
        "Method Overloading",
        "Varargs",
        "Recursion",
        "Pass-by-Value",
        "Method Scope",
        "Method-Based Programs",
      ],
    },

    {
      name: "Module 8 - Classes & Objects",
      topics: [
        "Object-Oriented Programming Introduction",
        "Classes",
        "Objects",
        "Fields",
        "Instance Variables",
        "Instance Methods",
        "Object Creation",
        "Constructors",
        "Default Constructor",
        "Parameterized Constructor",
        "Constructor Overloading",
        "Constructor Chaining",
        "this Keyword",
        "Object References",
      ],
    },

    {
      name: "Module 9 - Encapsulation & Inheritance",
      topics: [
        "Encapsulation",
        "Data Hiding",
        "Getters & Setters",
        "Access Control",
        "Inheritance",
        "extends Keyword",
        "Parent & Child Classes",
        "Single Inheritance",
        "Multilevel Inheritance",
        "Hierarchical Inheritance",
        "super Keyword",
        "Constructor Chaining",
        "IS-A Relationship",
        "HAS-A Relationship",
        "Composition",
        "Aggregation",
      ],
    },

    {
      name: "Module 10 - Polymorphism & Abstraction",
      topics: [
        "Polymorphism",
        "Compile-Time Polymorphism",
        "Method Overloading",
        "Runtime Polymorphism",
        "Method Overriding",
        "Dynamic Method Dispatch",
        "Upcasting",
        "Downcasting",
        "Abstraction",
        "Abstract Classes",
        "Abstract Methods",
        "Interfaces",
        "Implementing Interfaces",
        "Multiple Interfaces",
        "Default Interface Methods",
        "Static Interface Methods",
        "Abstract Class vs Interface",
      ],
    },

    {
      name: "Module 11 - Packages, Access Modifiers & Object Class",
      topics: [
        "Packages",
        "Built-in Packages",
        "User-Defined Packages",
        "import Statement",
        "Static Import",
        "public",
        "private",
        "protected",
        "default Access",
        "Object Class",
        "toString()",
        "equals()",
        "hashCode()",
        "getClass()",
        "instanceof",
      ],
    },

    {
      name: "Module 12 - Exception Handling",
      topics: [
        "Exception Introduction",
        "Error vs Exception",
        "Exception Hierarchy",
        "Checked Exceptions",
        "Unchecked Exceptions",
        "try Block",
        "catch Block",
        "finally Block",
        "Multiple catch",
        "Nested try",
        "throw",
        "throws",
        "Exception Propagation",
        "Custom Exceptions",
        "User-Defined Exceptions",
        "Try-with-Resources",
        "Common Java Exceptions",
      ],
    },

    {
      name: "Module 13 - Wrapper Classes, Enum & Annotations",
      topics: [
        "Wrapper Classes",
        "Integer",
        "Double",
        "Float",
        "Long",
        "Character",
        "Boolean",
        "Autoboxing",
        "Unboxing",
        "Parsing",
        "Enum",
        "Enum Constants",
        "Enum Methods",
        "Enum with switch",
        "EnumSet",
        "EnumMap",
        "Annotations",
        "Built-in Annotations",
        "Custom Annotations Basics",
      ],
    },

    {
      name: "Module 14 - Collection Framework",
      topics: [
        "Collection Framework Introduction",
        "Iterable",
        "Collection Interface",
        "List",
        "Set",
        "Queue",
        "Deque",
        "Map",
        "Collection Hierarchy",
        "ArrayList",
        "LinkedList",
        "Vector",
        "Stack",
        "HashSet",
        "LinkedHashSet",
        "TreeSet",
        "PriorityQueue",
        "ArrayDeque",
      ],
    },

    {
      name: "Module 15 - Map, Iterator & Sorting",
      topics: [
        "HashMap",
        "LinkedHashMap",
        "TreeMap",
        "Hashtable",
        "ConcurrentHashMap Basics",
        "Iterator",
        "ListIterator",
        "Enhanced for Loop",
        "Comparable",
        "compareTo()",
        "Comparator",
        "compare()",
        "Natural Ordering",
        "Custom Sorting",
        "Collections Utility Class",
        "Fail-Fast Concept",
        "Collection Practice Programs",
      ],
    },

    {
      name: "Module 16 - Generics",
      topics: [
        "Generic Programming",
        "Generic Classes",
        "Generic Methods",
        "Generic Interfaces",
        "Type Parameters",
        "Generic Collections",
        "Bounded Types",
        "Upper Bounds",
        "Lower Bounds",
        "Wildcards",
        "Unbounded Wildcards",
        "Type Safety",
        "Type Erasure Basics",
      ],
    },

    {
      name: "Module 17 - Lambda & Functional Interfaces",
      topics: [
        "Functional Programming",
        "Lambda Expressions",
        "Lambda Syntax",
        "Functional Interfaces",
        "Predicate",
        "Consumer",
        "Supplier",
        "Function",
        "UnaryOperator",
        "BinaryOperator",
        "BiPredicate",
        "BiConsumer",
        "BiFunction",
        "Method References",
        "Constructor References",
        "@FunctionalInterface",
      ],
    },

    {
      name: "Module 18 - Stream API",
      topics: [
        "Stream API Introduction",
        "Stream Creation",
        "Stream vs Collection",
        "Intermediate Operations",
        "Terminal Operations",
        "filter()",
        "map()",
        "flatMap()",
        "sorted()",
        "distinct()",
        "limit()",
        "skip()",
        "forEach()",
        "collect()",
        "reduce()",
        "count()",
        "min()",
        "max()",
        "findFirst()",
        "findAny()",
         ],
    },

    {
      name: "Module 19 - Optional & Date-Time API",
      topics: [
        "Null Handling",
        "Optional",
        "Optional.of()",
        "Optional.ofNullable()",
        "Optional.empty()",
        "isPresent()",
        "isEmpty()",
        "ifPresent()",
        "orElse()",
        "orElseGet()",
        "orElseThrow()",
        "LocalDate",
        "LocalTime",
        "LocalDateTime",
        "ZonedDateTime",
        "Period",
        "Duration",
        "Date Formatting",
        "Date Parsing",
        "Time Zones",
      ],
    },

    {
      name: "Module 20 - File Handling & I/O",
      topics: [
        "File Handling",
        "File Class",
        "Creating Files",
        "Reading Files",
        "Writing Files",
        "Copying Files",
        "Moving Files",
        "Deleting Files",
        "Directory Handling",
        "InputStream",
        "OutputStream",
        "FileInputStream",
        "FileOutputStream",
        "Reader",
        "Writer",
        "FileReader",
        "FileWriter",
        "BufferedReader",
        "BufferedWriter",
        "Java NIO Basics",
        "Path",
        "Files",
      ],
    },

    {
      name: "Module 21 - Serialization, Inner Classes & Reflection",
      topics: [
        "Serialization",
        "Deserialization",
        "Serializable",
        "serialVersionUID",
        "transient Keyword",
        "ObjectOutputStream",
        "ObjectInputStream",
        "Inner Classes",
        "Static Nested Classes",
        "Local Inner Classes",
        "Anonymous Inner Classes",
        "Reflection Introduction",
        "Class Object",
        "Reflection Fields",
        "Reflection Methods",
        "Reflection Constructors",
      ],
    },

    {
      name: "Module 22 - Multithreading & Concurrency",
      topics: [
        "Process vs Thread",
        "Thread Introduction",
        "Thread Lifecycle",
        "Thread Class",
        "Runnable",
        "Callable",
        "Thread Methods",
        "start()",
        "run()",
        "sleep()",
        "join()",
        "interrupt()",
        "Daemon Threads",
        "Thread Priority",
        "Synchronization",
        "Synchronized Methods",
        "Synchronized Blocks",
        "Race Conditions",
        "Deadlock",
        "wait()",
        "notify()",
        "notifyAll()",
      ],
    },
    {
      name: "Module 23 - Projects & Interview Preparation",
      topics: [
        "Real-Time Application",
        "Final Project",
        "Core Java Interview Questions",
        "OOP Interview Questions",
        "Collections Interview Questions",
        "Exception Handling Questions",
        "Multithreading Questions",
        "Coding Interview Questions",
        "Output-Based Questions",
        "Debugging Questions",
        "Mock Technical Interview",
        "Project Explanation",
        "HR Interview Preparation",
      ],
    },
  ],
},
  {
  title: "Python Programming",
  category: "Programming",
  image: pythonLogo,
  level: "Beginner to Advanced",

  duration: "2 Months",

  mode: "Online Live",

  badge: "Popular",

  description:
    "Learn Python programming from fundamentals to advanced concepts with practical coding, OOP, file handling, databases, APIs, projects, and interview preparation.",

  topics: [
    "Python Fundamentals",
    "Variables & Data Types",
    "Operators",
    "Input & Output",
    "Control Statements",
    "Loops",
    "Functions",
    "Recursion",
    "Lists",
    "Tuples",
    "Sets",
    "Dictionaries",
    "Strings",
    "List Comprehensions",
    "Modules & Packages",
    "Exception Handling",
    "File Handling",
    "Object-Oriented Programming",
    "Inheritance & Polymorphism",
    "Lambda Functions",
    "Functional Programming",
    "Regular Expressions",
    "Date & Time",
    "Virtual Environments",
    "Data Structures & Algorithms",
    "Python Coding Practice",
    "Mini Projects",
    "Final Project",
    "Interview Preparation",
  ],

  modules: [
    {
      name: "Module 1 - Introduction to Python",
      topics: [
        "Introduction to Python",
        "History of Python",
        "Features of Python",
        "Applications of Python",
        "Python Versions",
        "Python Installation",
        "Python Interpreter",
        "Python IDEs",
        "VS Code",
        "PyCharm",
        "Python Program Structure",
        "First Python Program",
        "Python Coding Standards",
      ],
    },

    {
      name: "Module 2 - Python Fundamentals",
      topics: [
        "Python Syntax",
        "Keywords",
        "Identifiers",
        "Variables",
        "Constants",
        "Comments",
        "Dynamic Typing",
        "Variable Naming",
        "Data Types",
        "Type Checking",
        "Type Conversion",
        "Type Casting",
        "Mutable and Immutable Objects",
      ],
    },

    {
      name: "Module 3 - Operators & Input Output",
      topics: [
        "Arithmetic Operators",
        "Assignment Operators",
        "Comparison Operators",
        "Logical Operators",
        "Identity Operators",
        "Membership Operators",
        "Bitwise Operators",
        "Operator Precedence",
        "input()",
        "print()",
        "Formatted Output",
        "f-Strings",
        "String Formatting",
      ],
    },

    {
      name: "Module 4 - Conditional Statements",
      topics: [
        "if Statement",
        "if-else",
        "elif",
        "Nested Conditions",
        "Conditional Expressions",
        "Multiple Conditions",
        "Truth Values",
        "Truthy and Falsy Values",
        "Practical Conditional Programs",
      ],
    },

    {
      name: "Module 5 - Loops & Control Flow",
      topics: [
        "for Loop",
        "while Loop",
        "Nested Loops",
        "range()",
        "break",
        "continue",
        "pass",
        "Loop else",
        "Enumerate",
        "Zip",
        "Pattern Programs",
        "Number Programs",
      ],
    },

    {
      name: "Module 6 - Strings",
      topics: [
        "String Fundamentals",
        "String Creation",
        "String Indexing",
        "String Slicing",
        "String Methods",
        "upper()",
        "lower()",
        "strip()",
        "replace()",
        "split()",
        "join()",
        "find()",
        "count()",
        "startswith()",
        "endswith()",
        "String Formatting",
        "String Practice Programs",
      ],
    },

    {
      name: "Module 7 - Lists",
      topics: [
        "List Introduction",
        "Creating Lists",
        "List Indexing",
        "List Slicing",
        "List Methods",
        "append()",
        "extend()",
        "insert()",
        "remove()",
        "pop()",
        "sort()",
        "reverse()",
        "copy()",
        "Nested Lists",
        "List of Objects",
        "List Comprehensions",
        "List Practice Programs",
      ],
    },

    {
      name: "Module 8 - Tuples, Sets & Dictionaries",
      topics: [
        "Tuples",
        "Tuple Operations",
        "Tuple Methods",
        "Sets",
        "Set Operations",
        "Union",
        "Intersection",
        "Difference",
        "Symmetric Difference",
        "Set Methods",
        "Dictionaries",
        "Dictionary Keys & Values",
        "Dictionary Methods",
        "Nested Dictionaries",
        "Dictionary Comprehensions",
        "Practical Collection Programs",
      ],
    },

    {
      name: "Module 9 - Functions",
      topics: [
        "Function Introduction",
        "Defining Functions",
        "Calling Functions",
        "Parameters",
        "Arguments",
        "Return Values",
        "Default Arguments",
        "Keyword Arguments",
        "Positional Arguments",
        "Variable-Length Arguments",
        "*args",
        "**kwargs",
        "Scope of Variables",
        "Local Variables",
        "Global Variables",
        "Nonlocal Variables",
        "Docstrings",
      ],
    },

    {
      name: "Module 10 - Recursion & Lambda",
      topics: [
        "Recursion",
        "Recursive Functions",
        "Base Condition",
        "Factorial Using Recursion",
        "Fibonacci Using Recursion",
        "Lambda Functions",
        "Lambda Syntax",
        "Lambda with Lists",
        "Lambda with sorted()",
        "Lambda with filter()",
        "Lambda with map()",
        "Lambda with reduce()",
      ],
    },

    {
      name: "Module 11 - Comprehensions & Functional Programming",
      topics: [
        "List Comprehensions",
        "Set Comprehensions",
        "Dictionary Comprehensions",
        "Nested Comprehensions",
        "map()",
        "filter()",
        "reduce()",
        "zip()",
        "enumerate()",
        "any()",
        "all()",
        "sorted()",
        "Functional Programming Basics",
      ],
    },

    {
      name: "Module 12 - Modules & Packages",
      topics: [
        "Modules",
        "Creating Modules",
        "Importing Modules",
        "import Statement",
        "from import",
        "as Keyword",
        "Built-in Modules",
        "math",
        "random",
        "statistics",
        "os",
        "sys",
        "Creating Packages",
        "Package Structure",
        "__init__.py",
        "Module Search Path",
      ],
    },

    {
      name: "Module 13 - Exception Handling",
      topics: [
        "Exception Introduction",
        "Syntax Errors",
        "Runtime Errors",
        "try",
        "except",
        "else",
        "finally",
        "Multiple Exceptions",
        "raise",
        "Custom Exceptions",
        "User-Defined Exceptions",
        "Exception Hierarchy",
        "Exception Handling Best Practices",
      ],
    },

    {
      name: "Module 14 - File Handling",
      topics: [
        "File Handling Introduction",
        "Opening Files",
        "Reading Files",
        "Writing Files",
        "Appending Files",
        "File Modes",
        "with Statement",
        "read()",
        "readline()",
        "readlines()",
        "write()",
        "writelines()",
        "Working with Directories",
        "os Module",
        "pathlib",
      ],
    },

    {
      name: "Module 15 - Object-Oriented Programming",
      topics: [
        "OOP Introduction",
        "Classes",
        "Objects",
        "Attributes",
        "Methods",
        "Constructors",
        "__init__()",
        "self",
        "Instance Variables",
        "Class Variables",
        "Instance Methods",
        "Class Methods",
        "Static Methods",
        "Encapsulation",
        "Properties",
      ],
    },

    {
      name: "Module 16 - OOPS,Inheritance & Polymorphism",
      topics: [
        "Inheritance",
        "Single Inheritance",
        "Multiple Inheritance",
        "Multilevel Inheritance",
        "Hierarchical Inheritance",
        "Hybrid Inheritance",
        "super()",
        "Method Overriding",
        "Polymorphism",
        "Duck Typing",
        "Method Resolution Order",
        "MRO",
        "Abstraction",
        "Abstract Classes",
        "ABC Module",
      ],
    },
    {
      name: "Module 17 - Projects & Interview Preparation",
      topics: [
        "Python Coding Practice",
        "Console Applications",
        "Calculator Project",
        "Python Interview Questions",
        "Python OOP Interview Questions",
        "Collections Interview Questions",
        "Exception Handling Questions",
        "File Handling Questions",
        "Advanced Python Questions",
        "Coding Interview Questions",
        "Output-Based Questions",
        "Mock Technical Interview",
        "Project Explanation",
        "HR Interview Preparation",
      ],
    },
  ],
},
 {
  title: "Java Full Stack Development",
  image: javaFullStack,
  category: "Full Stack",
  level: "Advanced",
  duration: "6 - 8 Months",
  mode: "Online Live",

  description:
    "Become a complete Java Full Stack Developer with strong frontend, Java backend, database, enterprise application, Spring Boot, Hibernate, REST API and deployment skills.",

  topics: [
    "Web Fundamentals",
    "HTML5",
    "CSS3",
    "JavaScript ES5 & ES6",
    "TypeScript",
    "React JS",
    "React Hooks",
    "Redux",
    "REST API Integration",
    "Core Java",
    "OOP",
    "Collections Framework",
    "Exception Handling",
    "Multithreading",
    "I/O Streams",
    "Socket Programming",
    "Java Reflection",
    "Generics",
    "Lambda Expressions",
    "Java Modules",
    "SQL",
    "JDBC",
    "MySQL",
    "Java EE / JEE",
    "Servlets",
    "JSP",
    "JSTL",
    "Design Patterns",
    "Maven",
    "Spring Framework",
    "Spring JDBC",
    "Spring ORM",
    "Hibernate",
    "JPA",
    "Spring Boot",
    "Spring Boot REST API",
    "Spring Boot MVC",
    "Spring Boot Security",
    "Microservices",
    "Git",
    "GitHub",
    "Authentication",
    "Deployment",
    "Real-Time Projects"
  ],

  modules: [

    // =====================================================
    // MODULE 1 - WEB FUNDAMENTALS
    // =====================================================
    {
      name: "Module 1 - Web Fundamentals",
      topics: [
        "Introduction to Web",
        "What is Web?",
        "Web Features",
        "W3C and W3C Members",
        "Introduction to WHATWG",
        "Web Standards",
        "Client-Server Architecture",
        "Web Browsers",
        "Web Servers",
        "HTTP and HTTPS Basics"
      ]
    },

    // =====================================================
    // MODULE 2 - HTML
    // =====================================================
    {
      name: "Module 2 - HTML5",
      topics: [
        "Core HTML",
        "Introduction to HTML",
        "Parts of HTML Document",
        "Document Version Information",
        "Head Section",
        "Meta Information",
        "Favicons",
        "Body Section",
        "HTML Headings",
        "Paragraphs",
        "Lists",
        "Tables",
        "Anchors",
        "Images",
        "HTML Forms",
        "Form Controls",
        "Input Types",
        "Advanced HTML5",
        "HTML5 History",
        "Why HTML5?",
        "HTML5 New Features",
        "HTML5 Structure",
        "Structure of HTML5 Document",
        "Power of HTML5",
        "HTML5 Semantics",
        "Block Level Elements",
        "HTML5 Forms",
        "HTML5 Multimedia",
        "HTML5 Graphics",
        "Canvas",
        "SVG"
      ]
    },

    // =====================================================
    // MODULE 3 - CSS
    // =====================================================
    {
      name: "Module 3 - CSS3",
      topics: [
        "Core CSS",
        "Introduction to CSS",
        "CSS Basics",
        "CSS Syntax",
        "CSS Versions",
        "CSS Selectors",
        "CSS ID and Class",
        "CSS Styling",
        "Background Styling",
        "Text Styling",
        "Font Styling",
        "CSS Borders",
        "CSS Box Model",
        "CSS3 Modules",
        "Advanced Selectors",
        "Backgrounds and Borders",
        "Text Effects",
        "2D Transformations",
        "3D Transformations",
        "CSS Animations",
        "Advanced Animations",
        "Multiple Column Layout",
        "User Interface Styling",
        "Flexbox",
        "CSS Grid",
        "Responsive Web Design",
        "Media Queries"
      ]
    },

    // =====================================================
    // MODULE 4 - JAVASCRIPT
    // =====================================================
    {
      name: "Module 4 - JavaScript ES5 & ES6",
      topics: [
        "Introduction to JavaScript",
        "JavaScript Basics",
        "Variables",
        "Data Types",
        "Operators",
        "Functions",
        "Arrays",
        "Objects",
        "DOM",
        "BOM",
        "Events",
        "Intervals",
        "Objects and Prototypes",
        "Hoisting",
        "Closures",
        "Let",
        "Const",
        "Arrow Functions",
        "Classes",
        "Inheritance",
        "Map",
        "Filter",
        "Reduce",
        "Template Literals",
        "forEach",
        "for-in Loop",
        "for-of Loop",
        "Promises",
        "Async/Await",
        "Fetch API",
        "JSON",
        "Exception Handling"
      ]
    },

    // =====================================================
    // MODULE 5 - TYPESCRIPT
    // =====================================================
    {
      name: "Module 5 - TypeScript",
      topics: [
        "Introduction to TypeScript",
        "Why TypeScript?",
        "TypeScript Installation",
        "Basic Types",
        "Variables and Types",
        "Functions",
        "Classes",
        "Interfaces",
        "Inheritance",
        "Modules",
        "TypeScript with React"
      ]
    },

    // =====================================================
    // MODULE 6 - REACT
    // =====================================================
    {
      name: "Module 6 - React JS",
      topics: [
        "Introduction to React JS",
        "What is React JS?",
        "What is SPA?",
        "DOM vs Virtual DOM",
        "Advantages and Disadvantages",
        "Key Features of React",
        "Node.js Installation",
        "NPM Installation",
        "React CLI / Project Setup",
        "Project Directory Structure",
        "Code Editors",
        "How React Application Boots",
        "React Concepts",
        "JSX",
        "TSX",
        "Render Elements",
        "Function Components",
        "Class Components",
        "Props",
        "State",
        "Event Handling",
        "Dynamic Data Rendering",
        "Property Binding",
        "Conditional Rendering",
        "Lists and Keys",
        "Forms",
        "Form Handling",
        "Form Validation"
      ]
    },

    // =====================================================
    // MODULE 7 - REACT ADVANCED
    // =====================================================
    {
      name: "Module 7 - Advanced React",
      topics: [
        "Component Lifecycle",
        "Understanding Component Lifecycle",
        "Lifecycle Hooks",
        "React Event System",
        "Passing Arguments to Event Handlers",
        "Network Calls",
        "Fetch",
        "Axios",
        "Custom Services",
        "Introduction to Services",
        "Building Services",
        "Local Storage",
        "Session Storage",
        "Cookies",
        "React Router",
        "Route Configuration",
        "Dynamic Routes",
        "Route Parameters",
        "Nested Routes",
        "Link and NavLink",
        "Redirect Routes",
        "UI Components",
        "Third-Party Modules"
      ]
    },

    // =====================================================
    // MODULE 8 - REDUX
    // =====================================================
    {
      name: "Module 8 - Redux & State Management",
      topics: [
        "Introduction to Redux",
        "Why Redux?",
        "Redux Installation",
        "Redux Setup",
        "Store",
        "Reducers",
        "Actions",
        "Dispatchers",
        "Higher Order Components",
        "mapStateToProps",
        "mapDispatchToProps",
        "Advanced Redux",
        "Async Actions",
        "Middleware",
        "Redux Thunk",
        "Redux Saga",
        "React Hooks",
        "Why Hooks?",
        "useState",
        "useEffect",
        "useReducer",
        "useRef",
        "Custom Hooks",
        "Rules of Hooks"
      ]
    },

    // =====================================================
    // MODULE 9 - REACT REAL-TIME FEATURES
    // =====================================================
    {
      name: "Module 9 - React Application Development",
      topics: [
        "Social Login",
        "Pagination",
        "Search",
        "Filtering",
        "JWT Authentication",
        "File Upload",
        "REST API Integration",
        "CRUD Operations",
        "API Error Handling",
        "Protected Routes",
        "Role-Based Access",
        "Jest Testing",
        "Enzyme",
        "React Application Testing",
        "React Application Deployment",
        "Production Build",
        "Application Hosting"
      ]
    },

    // =====================================================
    // MODULE 10 - CORE JAVA
    // =====================================================
    {
      name: "Module 10 - Introduction to Java",
      topics: [
        "Why Java was Developed",
        "Application Areas of Java",
        "History of Java",
        "Platform Independency",
        "Java Features",
        "Sun-Oracle Deal",
        "Different Java Platforms",
        "JDK",
        "JRE",
        "JVM",
        "Difference Between JDK, JRE and JVM",
        "Java Versions",
        "JVM Architecture",
        "Installing Java on Windows",
        "PATH Variable",
        "Understanding PATH Configuration",
        "Creating First Java Program",
        "Text Editors",
        "Compiling Java Files",
        "Byte Code",
        "Class Files",
        "Running Java Programs"
      ]
    },

    // =====================================================
    // MODULE 11 - JAVA FUNDAMENTALS
    // =====================================================
    {
      name: "Module 11 - Java Language Fundamentals",
      topics: [
        "Identifiers",
        "Keywords",
        "Variables",
        "Literals",
        "Data Types",
        "Operators",
        "Comments",
        "Looping Statements",
        "Conditional Statements",
        "Type Casting",
        "Upcasting",
        "Downcasting"
      ]
    },

    // =====================================================
    // MODULE 12 - OOP
    // =====================================================
    {
      name: "Module 12 - Object Oriented Programming",
      topics: [
        "Why OOP?",
        "OOP Concepts with Real-Life Examples",
        "Class and Syntax",
        "Objects and Syntax",
        "Reference Variables",
        "Constructors",
        "Instance Variables",
        "Static Variables",
        "Instance Methods",
        "Static Methods",
        "this Keyword",
        "Object Initializers",
        "Static Initializers",
        "Anonymous Blocks",
        "Inheritance",
        "Types of Inheritance",
        "Object Class",
        "Variable Hiding",
        "Method Hiding",
        "Method Overriding",
        "Method Overloading",
        "super Keyword",
        "final Keyword",
        "Constructor Chaining",
        "Static Binding",
        "Dynamic Binding",
        "Runtime Polymorphism",
        "Abstract Classes",
        "Abstract Methods",
        "Interfaces",
        "Encapsulation",
        "Association"
      ]
    },

    // =====================================================
    // MODULE 13 - PACKAGES, ARRAYS & WRAPPERS
    // =====================================================
    {
      name: "Module 13 - Packages, Arrays & Wrapper Classes",
      topics: [
        "Understanding Packages",
        "Setting Classpath",
        "Access Modifiers",
        "Within Package Access",
        "Outside Package Access",
        "implements Keyword",
        "Nested Types",
        "Static Nested Class",
        "Non-Static Nested Class",
        "Local Class",
        "Anonymous Class",
        "Nested Interface",
        "Arrays",
        "1-D Arrays",
        "2-D Arrays",
        "Jagged Arrays",
        "Array of Reference Types",
        "Array Operations",
        "User Defined Arrays",
        "Object Type Arrays",
        "Command Line Arguments",
        "Wrapper Classes",
        "Parsing Numeric Strings",
        "String Representation of Primitives"
      ]
    },

    // =====================================================
    // MODULE 14 - EXCEPTION & STRINGS
    // =====================================================
    {
      name: "Module 14 - Exception Handling & Strings",
      topics: [
        "Runtime Errors",
        "Exceptions",
        "Exception Class Hierarchy",
        "try and catch",
        "Catch Block Patterns",
        "Nested try",
        "throw",
        "throws",
        "finally",
        "Custom Exceptions",
        "Checked Exceptions",
        "Unchecked Exceptions",
        "Assertions",
        "String Class",
        "Creating String Objects",
        "String Operations",
        "StringBuffer",
        "StringBuilder",
        "String vs StringBuffer",
        "StringBuffer vs StringBuilder"
      ]
    },

    // =====================================================
    // MODULE 15 - ADVANCED JAVA
    // =====================================================
    {
      name: "Module 15 - Advanced Java Concepts",
      topics: [
        "Reflection",
        "Need for Reflection",
        "Class Modifiers",
        "Fields",
        "Methods",
        "Constructors",
        "Super Classes",
        "Interface Information",
        "Runtime Class Creation",
        "Accessing Object Fields",
        "Invoking Methods at Runtime",
        "Invoking Private Methods",
        "Generics",
        "Lambda Expressions",
        "Annotations",
        "Object Cloning",
        "Varargs",
        "Static Import",
        "Enum",
        "Static Interface Methods",
        "Default Interface Methods",
        "Private Interface Methods",
        "var Type",
        "Java Modules"
      ]
    },

    // =====================================================
    // MODULE 16 - COLLECTIONS
    // =====================================================
    {
      name: "Module 16 - Collections Framework",
      topics: [
        "What is Collection?",
        "What is Framework?",
        "Collections Framework",
        "Core Interfaces",
        "Collection",
        "List",
        "Queue",
        "Deque",
        "Set",
        "NavigableSet",
        "SortedSet",
        "Map",
        "NavigableMap",
        "SortedMap",
        "ArrayList",
        "LinkedList",
        "PriorityQueue",
        "ArrayDeque",
        "HashSet",
        "LinkedHashSet",
        "TreeSet",
        "HashMap",
        "IdentityHashMap",
        "WeakHashMap",
        "LinkedHashMap",
        "TreeMap",
        "Iterator",
        "ListIterator",
        "for-each Loop",
        "User Defined Objects",
        "Comparator",
        "Comparable",
        "Legacy Classes",
        "Enumeration",
        "Vector",
        "Stack",
        "Hashtable",
        "Properties"
      ]
    },

    // =====================================================
    // MODULE 17 - MULTITHREADING
    // =====================================================
    {
      name: "Module 17 - Multithreaded Programming",
      topics: [
        "Multitasking",
        "Concurrent Execution",
        "Multiprocessing vs Multithreading",
        "Main Thread",
        "Creating Child Threads",
        "Context Switching",
        "Thread States",
        "Thread Group",
        "Thread Synchronization",
        "Synchronization Methods",
        "Synchronization Blocks",
        "Inter-Thread Communication",
        "Daemon Threads",
        "Deadlock"
      ]
    },

    // =====================================================
    // MODULE 18 - I/O & SOCKET
    // =====================================================
    {
      name: "Module 18 - I/O Streams & Socket Programming",
      topics: [
        "Introduction to I/O",
        "Need for Streams",
        "Byte Streams",
        "Character Streams",
        "File Read Operations",
        "File Write Operations",
        "Scanner Class",
        "Object Serialization",
        "Object Deserialization",
        "Transient Keyword",
        "File Class",
        "Network Fundamentals",
        "Socket",
        "ServerSocket",
        "InetAddress",
        "DatagramSocket",
        "DatagramPacket",
        "URL",
        "URLConnection",
        "HttpURLConnection",
        "Stream API"
      ]
    },

    // =====================================================
    // MODULE 19 - SQL
    // =====================================================
    {
      name: "Module 19 - SQL & Database Programming",
      topics: [
        "Introduction to SQL",
        "Database Fundamentals",
        "Relational Databases",
        "Database Tables",
        "Primary Key",
        "Foreign Key",
        "Constraints",
        "DDL",
        "DML",
        "DQL",
        "TCL",
        "DCL",
        "SELECT",
        "INSERT",
        "UPDATE",
        "DELETE",
        "WHERE",
        "ORDER BY",
        "GROUP BY",
        "HAVING",
        "Aggregate Functions",
        "Joins",
        "Subqueries",
        "Views",
        "Stored Procedures",
        "Functions",
        "Transactions",
        "MySQL",
        "Oracle",
        "MongoDB",
        "Database Design"
      ]
    },

    // =====================================================
    // MODULE 20 - JDBC
    // =====================================================
    {
      name: "Module 20 - JDBC",
      topics: [
        "Need for JDBC",
        "JDBC Architecture",
        "JDBC Drivers",
        "DriverManager",
        "Connection",
        "Statement",
        "PreparedStatement",
        "CallableStatement",
        "ResultSet",
        "Scrollable ResultSet",
        "Updatable ResultSet",
        "Batch Updates",
        "Transactions",
        "Commit",
        "Rollback",
        "Database Metadata",
        "Connecting Java Application with MySQL",
        "CRUD Operations using JDBC"
      ]
    },

    // =====================================================
    // MODULE 21 - JAVA EE / JEE
    // =====================================================
    {
      name: "Module 21 - Java EE / JEE",
      topics: [
        "Introduction to Java EE",
        "JEE Specification",
        "Java EE Architecture",
        "Single Tier Architecture",
        "Two Tier Architecture",
        "Three Tier Architecture",
        "N-Tier Architecture",
        "Java EE Components",
        "Web Components",
        "Business Components",
        "Distributed Components",
        "Java EE Containers",
        "Application Servers",
        "Web Containers",
        "Apache Tomcat",
        "EJB Containers",
        "WebLogic",
        "GlassFish",
        "WebSphere",
        "JNDI Service",
        "Java Transaction Service",
        "JAAS",
        "JMS"
      ]
    },

    // =====================================================
    // MODULE 22 - SERVLETS
    // =====================================================
    {
      name: "Module 22 - Java Servlets",
      topics: [
        "Introduction to Web Programming",
        "Role of Servlet",
        "Servlet Lifecycle",
        "Servlet Annotations",
        "@WebServlet",
        "@WebInitParam",
        "@WebListener",
        "@WebFilter",
        "@MultipartConfig",
        "Request Dispatching",
        "Request Parameters",
        "Request Attributes",
        "ServletConfig",
        "ServletContext",
        "File Uploading",
        "File Downloading",
        "Session Tracking",
        "State Management",
        "Cookies",
        "URL Rewriting",
        "Hidden Form Fields",
        "Session Object",
        "Events and Listeners",
        "Dependency Injection",
        "Servlet Refreshing",
        "Filters"
      ]
    },

    // =====================================================
    // MODULE 23 - JSP
    // =====================================================
    {
      name: "Module 23 - JSP & JSTL",
      topics: [
        "JSP Architecture",
        "JSP Elements",
        "JSP Objects",
        "JavaBeans",
        "Custom Tags",
        "JSTL",
        "JSTL Tags",
        "Expression Language",
        "JSP with Servlets",
        "Dynamic Web Applications"
      ]
    },

    // =====================================================
    // MODULE 24 - JAVA PROJECT DEVELOPMENT
    // =====================================================
    {
      name: "Module 24 - Java Web Project Development",
      topics: [
        "Frontend Coding",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Form Designing",
        "Backend Coding",
        "Database Designing",
        "Connecting Forms to Database",
        "Business Logic",
        "CRUD Application",
        "Project Hosting"
      ]
    },

    // =====================================================
    // MODULE 25 - DESIGN PATTERNS
    // =====================================================
    {
      name: "Module 25 - Design Patterns",
      topics: [
        "Why Design Patterns?",
        "Front Controller Pattern",
        "Composite View Pattern",
        "Factory Pattern",
        "Singleton Pattern",
        "DAO Pattern",
        "MVC Architecture"
      ]
    },

    // =====================================================
    // MODULE 26 - SPRING FRAMEWORK
    // =====================================================
    {
      name: "Module 26 - Spring Framework",
      topics: [
        "Introduction to Spring",
        "What is Spring?",
        "Spring Modules",
        "Dependency Injection",
        "Inversion of Control",
        "Bean Management",
        "Aspect-Oriented Programming",
        "AOP Concepts",
        "Spring Configuration",
        "Spring Application Context"
      ]
    },

    // =====================================================
    // MODULE 27 - SPRING JDBC
    // =====================================================
    {
      name: "Module 27 - Spring Data Access & JDBC",
      topics: [
        "Spring Data Access Philosophy",
        "Configuring Data Source",
        "Using JDBC with Spring",
        "Spring JdbcTemplate",
        "Spring DAO Support Classes",
        "Database Connectivity",
        "CRUD Operations",
        "Transaction Management"
      ]
    },

    // =====================================================
    // MODULE 28 - SPRING BEAN WIRING
    // =====================================================
    {
      name: "Module 28 - Spring Bean Wiring",
      topics: [
        "Spring Beans",
        "Bean Containers",
        "Creating Beans",
        "Injecting Bean Properties",
        "Dependency Injection",
        "Autowiring",
        "Bean Lifecycle",
        "Controlling Bean Creation",
        "Configuration using Annotations"
      ]
    },

    // =====================================================
    // MODULE 29 - JAVA MAIL & DISTRIBUTED PROGRAMMING
    // =====================================================
    {
      name: "Module 29 - Java Mail & Distributed Programming",
      topics: [
        "Java Mail API",
        "Email System",
        "Email Protocols",
        "Sending Emails",
        "Receiving Emails",
        "Email Attachments",
        "Distributed Programming",
        "RMI",
        "Web Services",
        "RESTful Services",
        "@Path",
        "@PathParam",
        "@FormParam",
        "@QueryParam",
        "@DefaultValue"
      ]
    },

    // =====================================================
    // MODULE 30 - JPA
    // =====================================================
    {
      name: "Module 30 - JPA Framework",
      topics: [
        "Overview of JPA",
        "JPA Architecture",
        "JPA Entities",
        "Entity Mapping",
        "Persistence",
        "Relationships",
        "JPA with Hibernate",
        "JPA Repository Concepts"
      ]
    },

    // =====================================================
    // MODULE 31 - HIBERNATE
    // =====================================================
    {
      name: "Module 31 - Hibernate ORM",
      topics: [
        "Introduction to ORM",
        "Need for ORM",
        "Problems with Direct JDBC",
        "ORM Implementation",
        "Introduction to Hibernate",
        "Hibernate Architecture",
        "Hibernate Configuration",
        "Hibernate Support for Other Technologies",
        "Installing Hibernate",
        "Hello World Hibernate Application",
        "Creating Persistent Classes",
        "Mapping Java Classes",
        "Mapping Basic Classes",
        "Mapping Binary Data",
        "Mapping Serializable Classes",
        "Mapping Date and Calendar Attributes",
        "Read-Only Classes",
        "Versioning and Timestamps"
      ]
    },

    // =====================================================
    // MODULE 32 - HIBERNATE MAPPING
    // =====================================================
    {
      name: "Module 32 - Hibernate Mapping & Collections",
      topics: [
        "Inheritance Mapping",
        "Table Per Class Hierarchy",
        "Table Per Subclass Hierarchy",
        "Table Per Concrete Class",
        "Persistence Interfaces",
        "Associations",
        "Lazy Initialization",
        "Mapping Maps",
        "Sorted Maps",
        "Mapping Sets",
        "Sorted Sets",
        "Mapping Lists",
        "Mapping Arrays",
        "Bidirectional Associations",
        "Hibernate Relationships",
        "Hibernate CRUD Operations"
      ]
    },

    // =====================================================
    // MODULE 33 - MAVEN
    // =====================================================
    {
      name: "Module 33 - Maven & Build Management",
      topics: [
        "Introduction to Maven",
        "Maven Configuration",
        "pom.xml",
        "Maven Project Structure",
        "Dependencies",
        "Plugins",
        "Repositories",
        "Converting Maven Projects to Eclipse",
        "Maven Lifecycle",
        "Maven Commands",
        "Build Management",
        "Dependency Management"
      ]
    },

    // =====================================================
    // MODULE 34 - SPRING BOOT
    // =====================================================
    {
      name: "Module 34 - Spring Boot",
      topics: [
        "Introduction to Spring Boot",
        "Spring Boot Architecture",
        "Spring Boot Project Setup",
        "Spring Boot Starter Dependencies",
        "Spring Boot Annotations",
        "Spring Boot Configuration",
        "Application Properties",
        "Spring Boot and JdbcTemplate",
        "Spring Boot and JPA",
        "Spring Boot and Hibernate",
        "Spring Boot MVC",
        "Spring Boot REST API",
        "REST Controllers",
        "Request Mapping",
        "Path Variables",
        "Request Parameters",
        "Request Body",
        "Response Entity",
        "Exception Handling",
        "Validation",
        "Spring Boot Security",
        "Authentication",
        "Authorization",
        "JWT Authentication",
        "Role-Based Access Control"
      ]
    },

    // =====================================================
    // MODULE 35 - SPRING BOOT ADVANCED
    // =====================================================
    {
      name: "Module 35 - Spring Boot Advanced & Microservices",
      topics: [
        "Spring Boot REST API Development",
        "Spring Data JPA",
        "Hibernate Integration",
        "Pagination",
        "Sorting",
        "Filtering",
        "DTO Pattern",
        "Entity Relationships",
        "Global Exception Handling",
        "Logging",
        "API Documentation",
        "Microservices Introduction",
        "Microservices Architecture",
        "Service-to-Service Communication",
        "REST Based Microservices",
        "Configuration Management"
      ]
    },

    // =====================================================
    // MODULE 36 - INTERNATIONALIZATION
    // =====================================================
    {
      name: "Module 36 - Internationalization",
      topics: [
        "System Properties",
        "Internationalization",
        "Understanding Locale",
        "Resource Bundle",
        "Properties Files",
        "Fetching Text from Resource Bundle",
        "Displaying Text in Different Languages",
        "Displaying Hindi Text",
        "Displaying Dates in Hindi",
        "Date Formatting"
      ]
    },

    // =====================================================
    // MODULE 37 - GIT & GITHUB
    // =====================================================
    {
      name: "Module 37 - Git & GitHub",
      topics: [
        "Introduction to Git",
        "Git Installation",
        "Git Configuration",
        "Git Repository",
        "git init",
        "git clone",
        "git add",
        "git commit",
        "git status",
        "git push",
        "git pull",
        "git fetch",
        "Branches",
        "Merge",
        "Conflict Resolution",
        "GitHub Repository",
        "Remote Repository",
        "Pull Requests",
        "Collaborative Development"
      ]
    },

    // =====================================================
    // MODULE 38 - AUTHENTICATION & SECURITY
    // =====================================================
    {
      name: "Module 38 - Authentication & Security",
      topics: [
        "Authentication Fundamentals",
        "Authorization",
        "Login and Registration",
        "Password Security",
        "JWT",
        "JWT Token Generation",
        "JWT Token Validation",
        "Role-Based Authorization",
        "Spring Security",
        "Protected APIs",
        "React Authentication",
        "Protected Routes",
        "Logout",
        "Session Management"
      ]
    },

    // =====================================================
    // MODULE 39 - DEPLOYMENT
    // =====================================================
    {
      name: "Module 39 - Application Deployment",
      topics: [
        "Application Build",
        "Maven Build",
        "JAR Files",
        "WAR Files",
        "Tomcat Deployment",
        "Backend Deployment",
        "Frontend Deployment",
        "Database Configuration",
        "Environment Variables",
        "Production Configuration",
        "API Configuration",
        "Application Hosting",
        "Domain Configuration",
        "Basic Cloud Deployment"
      ]
    },

    // =====================================================
    // MODULE 40 - REAL-TIME PROJECTS
    // =====================================================
    {
      name: "Module 40 - Real-Time Full Stack Projects",
      topics: [
        "Project Requirement Analysis",
        "Project Architecture",
        "UI Design",
        "Frontend Development",
        "React Development",
        "Backend Development",
        "Spring Boot REST APIs",
        "MySQL Integration",
        "Hibernate/JPA Integration",
        "Authentication",
        "Authorization",
        "JWT",
        "CRUD Operations",
        "Search",
        "Filtering",
        "Pagination",
        "File Upload",
        "API Integration",
        "Testing",
        "Git & GitHub",
        "Maven Build",
        "Application Deployment",
        "Project Documentation",
        "Project Presentation",
        "Interview Preparation"
      ]
    }
  ]
},
  {
    title: "Python Full Stack Development",
    image: pythonFullStack,
    category: "Full Stack",
    level: "Advanced",
    duration: "6 - 8 Months",
    mode: "Online Live",
    description:
      "Master full stack development using Python, Django, React and databases.",
    topics: [
      "Python",
      "Advanced Python",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Django",
      "Flask",
      "REST API",
      "MySQL",
      "PostgreSQL",
      "Git",
      "Authentication",
      "Deployment",
      "Projects",
    ],
    modules: [
      {
        name: "Frontend Development",
        topics: [
          "HTML5",
          "CSS3",
          "Forms",
          "Flexbox",
          "Grid",
          "Responsive Design",
        ],
      },
      {
        name: "JavaScript",
        topics: [
          "JavaScript Basics",
          "Variables",
          "Functions",
          "Arrays",
          "Objects",
          "DOM",
          "ES6",
          "Promises",
          "Async/Await",
        ],
      },
      {
        name: "React Development",
        topics: [
          "React",
          "Components",
          "Props",
          "State",
          "Hooks",
          "Forms",
          "Routing",
          "API Integration",
        ],
      },
      {
        name: "Python Backend",
        topics: [
          "Python",
          "OOP",
          "Modules",
          "Packages",
          "Exception Handling",
          "File Handling",
          "Virtual Environment",
        ],
      },
      {
        name: "Django & Flask",
        topics: [
          "Django",
          "Models",
          "Views",
          "Templates",
          "URLs",
          "Forms",
          "Flask",
          "REST API",
        ],
      },
      {
        name: "Database & Projects",
        topics: [
          "MySQL",
          "PostgreSQL",
          "SQL",
          "Joins",
          "Database Design",
          "ORM",
          "Authentication",
          "Deployment",
          "Full Stack Project",
        ],
      },
    ],
  },
  {
    title: "MERN Stack Development",
    image: mernStack,
    category: "Full Stack",
    level: "Advanced",
    duration: "6 - 8 Months",
    mode: "Online Live",
    description:
      "Build modern web applications using MongoDB, Express, React and Node.js.",
    topics: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "JWT",
      "Authentication",
      "Git",
      "GitHub",
      "Deployment",
      "Full Stack Projects",
    ],
    modules: [
      {
        name: "HTML & CSS",
        topics: [
          "HTML5",
          "Semantic HTML",
          "Forms",
          "CSS3",
          "Flexbox",
          "Grid",
          "Responsive Design",
        ],
      },
      {
        name: "JavaScript",
        topics: [
          "Variables",
          "Functions",
          "Arrays",
          "Objects",
          "ES6",
          "Promises",
          "Async/Await",
          "DOM",
        ],
      },
      {
        name: "React",
        topics: [
          "Components",
          "Props",
          "State",
          "Hooks",
          "Forms",
          "Routing",
          "API Integration",
          "React Project",
        ],
      },
      {
        name: "Node & Express",
        topics: [
          "Node.js",
          "NPM",
          "Express.js",
          "Middleware",
          "REST APIs",
          "Authentication",
          "JWT",
        ],
      },
      {
        name: "MongoDB",
        topics: [
          "MongoDB",
          "Collections",
          "Documents",
          "CRUD",
          "Queries",
          "Aggregation",
          "Mongoose",
        ],
      },
      {
        name: "MERN Projects",
        topics: [
          "Authentication",
          "Admin Panel",
          "REST API",
          "E-Commerce Project",
          "Dashboard",
          "Deployment",
          "Final MERN Project",
        ],
      },
    ],
  },
{
  title: "Data Analyst with Generative AI",
  image: dataAnalytics,
  category: "Data & Analytics",
  level: "Beginner",
  duration: "4 - 5 Months",
  mode: "Online Live",
  badge: "Popular",

  description:
    "Become a job-ready Data Analyst with Python, Statistics, Machine Learning, SQL, Excel, Tableau, Power BI, Generative AI and real-time project experience.",

  topics: [
    "Python for Data Analytics",
    "Python Programming",
    "Object-Oriented Programming",
    "Python Data Structures",
    "File Handling",
    "Pandas",
    "NumPy",
    "Data Cleaning",
    "Data Analysis",
    "Data Science",
    "Statistics",
    "Probability",
    "Hypothesis Testing",
    "Exploratory Data Analysis",
    "Feature Engineering",
    "Machine Learning",
    "Linear Regression",
    "Logistic Regression",
    "KNN",
    "Decision Trees",
    "Random Forest",
    "Support Vector Machine",
    "Ensemble Learning",
    "Data Visualization",
    "SQL",
    "Excel",
    "Power Query",
    "Power Pivot",
    "Tableau",
    "Power BI",
    "DAX",
    "Generative AI",
    "Prompt Engineering",
    "ChatGPT",
    "Gemini",
    "Claude",
    "Perplexity",
    "Git",
    "GitHub",
    "Real-Time Projects",
    "Resume Preparation",
    "Mock Interviews",
  ],

  modules: [

    // =====================================================
    // MODULE 1 - PYTHON FOR DATA ANALYTICS
    // =====================================================
    {
      name: "Module 1 - Python for Data Analytics",
      topics: [
        // Python Basics
        "Need for Programming",
        "Advantages of Programming",
        "Overview of Python",
        "Organizations Using Python",
        "Python Applications in Various Domains",
        "Python Installation",
        "Variables",
        "Operands and Expressions",
        "Conditional Statements",
        "Loops",

        // Functions & OOP
        "User-Defined Functions",
        "Return Statement",
        "__main__ Concept",
        "Function Parameters",
        "Different Types of Arguments",
        "Global Variables",
        "Global Keyword",
        "Command Line Arguments",
        "User Input",
        "eval() Function",
        "Variable Scope",
        "Returning Values",
        "Lambda Functions",
        "Built-in Functions",
        "Introduction to Object-Oriented Programming",
        "Built-in Class Attributes",
        "Public Attributes",
        "Protected Attributes",
        "Private Attributes and Methods",
        "Class Variables",
        "Instance Variables",
        "Constructor",
        "Destructor",
        "Decorators",
        "Core Object-Oriented Principles",
        "Inheritance and Types",
        "Method Resolution Order",
        "Overloading",
        "Overriding",
        "Getter and Setter Methods",
        "Inheritance Case Study",

        // Data Structures & File Operations
        "Python File Input and Output",
        "Lists",
        "Tuples",
        "Strings",
        "Sets",
        "Dictionaries",
        "Data Structures and File Operations",
        "JSON Module",
        "Regular Expressions",
        "Exception Handling",

        // Pandas
        "Introduction to Pandas",
        "Pandas Data Structures",
        "Series",
        "DataFrames",
        "Importing and Exporting Files",
        "Basic Functionalities of Data Objects",
        "Merging Data Objects",
        "Concatenation of Data Objects",
        "Data Manipulation using Pandas",
        "Basics of Data Analysis",

        // NumPy
        "Introduction to NumPy",
        "NumPy Arrays",
        "Operations on Arrays",
        "Indexing",
        "Slicing",
        "Iterating",
        "NumPy Array Attributes",
        "Matrix Product",
        "NumPy Functions",
        "Array Manipulation",
        "File Handling using NumPy",
        "Array Creation and Logic Functions",

        // Libraries & Data Cleaning
        "Standard Libraries",
        "Packages and Import Statements",
        "Reload Function",
        "Important Python Modules",
        "Sys Module",
        "OS Module",
        "Math Module",
        "Date-Time Module",
        "Random Module",
        "Working with Modules",
        "Handling Exceptions",
        "Data Cleaning using Pandas",
        "Exploring Datasets",
      ],
    },

    // =====================================================
    // MODULE 2 - DATA SCIENCE PRIMER & STATISTICS
    // =====================================================
    {
      name: "Module 2 - Data Science Primer and Statistics",
      topics: [
        // Data Science
        "What is Data Science?",
        "What Does Data Science Involve?",
        "Era of Data Science",
        "Business Intelligence vs Data Science",
        "Life Cycle of Data Science",
        "Tools of Data Science",
        "Applications of Data Science",
        "Basics of Data Science",

        // Feature Engineering
        "What is a Feature?",
        "Feature Engineering",
        "Feature Engineering Process",
        "Benefits of Feature Engineering",
        "Feature Engineering Techniques",

        // Exploratory Data Analysis
        "Introduction to EDA",
        "Stages of Analytics",
        "CRISP-DM Data Life Cycle",
        "Data Types",
        "Exploratory Data Analysis",
        "First Business Moment Decision",
        "Second Business Moment Decision",
        "Third Business Moment Decision",
        "Fourth Business Moment Decision",
        "Correlation",

        // Statistics & Probability
        "Basics of Probability",
        "Discrete Probability Distributions",
        "Continuous Probability Distributions",
        "Central Limit Theorem",
        "Inferential Statistics",
        "Hypothesis Testing",
        "Null Hypothesis",
        "Alternate Hypothesis",
        "Making a Decision",
        "Critical Value Method",
        "P-Value Method",
        "Types of Errors",
        "Two-Sample Mean Test",
        "Proportion Test",
        "A/B Testing",
      ],
    },

    // =====================================================
    // MODULE 3 - MACHINE LEARNING
    // =====================================================
    {
      name: "Module 3 - Machine Learning",
      topics: [
        // Linear Regression
        "Simple Linear Regression",
        "Simple Linear Regression in Python",
        "Multiple Linear Regression",
        "Multiple Linear Regression in Python",
        "Industry Relevance of Linear Regression",

        // KNN
        "Data Mining Classifier Technique",
        "Application of KNN Classifier",
        "Lazy Learner Classifier",
        "Hyperparameter K",
        "Altering Hyperparameter K for Better Accuracy",

        // Logistic Regression
        "Univariate Logistic Regression",
        "Multivariate Logistic Regression",
        "Model Building and Evaluation",
        "Logistic Regression Industry Applications",

        // Support Vector Machine
        "Black Box",
        "SVM Hyperplane",
        "Maximum Margin Hyperplane",
        "Kernel Tricks for Non-Linear Spaces",
        "Support Vector Classifier",

        // Decision Tree
        "Rule-Based Classification Method",
        "Different Nodes for Developing Decision Trees",
        "Discretization",
        "Entropy",
        "Decision Tree Classifier",
        "Greedy Approach",
        "Information Gain",

        // Ensemble Learning
        "Challenges with Standalone Models",
        "Reliability and Performance of Standalone Models",
        "Homogeneous Ensemble Technique",
        "Heterogeneous Ensemble Technique",
        "Bagging",
        "Boosting",
        "Ensemble Learning",
        "Random Forest",
        "Stacking",
        "Voting Technique",
        "Averaging Technique",
      ],
    },

    // =====================================================
    // MODULE 4 - DATA VISUALIZATION & STORYTELLING
    // =====================================================
    {
      name: "Module 4 - Data Visualization and Storytelling",
      topics: [
        "Bar Charts",
        "Histograms",
        "Pie Charts",
        "Basic Visualization Tools",
        "Scatter Plots",
        "Line Plots",
        "Regression Visualization",
        "Box Plots",
        "Pair Plot",
        "Word Clouds",
        "Radar Charts",
        "Specialized Visualization Tools",
        "Waffle Charts",
      ],
    },

    // =====================================================
    // MODULE 5 - SQL
    // =====================================================
    {
      name: "Module 5 - SQL",
      topics: [
        // Database Fundamentals
        "Introduction to Databases",
        "Creating a Database Instance on Cloud",
        "Provisioning a Cloud Hosted Database Instance",
        "Getting Started with SQL",
        "Creating Data with SQL",
        "Selecting Data with SQL",
        "Retrieving Data with SQL",
        "What is SQL?",
        "Thinking About Your Data",
        "Relational Models",
        "Transactional Models",
        "ER Diagram",

        // DDL / DML / DQL
        "CREATE TABLE Statement",
        "DROP TABLE Statement",
        "UPDATE Statements",
        "DELETE Statements",
        "SELECT Statement",
        "Creating Temporary Tables",
        "Adding Comments to SQL",

        // Subqueries
        "Using Subqueries",
        "Subquery Best Practices",
        "Subquery Considerations",

        // Joins
        "Joining Tables",
        "Subqueries and Joins",
        "Cartesian Cross Joins",
        "Inner Joins",
        "Aliases",
        "Self Joins",
        "Left Joins",
        "Right Joins",
        "Full Outer Joins",
        "Unions",

        // Filtering
        "Basics of Filtering with SQL",
        "Advanced Filtering",
        "IN Operator",
        "OR Operator",
        "NOT Operator",
        "Filtering Data",
        "Sorting Data",
        "Calculating Data with SQL",
        "Wildcards",
        "ORDER BY",
        "Math Operations",
        "Aggregate Functions",
        "Grouping Data",
        "Text Strings",
        "Date and Time Strings",
        "Modifying Data",
        "Analyzing Data with SQL",
        "Date and Time Examples",
        "CASE Statements",
        "Views",

        // Python Database Connectivity
        "Accessing Databases using Python",
        "DB-API",
        "Writing Code using DB-API",
        "Connecting to a Database",
        "Creating Database Credentials",
        "Connecting to a Database Instance",
        "Creating Tables",
        "Loading Data",
        "Inserting Data",
        "Querying Data",
        "Analysing Data with Python",
      ],
    },

    // =====================================================
    // MODULE 6 - EXCEL
    // =====================================================
    {
      name: "Module 6 - Excel for Data Analytics",
      topics: [
        "Input Data and Handling Large Spreadsheets",
        "Excel Productivity Tricks",
        "Automating Data Analysis",
        "VLOOKUP",
        "IF Function",
        "ROUND Function",
        "Analyzing Data using Excel",
        "Visualizing Data using Excel",
        "Transforming Messy Data",
        "Cleaning Data",
        "Processing Large Data",
        "Organizing Data",
        "Spreadsheet Design Principles",
        "Drop-Down Lists",
        "Data Validation",
        "Creating Charts",
        "Interactive Reports",
        "Excel Pivot Tables",
        "Pivot Charts",
        "Slicers",
        "Timelines",
        "COUNTIFS",
        "COUNT",
        "SUMIFS",
        "AVERAGE",
        "Sort",
        "Filter",
        "Search and Replace",
        "Go To Special",
        "Power Query",
        "Importing Data",
        "Transforming Data",
        "Customizing Microsoft Excel Interface",
        "Professional Report Formatting",
        "Commenting on Cells",
        "AutoFill",
        "Flash Fill",
        "Excel Formulas",
        "Workbook References",
        "Worksheet References",
        "Printing Options",
        "Pareto Chart",
        "Histogram",
        "Treemap",
        "Sunburst Chart",
      ],
    },

    // =====================================================
    // MODULE 7 - TABLEAU
    // =====================================================
    {
      name: "Module 7 - Tableau",
      topics: [
        "Introduction to Data Visualization",
        "Tableau Introduction",
        "Tableau Architecture",
        "Exploring Data using Tableau",
        "Working with Data using Tableau",
        "Data Extraction",
        "Data Blending",
        "Basic Charts",
        "Advanced Charts",

        // Sorting
        "Quick Sort",
        "Sort from Axis",
        "Sorting Legends",
        "Sorting Axis",
        "Sort by Fields",

        // Filtering
        "Dimension Filters",
        "Measure Filters",
        "Date Filters",
        "Tableau Context Filters",

        // Advanced Tableau
        "Reference Lines",
        "Reference Bands",
        "Distribution",
        "Parameters",
        "Dynamic Parameters",
        "Actions",
        "Forecasting",
        "Exponential Smoothing Techniques",
        "Clustering",
        "Calculated Fields",
        "Quick Tables",
        "Tableau Mapping Features",
        "Tableau Dashboards",
        "Dashboard Actions",
        "Tableau Stories",
        "Groups",
        "Sets",
        "Combined Sets",
        "Analyzing Data using Tableau",
        "Visualizing Data using Tableau",
      ],
    },

    // =====================================================
    // MODULE 8 - POWER BI
    // =====================================================
    {
      name: "Module 8 - Power BI",
      topics: [
        // Introduction
        "Introduction to Power BI",
        "Need for Power BI",
        "Importance of Power BI",
        "Advantages of Power BI",
        "Scalable Options",
        "Power BI Data Source Library",
        "Data Warehouse Files",
        "Business Analyst Tools",
        "Microsoft Cloud Tools",
        "Power BI Installation",
        "Power BI Desktop",
        "Sample Reports",
        "Visualization Controls",

        // Desktop & Mobile
        "Understanding Desktop Edition",
        "Understanding Mobile Edition",
        "Report Rendering Options",
        "End User Access",

        // Report Design
        "Report Design with Database Tables",
        "Report Visuals",
        "Fields",
        "UI Options",
        "Multiple Page Reports",
        "Multiple Visualizations",
        "Data Access",
        "GET DATA Options",
        "Report Fields",
        "Filters",
        "Report View Options",
        "Full View",
        "Fit Page",
        "Width Scale",
        "Report Design using Databases",
        "Report Design using Queries",
        "Creating Power BI Reports",
        "Auto Filters",
      ],
    },

    // =====================================================
    // MODULE 9 - GENERATIVE AI FUNDAMENTALS
    // =====================================================
    {
      name: "Module 9 - Generative AI Fundamentals",
      topics: [
        "Introduction to Artificial Intelligence",
        "AI Fundamentals",
        "Machine Learning Overview",
        "Deep Learning Overview",
        "Introduction to Generative AI",
        "Generative AI Applications",
        "Generative AI for Data Analysts",
        "How Generative AI Works",
        "Large Language Models",
        "AI Models",
        "Tokens",
        "Context Window",
        "Temperature",
        "AI Hallucinations",
        "AI Limitations",
        "AI Ethics",
        "Responsible AI",
      ],
    },

    // =====================================================
    // MODULE 10 - GENERATIVE AI TOOLS
    // =====================================================
    {
      name: "Module 10 - Generative AI Tools",
      topics: [
        "ChatGPT",
        "Google Gemini",
        "Claude",
        "Perplexity",
        "AI Tools for Data Analysts",
        "AI Coding Assistants",
        "Cursor AI",
        "AI for Data Analysis",
        "AI for Excel",
        "AI for SQL",
        "AI for Python",
        "AI for Power BI",
        "AI for DAX",
        "AI Dashboard Assistance",
        "AI Report Generation",
      ],
    },

    // =====================================================
    // MODULE 11 - PROMPT ENGINEERING
    // =====================================================
    {
      name: "Module 11 - Prompt Engineering",
      topics: [
        "Introduction to Prompt Engineering",
        "What is a Prompt?",
        "Prompt Structure",
        "Anatomy of an Effective Prompt",
        "Prompt Engineering Techniques",
        "Prompt Best Practices",
        "Role-Based Prompting",
        "Context-Based Prompting",
        "Structured Output Prompting",
        "Few-Shot Prompting",
        "Zero-Shot Prompting",
        "Prompt Optimization",
        "Prompt Debugging",
        "Business Prompt Engineering",
        "Data Analysis Prompts",
        "SQL Prompts",
        "Excel Prompts",
        "Power BI Prompts",
        "Python Prompts",
      ],
    },

    // =====================================================
    // MODULE 12 - GIT & GITHUB
    // =====================================================
    {
      name: "Module 12 - Git & GitHub",
      topics: [
        "Introduction to Git",
        "Version Control",
        "Git Installation",
        "Git Configuration",
        "Git Repository",
        "git init",
        "git clone",
        "git add",
        "git commit",
        "git status",
        "git push",
        "git pull",
        "git fetch",
        "Branches",
        "Merge",
        "Conflict Resolution",
        "GitHub Repository",
        "Remote Repository",
        "Pull Requests",
        "GitHub Collaboration",
        "README Creation",
        "Portfolio Building",
      ],
    },

    // =====================================================
    // MODULE 13 - REAL-TIME PROJECTS
    // =====================================================
    {
      name: "Module 13 - Real-Time Data Analytics Projects",
      topics: [
        "Project Requirement Analysis",
        "Data Collection",
        "Data Understanding",
        "Data Cleaning",
        "Data Transformation",
        "Exploratory Data Analysis",
        "Statistical Analysis",
        "Data Visualization",
        "Business Insights",
        "Sales Data Analysis",
        "Customer Data Analysis",
        "Financial Data Analysis",
        "Python Data Analysis Project",
        "SQL Data Analysis Project",
        "Excel Dashboard Project",
        "Tableau Dashboard Project",
        "Power BI Dashboard Project",
        "Generative AI Data Analysis Project",
        "End-to-End Data Analytics Project",
        "GitHub Portfolio Project",
        "Project Documentation",
        "Project Presentation",
      ],
    },

    // =====================================================
    // MODULE 14 - CAREER & INTERVIEW PREPARATION
    // =====================================================
    {
      name: "Module 14 - Career & Interview Preparation",
      topics: [
        "Data Analyst Interview Preparation",
        "Python Interview Questions",
        "SQL Interview Questions",
        "Excel Interview Questions",
        "Statistics Interview Questions",
        "Machine Learning Interview Questions",
        "Tableau Interview Questions",
        "Power BI Interview Questions",
        "DAX Interview Questions",
        "Generative AI Interview Questions",
        "Technical Interview Preparation",
        "HR Interview Preparation",
        "Resume Preparation",
        "Resume Optimization",
        "GitHub Portfolio Preparation",
        "Mock Interviews",
        "Communication Skills",
        "Project Explanation",
        "Placement Preparation",
      ],
    },
  ],
},
  {
  title: "Artificial Intelligence & Generative AI",
  image: genaiLogo,
  category: "Artificial Intelligence",
  level: "Beginner to Advanced",
  duration: "5 - 6 Months",
  mode: "Online Live",
  badge: "Trending",

  description:
    "Master Artificial Intelligence and Generative AI from fundamentals to advanced industry applications, including Python, Machine Learning, Deep Learning, NLP, LLMs, Prompt Engineering, RAG, AI Agents, Fine-Tuning, APIs, deployment and real-time AI projects.",

  topics: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Python for AI",
    "Statistics",
    "Probability",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "Scikit-Learn",
    "TensorFlow",
    "Keras",
    "PyTorch",
    "Natural Language Processing",
    "Computer Vision",
    "Generative AI",
    "Large Language Models",
    "Prompt Engineering",
    "ChatGPT",
    "Google Gemini",
    "Claude",
    "Perplexity",
    "OpenAI API",
    "Gemini API",
    "Hugging Face",
    "Transformers",
    "Embeddings",
    "Vector Databases",
    "RAG",
    "LangChain",
    "LangGraph",
    "AI Agents",
    "Fine-Tuning",
    "LoRA",
    "QLoRA",
    "Multimodal AI",
    "AI Automation",
    "Git",
    "GitHub",
    "Docker",
    "Cloud Deployment",
    "Real-Time AI Projects",
    "Resume Preparation",
    "Mock Interviews",
  ],

  modules: [

    // =====================================================
    // MODULE 1 - ARTIFICIAL INTELLIGENCE FUNDAMENTALS
    // =====================================================
    {
      name: "Module 1 - Artificial Intelligence Fundamentals",
      topics: [
        "Introduction to Artificial Intelligence",
        "What is AI?",
        "History of Artificial Intelligence",
        "Evolution of AI",
        "AI Generations",
        "AI vs Machine Learning",
        "AI vs Deep Learning",
        "AI vs Generative AI",
        "Types of Artificial Intelligence",
        "Narrow AI",
        "General AI",
        "Super AI",
        "Reactive Machines",
        "Limited Memory AI",
        "Theory of Mind",
        "Self-Aware AI",
        "AI Applications",
        "AI in Healthcare",
        "AI in Finance",
        "AI in Education",
        "AI in Retail",
        "AI in Manufacturing",
        "AI in E-Commerce",
        "AI in Cybersecurity",
        "AI in Software Development",
        "AI Career Opportunities",
        "AI Project Life Cycle",
        "AI Ethics",
        "Responsible AI",
        "AI Limitations",
        "AI Risks",
      ],
    },

    // =====================================================
    // MODULE 2 - PYTHON FOR AI
    // =====================================================
    {
      name: "Module 2 - Python Programming for AI",
      topics: [
        "Introduction to Python",
        "Python Installation",
        "Python Environment Setup",
        "Variables",
        "Data Types",
        "Operators",
        "Input and Output",
        "Conditional Statements",
        "Loops",
        "Functions",
        "Function Arguments",
        "Return Values",
        "Lambda Functions",
        "List Comprehension",
        "Dictionary Comprehension",
        "Modules",
        "Packages",
        "Exception Handling",
        "File Handling",
        "JSON Handling",
        "Object-Oriented Programming",
        "Classes",
        "Objects",
        "Inheritance",
        "Polymorphism",
        "Encapsulation",
        "Abstraction",
        "Decorators",
        "Generators",
        "Iterators",
        "Virtual Environment",
        "pip",
        "Jupyter Notebook",
        "Google Colab",
      ],
    },

    // =====================================================
    // MODULE 3 - PYTHON LIBRARIES FOR AI
    // =====================================================
    {
      name: "Module 3 - Python Libraries for AI",
      topics: [
        "NumPy Introduction",
        "NumPy Arrays",
        "Array Operations",
        "Indexing",
        "Slicing",
        "Reshaping",
        "Broadcasting",
        "Mathematical Operations",
        "Statistical Operations",
        "Pandas Introduction",
        "Series",
        "DataFrames",
        "Reading CSV Files",
        "Reading Excel Files",
        "Reading JSON Files",
        "Data Selection",
        "Data Filtering",
        "Data Sorting",
        "Missing Values",
        "Duplicate Values",
        "Data Cleaning",
        "Data Transformation",
        "GroupBy",
        "Merge",
        "Join",
        "Concat",
        "Matplotlib",
        "Line Charts",
        "Bar Charts",
        "Scatter Plots",
        "Histograms",
        "Seaborn",
        "Heatmaps",
        "Pair Plots",
        "Statistical Visualization",
      ],
    },

    // =====================================================
    // MODULE 4 - MATHEMATICS & STATISTICS FOR AI
    // =====================================================
    {
      name: "Module 4 - Mathematics & Statistics for AI",
      topics: [
        "Why Mathematics is Required for AI",
        "Numbers and Variables",
        "Algebra Fundamentals",
        "Functions",
        "Linear Equations",
        "Matrices",
        "Matrix Operations",
        "Matrix Multiplication",
        "Transpose",
        "Inverse",
        "Vectors",
        "Vector Operations",
        "Dot Product",
        "Probability Fundamentals",
        "Conditional Probability",
        "Bayes Theorem",
        "Random Variables",
        "Probability Distributions",
        "Mean",
        "Median",
        "Mode",
        "Variance",
        "Standard Deviation",
        "Correlation",
        "Covariance",
        "Normal Distribution",
        "Binomial Distribution",
        "Central Limit Theorem",
        "Hypothesis Testing",
        "P-Value",
        "Confidence Intervals",
        "Statistical Significance",
      ],
    },

    // =====================================================
    // MODULE 5 - DATA PREPROCESSING
    // =====================================================
    {
      name: "Module 5 - Data Preprocessing for AI",
      topics: [
        "Understanding Datasets",
        "Structured Data",
        "Unstructured Data",
        "Data Collection",
        "Data Exploration",
        "Data Quality",
        "Missing Values",
        "Duplicate Records",
        "Outlier Detection",
        "Outlier Treatment",
        "Data Cleaning",
        "Data Transformation",
        "Data Encoding",
        "Label Encoding",
        "One Hot Encoding",
        "Feature Scaling",
        "Normalization",
        "Standardization",
        "Feature Selection",
        "Feature Extraction",
        "Feature Engineering",
        "Train Test Split",
        "Cross Validation",
        "Data Leakage",
      ],
    },

    // =====================================================
    // MODULE 6 - MACHINE LEARNING
    // =====================================================
    {
      name: "Module 6 - Machine Learning",
      topics: [
        "Introduction to Machine Learning",
        "Machine Learning Life Cycle",
        "Supervised Learning",
        "Unsupervised Learning",
        "Semi-Supervised Learning",
        "Reinforcement Learning",
        "Regression",
        "Classification",
        "Clustering",
        "Linear Regression",
        "Multiple Linear Regression",
        "Polynomial Regression",
        "Logistic Regression",
        "K-Nearest Neighbors",
        "Naive Bayes",
        "Decision Trees",
        "Random Forest",
        "Support Vector Machine",
        "Gradient Boosting",
        "XGBoost",
        "LightGBM",
        "K-Means Clustering",
        "Hierarchical Clustering",
        "DBSCAN",
        "Principal Component Analysis",
        "PCA",
      ],
    },

    // =====================================================
    // MODULE 7 - MACHINE LEARNING MODEL EVALUATION
    // =====================================================
    {
      name: "Module 7 - Machine Learning Model Evaluation",
      topics: [
        "Model Training",
        "Model Testing",
        "Model Validation",
        "Accuracy",
        "Precision",
        "Recall",
        "F1 Score",
        "Confusion Matrix",
        "ROC Curve",
        "AUC",
        "Mean Absolute Error",
        "Mean Squared Error",
        "Root Mean Squared Error",
        "R-Squared",
        "Cross Validation",
        "K-Fold Cross Validation",
        "Hyperparameter Tuning",
        "Grid Search",
        "Random Search",
        "Overfitting",
        "Underfitting",
        "Bias",
        "Variance",
        "Bias Variance Tradeoff",
        "Model Selection",
      ],
    },

    // =====================================================
    // MODULE 8 - DEEP LEARNING
    // =====================================================
    {
      name: "Module 8 - Deep Learning",
      topics: [
        "Introduction to Deep Learning",
        "Machine Learning vs Deep Learning",
        "Artificial Neural Networks",
        "Biological Neurons",
        "Artificial Neurons",
        "Perceptron",
        "Neural Network Architecture",
        "Input Layer",
        "Hidden Layer",
        "Output Layer",
        "Weights",
        "Bias",
        "Activation Functions",
        "Sigmoid",
        "Tanh",
        "ReLU",
        "Softmax",
        "Forward Propagation",
        "Backpropagation",
        "Loss Functions",
        "Optimization",
        "Gradient Descent",
        "Learning Rate",
        "Epochs",
        "Batch Size",
        "Optimizers",
        "SGD",
        "Adam",
        "Dropout",
        "Batch Normalization",
        "Early Stopping",
      ],
    },

    // =====================================================
    // MODULE 9 - TENSORFLOW & KERAS
    // =====================================================
    {
      name: "Module 9 - TensorFlow & Keras",
      topics: [
        "Introduction to TensorFlow",
        "TensorFlow Installation",
        "TensorFlow Tensors",
        "Tensor Operations",
        "TensorFlow Variables",
        "TensorFlow Computation",
        "Keras Introduction",
        "Sequential API",
        "Functional API",
        "Building Neural Networks",
        "Compiling Models",
        "Training Models",
        "Model Evaluation",
        "Model Prediction",
        "Callbacks",
        "Model Checkpoints",
        "TensorBoard",
        "Saving Models",
        "Loading Models",
        "Model Deployment",
      ],
    },

    // =====================================================
    // MODULE 10 - PYTORCH
    // =====================================================
    {
      name: "Module 10 - PyTorch",
      topics: [
        "Introduction to PyTorch",
        "PyTorch Installation",
        "Tensors",
        "Tensor Operations",
        "Autograd",
        "Neural Network Module",
        "Datasets",
        "DataLoaders",
        "Training Loops",
        "Loss Functions",
        "Optimizers",
        "Model Evaluation",
        "Saving Models",
        "Loading Models",
        "GPU Training",
      ],
    },

    // =====================================================
    // MODULE 11 - NATURAL LANGUAGE PROCESSING
    // =====================================================
    {
      name: "Module 11 - Natural Language Processing",
      topics: [
        "Introduction to NLP",
        "NLP Applications",
        "Text Data",
        "Text Preprocessing",
        "Tokenization",
        "Sentence Tokenization",
        "Word Tokenization",
        "Stop Words",
        "Stemming",
        "Lemmatization",
        "Part of Speech Tagging",
        "Named Entity Recognition",
        "Bag of Words",
        "TF-IDF",
        "N-Grams",
        "Text Classification",
        "Sentiment Analysis",
        "Text Similarity",
        "Word Embeddings",
        "Word2Vec",
        "GloVe",
        "NLP Pipelines",
      ],
    },

    // =====================================================
    // MODULE 12 - COMPUTER VISION
    // =====================================================
    {
      name: "Module 12 - Computer Vision",
      topics: [
        "Introduction to Computer Vision",
        "Image Representation",
        "Pixels",
        "RGB",
        "Image Loading",
        "Image Resizing",
        "Image Cropping",
        "Image Rotation",
        "Image Filtering",
        "Image Enhancement",
        "OpenCV",
        "Image Processing",
        "Edge Detection",
        "Object Detection",
        "Image Classification",
        "Face Detection",
        "OCR",
        "Convolution",
        "CNN Introduction",
        "Pooling",
        "CNN Architecture",
        "Transfer Learning",
      ],
    },

    // =====================================================
    // MODULE 13 - CONVOLUTIONAL NEURAL NETWORKS
    // =====================================================
    {
      name: "Module 13 - CNN & Image AI",
      topics: [
        "CNN Fundamentals",
        "Convolution Operation",
        "Filters",
        "Feature Maps",
        "Padding",
        "Stride",
        "Pooling",
        "Max Pooling",
        "Average Pooling",
        "CNN Architecture",
        "Image Classification",
        "Data Augmentation",
        "Transfer Learning",
        "Pretrained Models",
        "ResNet",
        "VGG",
        "MobileNet",
        "Object Detection Concepts",
        "Real-Time Image Recognition",
      ],
    },

    // =====================================================
    // MODULE 14 - GENERATIVE AI FUNDAMENTALS
    // =====================================================
    {
      name: "Module 14 - Generative AI Fundamentals",
      topics: [
        "Introduction to Generative AI",
        "What is Generative AI?",
        "Traditional AI vs Generative AI",
        "Machine Learning vs Generative AI",
        "Generative AI Applications",
        "Text Generation",
        "Image Generation",
        "Audio Generation",
        "Video Generation",
        "Code Generation",
        "Synthetic Data Generation",
        "Generative AI Architecture",
        "Generative Models",
        "Foundation Models",
        "Multimodal AI",
        "AI Model Capabilities",
        "AI Limitations",
        "AI Hallucinations",
        "AI Safety",
        "AI Ethics",
        "Responsible AI",
      ],
    },

    // =====================================================
    // MODULE 15 - LARGE LANGUAGE MODELS
    // =====================================================
    {
      name: "Module 15 - Large Language Models",
      topics: [
        "Introduction to Large Language Models",
        "What are LLMs?",
        "Evolution of Language Models",
        "Language Models",
        "Foundation Models",
        "Transformer Architecture",
        "Encoder",
        "Decoder",
        "Self Attention",
        "Multi-Head Attention",
        "Positional Encoding",
        "Tokenization",
        "Tokens",
        "Token Embeddings",
        "Context Window",
        "Parameters",
        "Model Weights",
        "Inference",
        "Temperature",
        "Top-K Sampling",
        "Top-P Sampling",
        "Hallucination",
        "LLM Limitations",
        "LLM Evaluation",
      ],
    },

    // =====================================================
    // MODULE 16 - TRANSFORMERS & HUGGING FACE
    // =====================================================
    {
      name: "Module 16 - Transformers & Hugging Face",
      topics: [
        "Introduction to Transformers",
        "Transformer Architecture",
        "Attention Mechanism",
        "Encoder Models",
        "Decoder Models",
        "Encoder-Decoder Models",
        "BERT",
        "GPT",
        "T5",
        "Hugging Face",
        "Hugging Face Hub",
        "Transformers Library",
        "Tokenizers",
        "Datasets Library",
        "Pipeline API",
        "Pretrained Models",
        "Model Loading",
        "Text Generation",
        "Text Classification",
        "Question Answering",
        "Summarization",
        "Translation",
        "Model Sharing",
      ],
    },

    // =====================================================
    // MODULE 17 - PROMPT ENGINEERING
    // =====================================================
    {
      name: "Module 17 - Prompt Engineering",
      topics: [
        "Introduction to Prompt Engineering",
        "What is a Prompt?",
        "Prompt Structure",
        "Prompt Components",
        "System Instructions",
        "User Instructions",
        "Context",
        "Constraints",
        "Output Format",
        "Zero-Shot Prompting",
        "One-Shot Prompting",
        "Few-Shot Prompting",
        "Role Prompting",
        "Chain-of-Thought Concepts",
        "Step-by-Step Reasoning Prompts",
        "Structured Output",
        "JSON Output",
        "Prompt Templates",
        "Prompt Chaining",
        "Prompt Optimization",
        "Prompt Debugging",
        "Prompt Evaluation",
        "Business Prompt Engineering",
      ],
    },

    // =====================================================
    // MODULE 18 - AI TOOLS
    // =====================================================
    {
      name: "Module 18 - Generative AI Tools",
      topics: [
        "ChatGPT",
        "OpenAI Models",
        "Google Gemini",
        "Claude",
        "Perplexity",
        "Microsoft Copilot",
        "Hugging Face",
        "NotebookLM",
        "AI Coding Assistants",
        "GitHub Copilot",
        "Cursor",
        "AI Research Tools",
        "AI Writing Tools",
        "AI Presentation Tools",
        "AI Image Generation Tools",
        "AI Video Generation Tools",
        "AI Audio Tools",
        "AI Productivity Tools",
      ],
    },

    // =====================================================
    // MODULE 19 - OPENAI API
    // =====================================================
    {
      name: "Module 19 - OpenAI API & LLM APIs",
      topics: [
        "Introduction to AI APIs",
        "API Keys",
        "Environment Variables",
        "OpenAI API",
        "LLM API Requests",
        "Chat Completions",
        "Text Generation",
        "Structured Responses",
        "JSON Responses",
        "System Messages",
        "User Messages",
        "Temperature",
        "Token Usage",
        "API Error Handling",
        "Rate Limits",
        "API Cost Management",
        "Python API Integration",
        "JavaScript API Integration",
        "Gemini API",
        "Other LLM APIs",
      ],
    },

    // =====================================================
    // MODULE 20 - EMBEDDINGS
    // =====================================================
    {
      name: "Module 20 - Embeddings & Semantic Search",
      topics: [
        "Introduction to Embeddings",
        "What are Embeddings?",
        "Text Embeddings",
        "Document Embeddings",
        "Vector Representation",
        "Semantic Similarity",
        "Cosine Similarity",
        "Similarity Search",
        "Embedding Models",
        "Embedding Generation",
        "Embedding Storage",
        "Chunking",
        "Text Splitting",
        "Metadata",
        "Semantic Search",
        "Hybrid Search",
      ],
    },

    // =====================================================
    // MODULE 21 - VECTOR DATABASES
    // =====================================================
    {
      name: "Module 21 - Vector Databases",
      topics: [
        "Introduction to Vector Databases",
        "Why Vector Databases?",
        "Vector Storage",
        "Vector Indexing",
        "Similarity Search",
        "Metadata Filtering",
        "Pinecone",
        "ChromaDB",
        "FAISS",
        "Weaviate",
        "Qdrant",
        "Milvus",
        "Vector Database Architecture",
        "Creating Collections",
        "Inserting Embeddings",
        "Querying Vectors",
        "Building Semantic Search",
      ],
    },

    // =====================================================
    // MODULE 22 - RAG
    // =====================================================
    {
      name: "Module 22 - Retrieval Augmented Generation",
      topics: [
        "Introduction to RAG",
        "What is RAG?",
        "Why RAG?",
        "RAG Architecture",
        "Retrieval",
        "Augmentation",
        "Generation",
        "Document Loading",
        "Document Splitting",
        "Text Chunking",
        "Embedding Generation",
        "Vector Storage",
        "Similarity Search",
        "Context Retrieval",
        "Prompt Construction",
        "LLM Response Generation",
        "RAG Pipeline",
        "RAG Evaluation",
        "RAG Hallucination Reduction",
        "Metadata Filtering",
        "Hybrid RAG",
        "Advanced RAG",
      ],
    },

    // =====================================================
    // MODULE 23 - LANGCHAIN
    // =====================================================
    {
      name: "Module 23 - LangChain",
      topics: [
        "Introduction to LangChain",
        "LangChain Architecture",
        "Models",
        "Prompts",
        "Prompt Templates",
        "Output Parsers",
        "Chains",
        "Sequential Chains",
        "LCEL",
        "Document Loaders",
        "Text Splitters",
        "Embeddings",
        "Vector Stores",
        "Retrievers",
        "RAG Applications",
        "Memory",
        "Conversation History",
        "Tools",
        "Agents",
        "Callbacks",
        "LangChain Applications",
      ],
    },

    // =====================================================
    // MODULE 24 - LANGGRAPH
    // =====================================================
    {
      name: "Module 24 - LangGraph & Stateful AI",
      topics: [
        "Introduction to LangGraph",
        "Why LangGraph?",
        "Graph-Based AI Workflows",
        "Nodes",
        "Edges",
        "State",
        "State Management",
        "Conditional Routing",
        "Loops",
        "Human-in-the-Loop",
        "Agent Workflows",
        "Multi-Step Workflows",
        "Tool Calling",
        "Memory",
        "Checkpointing",
        "Agent Graphs",
        "Production Workflows",
      ],
    },

    // =====================================================
    // MODULE 25 - AI AGENTS
    // =====================================================
    {
      name: "Module 25 - AI Agents",
      topics: [
        "Introduction to AI Agents",
        "What is an AI Agent?",
        "AI Agent Architecture",
        "LLM-Based Agents",
        "Reasoning and Planning",
        "Tool Usage",
        "Function Calling",
        "Tool Calling",
        "Agent Memory",
        "Short-Term Memory",
        "Long-Term Memory",
        "Agent Planning",
        "Agent Execution",
        "Agent Reflection",
        "Autonomous Agents",
        "Human-in-the-Loop Agents",
        "Multi-Agent Systems",
        "Agent Communication",
        "Agent Orchestration",
        "AI Agent Evaluation",
      ],
    },

    // =====================================================
    // MODULE 26 - FUNCTION CALLING & TOOLS
    // =====================================================
    {
      name: "Module 26 - Function Calling & AI Tools",
      topics: [
        "Function Calling",
        "Tool Calling",
        "Tool Definitions",
        "Structured Parameters",
        "JSON Schema",
        "API Tool Integration",
        "Database Tool Integration",
        "Search Tool Integration",
        "Calculator Tools",
        "File Tools",
        "Custom Tools",
        "External API Integration",
        "Tool Selection",
        "Tool Error Handling",
        "Agent Tool Chains",
      ],
    },

    // =====================================================
    // MODULE 27 - FINE-TUNING
    // =====================================================
    {
      name: "Module 27 - Fine-Tuning & Model Adaptation",
      topics: [
        "Introduction to Fine-Tuning",
        "Why Fine-Tune a Model?",
        "Prompting vs RAG vs Fine-Tuning",
        "Fine-Tuning Workflow",
        "Training Data Preparation",
        "Dataset Creation",
        "Data Formatting",
        "Training Data Quality",
        "Validation Dataset",
        "Model Training",
        "Model Evaluation",
        "Instruction Fine-Tuning",
        "Parameter-Efficient Fine-Tuning",
        "LoRA",
        "QLoRA",
        "Adapters",
        "Fine-Tuning Transformers",
        "Fine-Tuning Open Models",
        "Model Deployment",
      ],
    },

    // =====================================================
    // MODULE 28 - MULTIMODAL AI
    // =====================================================
    {
      name: "Module 28 - Multimodal Generative AI",
      topics: [
        "Introduction to Multimodal AI",
        "Text AI",
        "Image AI",
        "Audio AI",
        "Video AI",
        "Text-to-Image",
        "Image-to-Text",
        "Text-to-Audio",
        "Speech-to-Text",
        "Text-to-Speech",
        "Image Understanding",
        "Document Understanding",
        "Vision-Language Models",
        "Multimodal LLMs",
        "AI Image Analysis",
        "AI Document Analysis",
      ],
    },

    // =====================================================
    // MODULE 29 - AI AUTOMATION
    // =====================================================
    {
      name: "Module 29 - AI Automation",
      topics: [
        "Introduction to AI Automation",
        "AI Workflow Automation",
        "Automated Data Processing",
        "Automated Email Generation",
        "Automated Report Generation",
        "AI Document Processing",
        "AI Customer Support",
        "AI Chatbots",
        "AI Content Automation",
        "AI Data Extraction",
        "AI Summarization",
        "AI Classification",
        "AI Workflow Integration",
        "API-Based Automation",
        "No-Code AI Automation",
      ],
    },

    // =====================================================
    // MODULE 30 - AI CHATBOT DEVELOPMENT
    // =====================================================
    {
      name: "Module 30 - AI Chatbot Development",
      topics: [
        "Chatbot Fundamentals",
        "Rule-Based Chatbots",
        "AI Chatbots",
        "LLM Chatbots",
        "Conversation Design",
        "Prompt-Based Chatbots",
        "Memory-Based Chatbots",
        "RAG Chatbots",
        "Document Chatbots",
        "Website Chatbots",
        "Customer Support Chatbots",
        "WhatsApp AI Chatbot Concepts",
        "API Integration",
        "Chatbot Security",
        "Chatbot Deployment",
      ],
    },

    // =====================================================
    // MODULE 31 - AI FOR SOFTWARE DEVELOPMENT
    // =====================================================
    {
      name: "Module 31 - AI for Software Development",
      topics: [
        "AI-Assisted Coding",
        "GitHub Copilot",
        "Cursor AI",
        "Code Generation",
        "Code Explanation",
        "Code Refactoring",
        "Bug Detection",
        "Debugging with AI",
        "Unit Test Generation",
        "API Generation",
        "Documentation Generation",
        "SQL Query Generation",
        "Code Review with AI",
        "AI-Assisted Development",
        "AI Development Best Practices",
      ],
    },

    // =====================================================
    // MODULE 32 - AI SECURITY & RESPONSIBLE AI
    // =====================================================
    {
      name: "Module 32 - AI Security & Responsible AI",
      topics: [
        "Responsible AI",
        "AI Ethics",
        "AI Safety",
        "AI Privacy",
        "Data Privacy",
        "Sensitive Data",
        "Prompt Injection",
        "Jailbreak Attacks",
        "Data Leakage",
        "Model Security",
        "Adversarial Attacks",
        "AI Bias",
        "Fairness",
        "Transparency",
        "Explainability",
        "Human Oversight",
        "Secure AI Applications",
        "AI Governance",
      ],
    },

    // =====================================================
    // MODULE 33 - AI EVALUATION
    // =====================================================
    {
      name: "Module 33 - LLM & AI Evaluation",
      topics: [
        "Why AI Evaluation Matters",
        "Model Evaluation",
        "LLM Evaluation",
        "Response Quality",
        "Accuracy",
        "Relevance",
        "Faithfulness",
        "Groundedness",
        "Hallucination Detection",
        "Prompt Evaluation",
        "RAG Evaluation",
        "Retrieval Evaluation",
        "Generation Evaluation",
        "Latency",
        "Token Usage",
        "Cost Evaluation",
        "Human Evaluation",
        "Automated Evaluation",
        "AI Testing",
      ],
    },

    // =====================================================
    // MODULE 34 - AI DEPLOYMENT
    // =====================================================
    {
      name: "Module 34 - AI Application Deployment",
      topics: [
        "AI Application Architecture",
        "Model Serving",
        "REST APIs",
        "FastAPI",
        "Flask",
        "Streamlit",
        "Gradio",
        "API Authentication",
        "Environment Variables",
        "Secrets Management",
        "Docker Fundamentals",
        "Dockerizing AI Applications",
        "Docker Images",
        "Docker Containers",
        "Cloud Deployment",
        "AWS Basics for AI",
        "Cloud AI Deployment",
        "Application Monitoring",
        "Logging",
        "Production AI Applications",
      ],
    },

    // =====================================================
    // MODULE 35 - GIT & GITHUB FOR AI
    // =====================================================
    {
      name: "Module 35 - Git & GitHub for AI",
      topics: [
        "Introduction to Git",
        "Version Control",
        "Git Installation",
        "Git Configuration",
        "Repository Creation",
        "git init",
        "git clone",
        "git add",
        "git commit",
        "git status",
        "git push",
        "git pull",
        "git fetch",
        "Branching",
        "Merging",
        "Conflict Resolution",
        "GitHub",
        "GitHub Repositories",
        "Pull Requests",
        "README Files",
        "AI Project Portfolio",
        "Model Version Tracking",
      ],
    },

    // =====================================================
    // MODULE 36 - REAL-TIME AI PROJECTS
    // =====================================================
    {
      name: "Module 36 - Real-Time AI Projects",
      topics: [
        "AI Project Requirement Analysis",
        "AI Project Architecture",
        "Dataset Collection",
        "Data Preprocessing",
        "Model Development",
        "Model Evaluation",
        "AI API Integration",
        "GitHub Project Management",

        // Project 1
        "Machine Learning Prediction Project",

        // Project 2
        "NLP Sentiment Analysis Project",

        // Project 3
        "Computer Vision Project",

        // Project 4
        "AI Chatbot Project",

        // Project 5
        "Document Question Answering System",

        // Project 6
        "RAG-Based PDF Chatbot",

        // Project 7
        "AI Resume Analyzer",

        // Project 8
        "AI Content Generator",

        // Project 9
        "AI Customer Support Agent",

        // Project 10
        "AI Research Assistant",

        // Project 11
        "AI Data Analysis Agent",

        // Project 12
        "Multi-Agent AI Application",

        "Project Documentation",
        "Project Testing",
        "Project Deployment",
        "Project Presentation",
      ],
    },

    // =====================================================
    // MODULE 37 - CAPSTONE PROJECT
    // =====================================================
    {
      name: "Module 37 - Industry Capstone Project",
      topics: [
        "Project Requirement Gathering",
        "Problem Statement",
        "System Architecture",
        "Technology Selection",
        "Data Collection",
        "Data Processing",
        "AI Model Selection",
        "Prompt Engineering",
        "LLM Integration",
        "RAG Integration",
        "Vector Database",
        "AI Agent Development",
        "API Integration",
        "Frontend Integration",
        "Authentication",
        "Database Integration",
        "Testing",
        "AI Evaluation",
        "Security",
        "Deployment",
        "GitHub Repository",
        "Project Documentation",
        "Project Demo",
        "Project Presentation",
      ],
    },

    // =====================================================
    // MODULE 38 - INTERVIEW & CAREER PREPARATION
    // =====================================================
    {
      name: "Module 38 - AI Interview & Career Preparation",
      topics: [
        "Artificial Intelligence Interview Questions",
        "Machine Learning Interview Questions",
        "Deep Learning Interview Questions",
        "Python Interview Questions",
        "NLP Interview Questions",
        "Computer Vision Interview Questions",
        "Generative AI Interview Questions",
        "LLM Interview Questions",
        "Prompt Engineering Interview Questions",
        "RAG Interview Questions",
        "Vector Database Interview Questions",
        "LangChain Interview Questions",
        "AI Agent Interview Questions",
        "Fine-Tuning Interview Questions",
        "AI API Interview Questions",
        "Technical Interview Preparation",
        "Project-Based Interview Questions",
        "AI Resume Preparation",
        "AI Portfolio Building",
        "GitHub Portfolio",
        "LinkedIn Profile Optimization",
        "Mock Interviews",
        "HR Interview Preparation",
        "Communication Skills",
        "Placement Preparation",
      ],
    },
  ],
},
  {
    title: "DevOps with AWS",
    image: devopsLogo,
    category: "Cloud & DevOps",
    level: "Advanced",
    duration: "3 - 4 Months",
    mode: "Online Live",
    badge: "Popular",
    description:
      "Master Linux, AWS Cloud, Docker, Kubernetes, Terraform, Ansible, CI/CD, GitOps, DevSecOps, monitoring and real-world cloud deployment.",
    topics: [
      "DevOps",
      "SDLC",
      "Agile & Scrum",
      "SRE",
      "Linux",
      "Shell Scripting",
      "Networking",
      "AWS",
      "EC2",
      "S3",
      "IAM",
      "VPC",
      "RDS",
      "ECR",
      "ECS",
      "Lambda",
      "CloudWatch",
      "Git",
      "GitHub",
      "Jenkins",
      "GitHub Actions",
      "Maven",
      "SonarQube",
      "JFrog",
      "Terraform",
      "Ansible",
      "Docker",
      "Kubernetes",
      "EKS",
      "Helm",
      "ArgoCD",
      "Prometheus",
      "Grafana",
      "ELK",
      "DevSecOps",
      "AI for DevOps",
      "Real-Time Projects",
    ],
    modules: [
      {
        name: "Module 1 - DevOps Fundamentals & SDLC",
        topics: [
          "What is DevOps",
          "DevOps Culture",
          "DevOps Lifecycle",
          "DevOps Benefits",
          "DevOps vs Traditional IT",
          "Plan",
          "Code",
          "Build",
          "Test",
          "Release",
          "Deploy",
          "Monitor",
          "Software Development Life Cycle",
          "Agile Methodology",
          "Scrum Framework",
          "Sprint Planning",
          "Product Backlog",
          "Daily Stand-ups",
          "Jira Issue Tracking",
          "Continuous Integration",
          "Continuous Delivery",
          "Continuous Deployment",
          "Infrastructure as Code",
          "Monitoring & Feedback Loops",
        ],
      },
      {
        name: "Module 2 - SRE Foundations",
        topics: [
          "Site Reliability Engineering",
          "DevOps and SRE",
          "Reliability Engineering",
          "Service Level Indicators",
          "SLI",
          "SLO",
          "SLA",
          "Error Budgets",
          "Reliability vs Velocity",
          "Toil Reduction",
          "Automation",
          "Reliability Best Practices",
        ],
      },
      {
        name: "Module 3 - Linux & Shell Scripting",
        topics: [
          "Linux Fundamentals",
          "Linux Architecture",
          "Linux File System",
          "File Permissions",
          "Users & Groups",
          "Package Management",
          "yum",
          "apt",
          "Process Management",
          "top",
          "ps",
          "kill",
          "Disk Management",
          "Memory Management",
          "Networking Commands",
          "netstat",
          "curl",
          "wget",
          "SSH",
          "Server Access",
          "Shell Scripting",
          "Variables",
          "Loops",
          "Conditions",
          "Functions",
          "Arguments",
          "File Handling",
          "Logging",
          "Cron Jobs",
          "Crontab",
          "Systemd",
          "systemctl",
          "Service Management",
        ],
      },
      {
        name: "Module 4 - Networking Fundamentals",
        topics: [
          "OSI Model",
          "TCP/IP Model",
          "IP Addressing",
          "CIDR",
          "Subnetting",
          "Public IP",
          "Private IP",
          "DNS",
          "HTTP",
          "HTTPS",
          "SSL/TLS",
          "Load Balancing",
          "Reverse Proxy",
          "Nginx",
        ],
      },
      {
        name: "Module 5 - Cloud Computing & AWS",
        topics: [
          "Cloud Computing",
          "IaaS",
          "PaaS",
          "SaaS",
          "Public Cloud",
          "Private Cloud",
          "AWS Global Infrastructure",
          "AWS Regions",
          "Availability Zones",
          "EC2",
          "EC2 Instances",
          "AMI",
          "Key Pairs",
          "S3",
          "S3 Storage",
          "S3 Lifecycle",
          "IAM",
          "IAM Users",
          "IAM Roles",
          "IAM Policies",
          "VPC",
          "Subnets",
          "Route Tables",
          "NAT Gateway",
          "Internet Gateway",
          "EBS",
          "EFS",
          "Security Groups",
          "NACLs",
          "ECR",
          "ECS",
        ],
      },
      {
        name: "Module 6 - Advanced AWS Services",
        topics: [
          "Application Load Balancer",
          "Network Load Balancer",
          "Auto Scaling Groups",
          "Route 53",
          "CloudFront",
          "RDS",
          "DynamoDB",
          "CloudTrail",
          "Systems Manager",
          "Parameter Store",
          "Patch Manager",
          "Session Manager",
          "SQS",
          "SNS",
          "AWS CLI",
          "CloudWatch",
          "CloudWatch Logs",
          "CloudWatch Metrics",
          "CloudWatch Alerts",
          "AWS Lambda",
          "API Gateway",
        ],
      },
      {
        name: "Module 7 - AWS Cost Optimization",
        topics: [
          "AWS Pricing Basics",
          "EC2 Pricing",
          "Spot Instances",
          "Reserved Instances",
          "On-Demand Instances",
          "AWS Budgets",
          "Billing Alerts",
          "Savings Plans",
          "Cost Optimization Best Practices",
        ],
      },
      {
        name: "Module 8 - AWS CLI & Terraform Preview",
        topics: [
          "AWS CLI Installation",
          "AWS CLI Configuration",
          "aws ec2 run-instances",
          "aws ec2 create-vpc",
          "aws ec2 create-subnet",
          "aws ec2 create-security-group",
          "aws rds create-db-instance",
          "Infrastructure as Code",
          "Terraform Introduction",
          "AWS Provider",
          "main.tf",
          "VPC with Terraform",
          "EC2 with Terraform",
          "Security Group with Terraform",
          "RDS with Terraform",
          "terraform init",
          "terraform plan",
          "terraform apply",
          "terraform destroy",
        ],
      },
      {
        name: "Module 9 - Git & GitHub",
        topics: [
          "Version Control",
          "Git Installation",
          "Git Configuration",
          "Git Workflow",
          "git clone",
          "git add",
          "git commit",
          "git push",
          "git pull",
          "Branching",
          "Merging",
          "GitFlow",
          "Trunk-Based Development",
          "Rebase",
          "Merge",
          "Cherry-Pick",
          "Stash",
          "GitHub Repositories",
          "Pull Requests",
          "Code Reviews",
          "Repository Management",
          "GitHub Actions",
        ],
      },
      {
        name: "Module 10 - CI/CD Pipelines",
        topics: [
          "CI/CD Concepts",
          "Pipeline Stages",
          "Build",
          "Test",
          "Deploy",
          "Pipeline as Code",
          "Jenkins",
          "Jenkins Installation",
          "Freestyle Jobs",
          "Pipeline Jobs",
          "Jenkins Master-Agent Architecture",
          "GitHub Actions",
          "YAML Pipelines",
          "Secrets",
          "Environment Variables",
          "Self-Hosted Runners",
          "Maven",
          "SonarQube",
          "Nexus",
          "JFrog",
        ],
      },
      {
        name: "Module 11 - End-to-End CI/CD",
        topics: [
          "Java Spring Boot CI/CD",
          "Git Push",
          "Security Check",
          "Unit Testing",
          "Maven Package",
          "SonarQube Scan",
          "Docker Build",
          "Push Image to ECR",
          "Deploy to EC2",
          "Deploy to ECS",
          "JFrog Integration",
          "Ansible Integration",
          "Jenkins Pipeline",
          "GitHub Actions Pipeline",
        ],
      },
      {
        name: "Module 12 - Terraform Infrastructure as Code",
        topics: [
          "Terraform Architecture",
          "Providers",
          "Resources",
          "Variables",
          "Outputs",
          "State Management",
          "Remote Backend",
          "Terraform Modules",
          "Data Sources",
          "locals",
          "terraform.tfvars",
          "Workspaces",
          "Development Environment",
          "Staging Environment",
          "Production Environment",
          "terraform fmt",
          "terraform validate",
          "terraform import",
          "terraform taint Concepts",
          "Infrastructure Drift",
          "terraform plan",
          "S3 Remote Backend",
          "State Locking Concepts",
        ],
      },
      {
        name: "Module 13 - Terraform Hands-On Projects",
        topics: [
          "3-Tier AWS Architecture",
          "VPC using Terraform",
          "EC2 using Terraform",
          "RDS using Terraform",
          "Terraform Modules",
          "S3 Remote Backend",
          "State Management",
          "State Conflict Simulation",
          "Infrastructure Drift Detection",
          "Terraform in GitHub Actions",
        ],
      },
      {
        name: "Module 14 - Ansible Configuration Management",
        topics: [
          "Ansible Introduction",
          "Ansible Architecture",
          "Installation",
          "Inventory",
          "Playbooks",
          "Modules",
          "Roles",
          "Templates",
          "Web Server Setup",
          "Application Deployment",
          "Multi-Node Automation",
          "Ansible Vault",
          "Secrets Management",
          "Dynamic AWS Inventory",
          "Ansible Galaxy",
          "Community Roles",
          "Java Deployment",
          "Multi-Server Deployment",
        ],
      },
      {
        name: "Module 15 - Docker Containerization",
        topics: [
          "Docker Introduction",
          "Containers",
          "Images",
          "Dockerfile",
          "Docker Commands",
          "Container Lifecycle",
          "Docker Networking",
          "Volumes",
          "Docker Compose",
          "Multi-Stage Builds",
          "Docker Security",
          "Docker Hub",
          "AWS ECR",
          "Image Management",
        ],
      },
      {
        name: "Module 16 - Kubernetes",
        topics: [
          "Kubernetes Introduction",
          "Cluster Architecture",
          "Control Plane",
          "Worker Nodes",
          "Pods",
          "ReplicaSets",
          "Deployments",
          "Services",
          "ConfigMaps",
          "Secrets",
          "Ingress",
          "Persistent Volumes",
          "RBAC",
          "Network Policies",
          "Helm Charts",
          "Horizontal Pod Autoscaling",
          "Rolling Updates",
          "Rollback",
          "Blue-Green Deployment",
          "Canary Deployment",
          "Deployment Strategies",
        ],
      },
      {
        name: "Module 17 - Kubernetes Production & EKS",
        topics: [
          "Production Kubernetes",
          "EKS",
          "Amazon EKS",
          "EKS Architecture",
          "EKS Networking",
          "Terraform EKS",
          "Cluster Management",
          "Pod Troubleshooting",
          "CrashLoopBackOff",
          "Deployment Debugging",
          "Logs",
          "Resource Management",
          "Auto Scaling",
        ],
      },
      {
        name: "Module 18 - GitOps & ArgoCD",
        topics: [
          "GitOps Principles",
          "ArgoCD",
          "Flux",
          "Continuous Deployment",
          "Git-Based Deployment",
          "Pull Deployment Model",
          "Push Deployment Model",
          "ArgoCD Installation",
          "ArgoCD on EKS",
          "Application CRDs",
          "Sync Policies",
          "Health Checks",
          "App-of-Apps Pattern",
          "Automated Drift Detection",
          "Auto-Sync",
          "Self-Healing",
          "RBAC",
          "SSO Integration",
        ],
      },
      {
        name: "Module 19 - Cloud Native Projects",
        topics: [
          "Java Spring Boot on Kubernetes",
          "GitHub Actions",
          "Docker",
          "Helm",
          "ArgoCD",
          "EKS",
          "GitOps",
          "Auto Scaling",
          "Rolling Deployment",
          "Rollback",
          "Python Agentic AI Application",
          "Dockerized AI Agents",
          "AWS ECR",
          "Kubernetes Deployment",
        ],
      },
      {
        name: "Module 20 - Monitoring & Observability",
        topics: [
          "Monitoring Fundamentals",
          "Observability",
          "Prometheus",
          "Prometheus Metrics",
          "Grafana",
          "Grafana Dashboards",
          "ELK Stack",
          "Elasticsearch",
          "Logstash",
          "Kibana",
          "Jaeger",
          "Distributed Tracing",
          "Alertmanager",
          "Prometheus Alerts",
          "Slack Alerts",
          "PagerDuty",
          "OpsGenie",
          "AWS CloudWatch",
          "CloudWatch Logs",
          "CloudWatch Metrics",
          "SLIs",
          "SLOs",
          "Error Budgets",
        ],
      },
      {
        name: "Module 21 - DevSecOps",
        topics: [
          "DevSecOps Fundamentals",
          "Secure CI/CD",
          "IAM Best Practices",
          "Secrets Management",
          "Trivy",
          "Container Scanning",
          "Snyk",
          "Dependency Scanning",
          "SAST",
          "SonarQube",
          "Semgrep",
          "DAST",
          "OWASP ZAP",
          "OWASP Top 10",
          "Injection",
          "Broken Authentication",
          "SSRF",
          "Container Hardening",
          "Non-Root Containers",
          "Minimal Base Images",
          "Distroless Images",
          "Read-Only Filesystems",
          "SBOM",
          "Syft",
          "Grype",
          "OPA",
          "Gatekeeper",
          "Policy as Code",
          "AWS GuardDuty",
          "AWS Security Hub",
        ],
      },
      {
        name: "Module 22 - AI Tools for DevOps",
        topics: [
          "ChatGPT",
          "GitHub Copilot",
          "Claude Code",
          "Cursor",
          "AI for CI/CD",
          "AI-Based Debugging",
          "AI Log Analysis",
          "AI Automation",
          "Prompt Engineering",
          "DevOps Prompt Design",
          "Automating DevOps Tasks",
        ],
      },
      {
        name: "Module 23 - Real-Time DevOps Projects",
        topics: [
          "Project 1 - AWS Auto Scaling & VPC Architecture",
          "VPC",
          "Subnets",
          "ALB",
          "Auto Scaling",
          "CloudWatch",
          "Project 2 - AWS Infrastructure with Terraform",
          "Terraform",
          "VPC",
          "EC2",
          "Load Balancer",
          "S3 Remote Backend",
          "Project 3 - End-to-End CI/CD Pipeline",
          "Maven",
          "SonarQube",
          "Docker",
          "Jenkins",
          "GitHub Actions",
          "Project 4 - Ansible Configuration Management",
          "Java",
          "Tomcat",
          "Multi-Node Deployment",
        ],
      },
      {
        name: "Module 24 - Advanced Cloud Native Projects",
        topics: [
          "Project 5 - Kubernetes + EKS + GitOps",
          "Kubernetes",
          "Helm",
          "ArgoCD",
          "EKS",
          "Auto Scaling",
          "Project 6 - Monitoring & Observability",
          "Prometheus",
          "Grafana",
          "ELK Stack",
          "Project 7 - CI/CD for Agentic AI App",
          "Python Agentic AI",
          "GitHub Actions",
          "Jenkins",
          "Docker",
          "SonarQube",
          "AWS ECR",
          "EC2",
          "ECS",
          "Project 8 - Agentic AI on Kubernetes",
          "AI Agent Containers",
          "AWS ECR",
          "Kubernetes",
          "EKS",
          "ArgoCD",
          "GitOps",
          "Automated Rollback",
        ],
      },
      {
        name: "Module 25 - DevOps Interview & Career Preparation",
        topics: [
          "DevOps Interview Questions",
          "Linux Interview Questions",
          "AWS Interview Questions",
          "Docker Interview Questions",
          "Kubernetes Interview Questions",
          "Terraform Interview Questions",
          "Ansible Interview Questions",
          "Jenkins Interview Questions",
          "GitHub Actions Interview Questions",
          "CI/CD Scenario Questions",
          "Cloud Architecture Questions",
          "Troubleshooting Scenarios",
          "Production Incident Scenarios",
          "Resume Preparation",
          "Resume Optimization",
          "GitHub Portfolio",
          "Mock Technical Interviews",
          "HR Interview Preparation",
        ],
      },
    ],
  },
  {
    title: "Java + SQL + Interview Preparation",
    image: javaSqlLogo,
    category: "Career Preparation",
    level: "Beginner",
    duration: "4 - 5 Months",
    mode: "Online Live",
    badge: "Career",
    description:
      "Complete Java, SQL and interview preparation program with mock interviews.",
    topics: [
      "Core Java",
      "OOP",
      "Collections",
      "Exception Handling",
      "Multithreading",
      "JDBC",
      "SQL",
      "Joins",
      "Subqueries",
      "Database Concepts",
      "Java Coding Questions",
      "SQL Interview Questions",
      "Resume Preparation",
      "HR Interview",
      "Technical Interview",
      "Mock Interviews",
      "Aptitude",
      "Communication",
      "Problem Solving",
      "Placement Preparation",
    ],
    modules: [
      {
        name: "Core Java",
        topics: [
          "Java Fundamentals",
          "Variables",
          "Data Types",
          "Operators",
          "Control Statements",
          "Arrays",
          "Strings",
          "Methods",
        ],
      },
      {
        name: "Java OOP",
        topics: [
          "Classes & Objects",
          "Constructors",
          "Inheritance",
          "Polymorphism",
          "Abstraction",
          "Encapsulation",
          "Interfaces",
        ],
      },
      {
        name: "Java Advanced Concepts",
        topics: [
          "Collections",
          "Generics",
          "Exception Handling",
          "Multithreading",
          "File Handling",
          "JDBC",
          "Database Connectivity",
        ],
      },
      {
        name: "SQL & Database",
        topics: [
          "SQL Basics",
          "SELECT",
          "WHERE",
          "ORDER BY",
          "GROUP BY",
          "HAVING",
          "Joins",
          "Subqueries",
          "Aggregate Functions",
          "Constraints",
          "Normalization",
          "Database Design",
        ],
      },
      {
        name: "Technical Interview Preparation",
        topics: [
          "Java Interview Questions",
          "SQL Interview Questions",
          "Coding Questions",
          "Problem Solving",
          "Data Structures Basics",
          "Technical Discussion",
          "Programming Practice",
        ],
      },
      {
        name: "HR & Mock Interviews",
        topics: [
          "Resume Preparation",
          "Self Introduction",
          "HR Questions",
          "Communication Skills",
          "Mock Technical Interview",
          "Mock HR Interview",
          "Interview Feedback",
          "Aptitude",
          "Placement Preparation",
        ],
      },
    ],
  },
  {
    title: "Python + SQL + Interview Preparation",
    image: pythonLogo,
    category: "Career Preparation",
    level: "Beginner",
    duration: "4 - 5 Months",
    mode: "Online Live",
    badge: "Career",
    description:
      "Complete Python, SQL and interview preparation course with coding practice and mock interviews.",
    topics: [
      "Python Fundamentals",
      "Advanced Python",
      "OOP in Python",
      "Collections",
      "Exception Handling",
      "File Handling",
      "Python Libraries",
      "SQL",
      "Joins",
      "Subqueries",
      "Aggregate Functions",
      "Database Concepts",
      "Python Coding Questions",
      "SQL Interview Questions",
      "Resume Preparation",
      "HR Interview",
      "Technical Interview",
      "Mock Interviews",
      "Aptitude",
      "Communication Skills",
      "Problem Solving",
      "Placement Preparation",
    ],
    modules: [
      {
        name: "Python Fundamentals",
        topics: [
          "Python Introduction",
          "Installation",
          "Variables",
          "Data Types",
          "Operators",
          "Input & Output",
          "Type Casting",
          "Control Statements",
        ],
      },
      {
        name: "Python OOP & Advanced",
        topics: [
          "Classes & Objects",
          "Constructors",
          "Inheritance",
          "Polymorphism",
          "Encapsulation",
          "Abstraction",
          "Exception Handling",
          "File Handling",
          "Modules & Packages",
        ],
      },
      {
        name: "Python Libraries",
        topics: [
          "NumPy",
          "Pandas",
          "Matplotlib",
          "Requests",
          "JSON",
          "Regular Expressions",
          "Data Processing",
          "API Integration",
        ],
      },
      {
        name: "SQL & Database",
        topics: [
          "SQL Basics",
          "SELECT",
          "WHERE",
          "ORDER BY",
          "GROUP BY",
          "HAVING",
          "Joins",
          "Subqueries",
          "Aggregate Functions",
          "Constraints",
          "Normalization",
          "Database Design",
        ],
      },
      {
        name: "Technical Interview Preparation",
        topics: [
          "Python Interview Questions",
          "SQL Interview Questions",
          "Python Coding Questions",
          "Problem Solving",
          "Data Structures Basics",
          "Logical Questions",
          "Technical Discussion",
          "Coding Practice",
        ],
      },
      {
        name: "HR & Mock Interviews",
        topics: [
          "Resume Preparation",
          "Self Introduction",
          "HR Questions",
          "Communication Skills",
          "Mock Technical Interview",
          "Mock HR Interview",
          "Interview Feedback",
          "Aptitude",
          "Placement Preparation",
        ],
      },
    ],
  },
];
const s = {
  page: { fontFamily: "Inter, Arial, sans-serif", color: "#153c43", background: "#fff", minHeight: "100vh" },
  hero: { minHeight: 420, padding: "70px 6%", display: "flex", alignItems: "center", background: "linear-gradient(90deg, rgba(1,58,59,.97), rgba(1,58,59,.82), rgba(1,58,59,.25)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90') center/cover" },
  container: { width: "min(1200px, calc(100% - 30px))", margin: "auto" },
  title: { fontFamily: "Georgia, serif", color: "#fff", fontSize: "clamp(40px, 5vw, 62px)", lineHeight: 1, margin: 0 },
  gold: { color: "#efbe4b" },
  search: { marginTop: -28, position: "relative", zIndex: 3, background: "#fff", padding: 16, borderRadius: 16, boxShadow: "0 12px 35px rgba(0,60,60,.15)", display: "flex", gap: 9, flexWrap: "wrap" },
  input: { height: 45, border: "1px solid #d7e6e4", borderRadius: 9, padding: "0 13px", fontSize: 13, outline: "none" },
  select: { height: 45, border: "1px solid #d7e6e4", borderRadius: 9, padding: "0 12px", fontSize: 13, background: "#fff", color: "#264b50", cursor: "pointer", position: "relative", zIndex: 10 },
  filters: { marginTop: 20, padding: 15, border: "1px solid #dce9e7", borderRadius: 12, background: "#f7fbfa", display: "flex", gap: 18, flexWrap: "wrap", alignItems: "center" },
  check: { display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#38585d" },
  section: { padding: "38px 0" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 17 },
  card: { position: "relative", background: "linear-gradient(145deg,#f7fcfb,#edf7f5)", border: "1px solid #dcebe9", borderRadius: 14, padding: 15, display: "flex", flexDirection: "column", minHeight: 520, boxShadow: "0 5px 15px rgba(0,70,70,.05)" },
  image: { width: "100%", height: 135, objectFit: "contain", background: "#fff", borderRadius: 10, padding: 12 },
  badge: { position: "absolute", top: 12, right: 12, background: "#08706d", color: "#fff", borderRadius: 15, padding: "5px 10px", fontSize: 10, fontWeight: 800, zIndex: 2 },
  cardTitle: { fontFamily: "Georgia, serif", color: "#113c43", fontSize: 19, lineHeight: 1.15, margin: "14px 0 7px" },
  description: { color: "#596b70", fontSize: 12, lineHeight: 1.45, minHeight: 50, margin: 0 },
  topicWrap: { display: "flex", flexWrap: "wrap", gap: 6, margin: "10px 0", maxHeight: 118, overflow: "hidden" },
  topic: { background: "#fff", border: "1px solid #d7e7e4", borderRadius: 20, padding: "5px 8px", color: "#456267", fontSize: 10.5, whiteSpace: "nowrap" },
  btn: { border: 0, borderRadius: 23, background: "#075d5d", color: "#fff", height: 40, fontSize: 12, fontWeight: 800, cursor: "pointer", width: "100%" },
  modalBack: { position: "fixed", inset: 0, zIndex: 9999, background: "rgba(4,31,34,.78)", display: "flex", justifyContent: "center", alignItems: "center", padding: 15 },
  modal: { width: "min(1000px,100%)", height: "92vh", maxHeight: "92vh", overflow: "hidden", background: "#fff", borderRadius: 18, boxShadow: "0 25px 70px rgba(0,0,0,.35)", display: "flex", flexDirection: "column" },
  modalHead: { padding: "20px 23px", background: "linear-gradient(135deg,#075d5d,#0b7370)", color: "#fff", display: "flex", justifyContent: "space-between", gap: 15, flexShrink: 0 },
  close: { border: 0, background: "rgba(255,255,255,.15)", color: "#fff", borderRadius: "50%", width: 35, height: 35, fontSize: 22, cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 },
  content: { display: "grid", gridTemplateColumns: "280px minmax(0,1fr)", flex: 1, minHeight: 0, overflow: "hidden" },
  modules: { background: "#f3f9f7", borderRight: "1px solid #dce9e7", padding: 15, overflowY: "auto", minHeight: 0 },
  module: { width: "100%", border: "1px solid #dce9e7", background: "#fff", borderRadius: 9, padding: "13px 12px", marginBottom: 8, color: "#28555a", fontWeight: 700, cursor: "pointer", textAlign: "left", fontSize: 12, display: "block" },
  activeModule: { background: "#075d5d", color: "#fff", borderColor: "#075d5d", boxShadow: "0 5px 12px rgba(0,80,80,.15)" },
  topicContent: { padding: 23, overflowY: "auto", minWidth: 0, minHeight: 0 },
  topicCards: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 11, marginTop: 17 },
  topicCard: { padding: "14px 13px", borderRadius: 11, background: "linear-gradient(135deg,#f4faf8,#fff)", border: "1px solid #dce9e7", boxShadow: "0 4px 12px rgba(0,70,70,.05)", color: "#34575c", fontSize: 12, fontWeight: 700 },
  footer: { padding: "15px 22px", borderTop: "1px solid #e0e9e7", display: "flex", gap: 10, flexWrap: "wrap", flexShrink: 0, background: "#fff", position: "relative", zIndex: 2 },

};

function CourseCard({ course, onModules, onEnquire }) {
  return (
    <article style={s.card}>
      {course.badge && <span style={s.badge}>{course.badge}</span>}
      <img src={course.image} alt={course.title} style={s.image} />
      <h3 style={s.cardTitle}>{course.title}</h3>
      <p style={s.description}>{course.description}</p>
      <div style={s.topicWrap}>
        {course.topics.map((topic, i) => (
          <span key={i} style={s.topic}>{topic}</span>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8, margin: "auto 0 10px", fontSize: 11, fontWeight: 800, color: "#31565b" }}>
        <span>◷ {course.duration}</span>
        <span>{course.level}</span>
      </div>
      <button style={s.btn} onClick={() => onModules(course)}>View Modules →</button>
      <button style={{ ...s.btn, marginTop: 8, background: "#efbe4b", color: "#173d42" }} onClick={onEnquire}>Enquire Now →</button>
    </article>
  );
}

function CourseModal({ course, onClose, navigate }) {
  const [activeModule, setActiveModule] = useState(course.modules[0]);

  React.useEffect(() => {
    const key = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", key);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      style={s.modalBack}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div style={s.modal}>
        <div style={s.modalHead}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 2, fontWeight: 800, marginBottom: 5 }}>COURSE CURRICULUM</div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,3vw,30px)", margin: "0 0 6px" }}>{course.title}</h2>
            <p style={{ margin: 0, fontSize: 12, opacity: 0.9 }}>Select a module from the left to view its complete content.</p>
          </div>
          <button style={s.close} onClick={onClose}>×</button>
        </div>
        <div style={s.content}>
          <aside style={s.modules}>
            <h3 style={{ margin: "3px 5px 13px", color: "#075d5d", fontSize: 15 }}>All Modules</h3>
            {course.modules.map((module, i) => {
              const active = activeModule.name === module.name;
              return (
                <button
                  key={i}
                  onClick={() => setActiveModule(module)}
                  style={{ ...s.module, ...(active ? s.activeModule : {}) }}
                >
                  <span style={{ marginRight: 7 }}>{active ? "●" : "○"}</span>
                  {module.name}
                  <span style={{ float: "right" }}>→</span>
                </button>
              );
            })}
          </aside>
          <section style={s.topicContent}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <div>
                <div style={{ color: "#bd8b25", fontSize: 10, fontWeight: 900, letterSpacing: 2 }}>
                  MODULE {course.modules.indexOf(activeModule) + 1}
                </div>
                <h2 style={{ fontFamily: "Georgia,serif", color: "#113c43", margin: "4px 0", fontSize: 25 }}>{activeModule.name}</h2>
              </div>
              <div style={{ background: "#eaf5f2", color: "#075d5d", borderRadius: 20, padding: "7px 12px", fontSize: 11, fontWeight: 800 }}>
                {activeModule.topics.length} Topics
              </div>
            </div>
            <p style={{ color: "#718084", fontSize: 12, lineHeight: 1.5, margin: "8px 0" }}>
              Complete topics covered in this module:
            </p>
            <div style={s.topicCards}>
              {activeModule.topics.map((topic, i) => (
                <div key={i} style={s.topicCard}>
                  <div style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                    <span style={{ width: 24, height: 24, minWidth: 24, borderRadius: "50%", background: "#075d5d", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>
                      {i + 1}
                    </span>
                    <span>{topic}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div style={s.footer}>
          <button style={{ ...s.btn, flex: 1, minWidth: 180 }} onClick={() => navigate("/contact")}>
            Enquire About This Course →
          </button>
          <button style={{ ...s.btn, flex: 0.4, minWidth: 100, background: "#fff", color: "#075d5d", border: "1px solid #075d5d" }} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Courses() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [duration, setDuration] = useState("All");
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [popularOnly, setPopularOnly] = useState(false);
  const [careerOnly, setCareerOnly] = useState(false);
  const [newOnly, setNewOnly] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredCourses = useMemo(() => {
    const text = search.toLowerCase().trim();
    return courses.filter((course) => {
      const searchable = `
        ${course.title}
        ${course.description}
        ${course.category}
        ${course.level}
        ${course.duration}
        ${course.topics.join(" ")}
        ${course.modules.map((m) => `${m.name} ${m.topics.join(" ")}`).join(" ")}
      `.toLowerCase();

      return (
        (!text || searchable.includes(text)) &&
        (category === "All" || course.category === category) &&
        (level === "All" || course.level === level) &&
        (duration === "All" || course.duration === duration) &&
        (!onlineOnly || course.mode === "Online Live") &&
        (!popularOnly || course.badge === "Popular") &&
        (!careerOnly || course.badge === "Career") &&
        (!newOnly || course.badge === "New")
      );
    });
  }, [search, category, level, duration, onlineOnly, popularOnly, careerOnly, newOnly]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setLevel("All");
    setDuration("All");
    setOnlineOnly(false);
    setPopularOnly(false);
    setCareerOnly(false);
    setNewOnly(false);
  };

  return (
    <>
      <Header />
      <main style={s.page}>
        <section style={s.hero}>
          <div style={s.container}>
            <div style={{ color: "#fff", fontSize: 11, letterSpacing: 3, fontWeight: 800, marginBottom: 12 }}>
              VIGHNAVI ACADEMY • OUR COURSES
            </div>
            <h1 style={s.title}>
              Future-Ready
              <br />
              Skills for a
              <br />
              <span style={s.gold}>Better Tomorrow</span>
            </h1>
            <p style={{ color: "#fff", maxWidth: 600, lineHeight: 1.6, fontSize: 14, marginTop: 18 }}>
              Industry-focused online courses designed to help you learn, build and grow from anywhere in the world.
            </p>
          </div>
        </section>

        <div style={s.container}>
          <div style={s.search}>
            <input
              style={{ ...s.input, flex: "2 1 280px" }}
              placeholder="🔎 Search course, skill, topic, module..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select style={{ ...s.select, flex: "1 1 160px" }} value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="All">All Categories</option>
              <option value="Programming">Programming</option>
              <option value="Full Stack">Full Stack</option>
              <option value="Data & Analytics">Data & Analytics</option>
              <option value="AI & Emerging Tech">AI & Emerging Tech</option>
              <option value="Cloud & DevOps">Cloud & DevOps</option>
              <option value="Career Preparation">Career Preparation</option>
            </select>
            <select style={{ ...s.select, flex: "1 1 130px" }} value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Advanced">Advanced</option>
            </select>
            <select style={{ ...s.select, flex: "1 1 140px" }} value={duration} onChange={(e) => setDuration(e.target.value)}>
              <option value="All">Any Duration</option>
              <option value="3 - 4 Months">3 - 4 Months</option>
              <option value="3 - 5 Months">3 - 5 Months</option>
              <option value="4 - 5 Months">4 - 5 Months</option>
              <option value="4 - 6 Months">4 - 6 Months</option>
              <option value="6 - 8 Months">6 - 8 Months</option>
            </select>
            <button style={{ ...s.btn, width: "auto", padding: "0 18px", background: "#efbe4b", color: "#173d42" }} onClick={clearFilters}>
              Clear
            </button>
          </div>

          <div style={s.filters}>
            <strong style={{ color: "#075d5d", fontSize: 13 }}>Advanced Filters:</strong>
            <label style={s.check}>
              <input type="checkbox" checked={onlineOnly} onChange={(e) => setOnlineOnly(e.target.checked)} />
              Online Live
            </label>
            <label style={s.check}>
              <input type="checkbox" checked={popularOnly} onChange={(e) => setPopularOnly(e.target.checked)} />
              Popular
            </label>
            <label style={s.check}>
              <input type="checkbox" checked={careerOnly} onChange={(e) => setCareerOnly(e.target.checked)} />
              Career Preparation
            </label>
            <label style={s.check}>
              <input type="checkbox" checked={newOnly} onChange={(e) => setNewOnly(e.target.checked)} />
              New Courses
            </label>
          </div>

          <section style={s.section}>
            <div style={{ marginBottom: 25 }}>
              <div style={{ color: "#075d60", fontSize: 11, letterSpacing: 3, fontWeight: 800 }}>EXPLORE OUR COURSES</div>
              <h2 style={{ fontFamily: "Georgia,serif", color: "#103c43", fontSize: "clamp(30px,4vw,43px)", margin: "6px 0" }}>
                Choose Your <span style={{ color: "#bd8b25" }}>Learning Path</span>
              </h2>
              <p style={{ color: "#687b7f", fontSize: 13, margin: 0 }}>
                Showing {filteredCourses.length} of {courses.length} courses
              </p>
            </div>

            {filteredCourses.length ? (
              <div style={s.grid}>
                {filteredCourses.map((course) => (
                  <CourseCard
                    key={course.title}
                    course={course}
                    onModules={setSelectedCourse}
                    onEnquire={() => navigate("/contact")}
                  />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "60px 20px", border: "1px solid #dce9e7", borderRadius: 15, background: "#f7fbfa" }}>
                <h3 style={{ color: "#075d5d" }}>No Courses Found</h3>
                <p style={{ color: "#718084", fontSize: 13 }}>Try changing your search or filters.</p>
                <button style={{ ...s.btn, width: 150 }} onClick={clearFilters}>Clear Filters</button>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          navigate={navigate}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </>
  );
}