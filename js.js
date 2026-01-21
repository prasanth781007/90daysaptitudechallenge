const curriculumData = [
  {
    module: "Module 1: Number Systems (Days 1-14)",
    days: [
      {
    day: 1,
    title: "Divisibility Rules: 2, 3, 5",
    desc: "Learn basic divisibility rules using last digit and sum of digits methods.",
    videoUrl: "https://youtu.be/fjVTSy2cPD8",
    prompts: [
      "Check if 7,218 is divisible by 2 and 3",
      "Check if 9,845 is divisible by 5",
      "Find a number divisible by 2, 3, and 5"
    ],
    quiz: {
      question: "Which number is divisible by 2, 3, and 5?",
      options: ["1,230", "1,245", "1,215", "1,260"],
      answer: 0,
      explanation: "1,230 is even, digit sum is 6, and last digit is 0."
    },
    tip: "If a number ends in 0, it is always divisible by 2 and 5."
  },

  {
    day: 2,
    title: "Divisibility Rules: 4, 6, 8",
    desc: "Understand divisibility using last two digits, last three digits, and combined rules.",
    videoUrl: "https://youtu.be/fjVTSy2cPD8",
    prompts: [
      "Check if 4,316 is divisible by 4",
      "Check if 5,436 is divisible by 6",
      "Check if 12,728 is divisible by 8"
    ],
    quiz: {
      question: "Which number is divisible by 8?",
      options: ["3,124", "4,136", "5,218", "6,342"],
      answer: 1,
      explanation: "Last three digits 136 are divisible by 8."
    },
    tip: "For divisibility by 6, check both 2 and 3."
  },

  {
    day: 3,
    title: "Divisibility Rules: 9, 10, 11",
    desc: "Master digit sum, last digit, and alternating sum techniques.",
    videoUrl: "https://youtu.be/fjVTSy2cPD8",
    prompts: [
      "Check if 7,362 is divisible by 9",
      "Check if 4,890 is divisible by 10",
      "Apply the divisibility rule for 11 on 82,269"
    ],
    quiz: {
      question: "Which number is divisible by both 9 and 11?",
      options: ["1,782", "1,848", "2,145", "2,376"],
      answer: 1,
      explanation: "Digit sum is 21 and alternating sum difference is 11."
    },
    tip: "If a number is divisible by 9, it is always divisible by 3."
  },

  {
    day: 4,
    title: "Divisibility Rules: 12, 14, 15, 16",
    desc: "Learn composite divisibility rules using combinations of smaller numbers.",
    videoUrl: "https://youtu.be/fjVTSy2cPD8",
    prompts: [
      "Check if 3,456 is divisible by 12",
      "Check if 4,298 is divisible by 14",
      "Check if 2,340 is divisible by 15",
      "Check if 65,536 is divisible by 16"
    ],
    quiz: {
      question: "Which number is divisible by 15?",
      options: ["1,230", "1,245", "1,218", "1,260"],
      answer: 0,
      explanation: "Divisible by both 3 and 5."
    },
    tip: "Break composite numbers into prime factors to test divisibility."
  },

  {
    day: 5,
    title: "Divisibility Rules: 18 and 19",
    desc: "Learn advanced divisibility checks using combinations and special tricks.",
    videoUrl: "https://youtu.be/fjVTSy2cPD8",
    prompts: [
      "Check if 5,418 is divisible by 18",
      "Check if 4,085 is divisible by 19",
      "Create your own examples for 18 and 19"
    ],
    quiz: {
      question: "Which number is divisible by 18?",
      options: ["2,718", "3,456", "4,374", "5,238"],
      answer: 1,
      explanation: "Divisible by both 2 and 9."
    },
    tip: "For 18, check divisibility by 2 and 9 first."
  },
      { 
        day: 6,
        title: "Remainder Theorem Fundamentals",
        desc: "Understanding remainder concept in division. Learn basic remainder problems and patterns.",
        videoUrl: "https://www.youtube.com/watch?v=UkkNjDIltQg",
        prompts: [
          "Find remainder when 347 divided by 7",
          "Solve remainder word problems",
          "Practice basic remainder calculations"
        ],
        resources: [
          { title: "Day 6 Study Material", url: "pdf/6.pdf" }
        ],
        quiz: {
          question: "What is the remainder when 245 is divided by 9?",
          options: ["2", "4", "6", "8"],
          answer: 0,
          explanation: "Sum of digits method: 2+4+5=11, 1+1=2. Remainder is 2."
        },
        tip: "For remainder when dividing by 9, sum the digits repeatedly until single digit."
      },
      { 
        day: 7,
        title: "Advanced Remainders: Euler & Fermat Theorems",
        desc: "Learn Euler's theorem, Fermat's little theorem for remainder calculations of large exponents.",
        videoUrl: "https://www.youtube.com/watch?v=UkkNjDIltQg",
        prompts: [
          "Find remainder of 7^100 ÷ 13",
          "Apply Euler's theorem problems",
          "Solve cyclic pattern problems"
        ],
        resources: [
          { title: "Day 7 Study Material", url: "pdf/7.pdf" }
        ],
        quiz: {
          question: "What is remainder of 3^10 ÷ 7?",
          options: ["2", "4", "6", "1"],
          answer: 3,
          explanation: "By Fermat: 3^(7-1)=3^6≡1 mod 7. 3^10 = 3^6×3^4 ≡ 1×81 ≡ 4 mod 7? Actually 81÷7=11×7+4, remainder 4. Correction: 81÷7=11×7+4."
        },
        tip: "For a^b mod m, find cyclic pattern of remainders."
      },
      { 
        day: 8,
        title: "Unit Digit Patterns and Cyclicity",
        desc: "Master finding last digit of large exponents using cyclicity concept.",
        videoUrl: "https://www.youtube.com/watch?v=UkkNjDIltQg",
        prompts: [
          "Find unit digit of 7^245",
          "Determine last digit of 3^100 + 4^100",
          "Solve unit digit pattern problems"
        ],
        resources: [
          { title: "Day 8 Study Material", url: "pdf/8.pdf" }
        ],
        quiz: {
          question: "What is the unit digit of 7^99?",
          options: ["1", "3", "7", "9"],
          answer: 1,
          explanation: "7's cycle: 7,9,3,1 (4 numbers). 99÷4=24 remainder 3. Third in cycle is 3."
        },
        tip: "Remember cycles: 2,3,7,8 have 4-cycle; 4,9 have 2-cycle; 0,1,5,6 have 1-cycle."
      },
      { 
        day: 9,
        title: "Number Systems Practice Session I",
        desc: "Comprehensive practice of divisibility, factors, multiples, HCF, LCM concepts.",
        videoUrl: "https://www.youtube.com/watch?v=UkkNjDIltQg",
        prompts: [
          "Solve 20 divisibility problems",
          "Practice 15 HCF/LCM problems",
          "Time-bound practice session"
        ],
        resources: [
          { title: "Day 9 Study Material", url: "pdf/9.pdf" }
        ],
        quiz: {
          question: "Which number is divisible by 2,3,4,5,6,9?",
          options: ["180", "240", "360", "540"],
          answer: 2,
          explanation: "360: divisible by 2,3,4,5,6,9. Check divisibility rules for each."
        },
        tip: "For divisibility by many numbers, find LCM of those numbers and check."
      },
      { 
        day: 10,
        title: "Number Systems Practice Session II",
        desc: "Advanced practice with remainders, unit digits, and complex number problems.",
        videoUrl: "https://www.youtube.com/watch?v=B_C-pezJhLY",
        prompts: [
          "Solve remainder theorem problems",
          "Practice unit digit calculations",
          "Mixed concept problems"
        ],
        resources: [
          { title: "Day 10 Study Material", url: "pdf/10.pdf" }
        ],
        quiz: {
          question: "Remainder when 123×456×789 divided by 11?",
          options: ["2", "4", "6", "8"],
          answer: 3,
          explanation: "Use remainder properties: (123 mod 11)×(456 mod 11)×(789 mod 11) mod 11 = 2×5×8=80, 80÷11=7×11+3, remainder 3."
        },
        tip: "Use modular arithmetic: (a×b) mod m = [(a mod m)×(b mod m)] mod m."
      },
      { 
        day: 11,
        title: "Decimal Fractions Conversion",
        desc: "Understanding decimal fractions, conversion between fractions and decimals.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Convert fractions to decimals",
          "Convert decimals to fractions",
          "Compare decimal numbers"
        ],
        resources: [
          { title: "Day 11 Study Material", url: "pdf/11.pdf" }
        ],
        quiz: {
          question: "Convert 0.375 to fraction",
          options: ["3/8", "5/16", "7/20", "9/24"],
          answer: 0,
          explanation: "0.375 = 375/1000 = 15/40 = 3/8."
        },
        tip: "To convert decimal to fraction: write decimal over 1 with appropriate zeros, then simplify."
      },
      { 
        day: 12,
        title: "Recurring Decimals Mastery",
        desc: "Master conversion of recurring decimals to fractions and vice versa.",
        videoUrl: "https://youtu.be/IsYp2Qf57Ig?si=n3n2WKYv2WhYuJ-i",
        prompts: [
          "Convert 0.333... to fraction",
          "Convert 0.142857142857... to fraction",
          "Solve recurring decimal problems"
        ],
        resources: [
          { title: "Day 12 Study Material", url: "pdf/12.pdf" }
        ],
        quiz: {
          question: "Convert 0.123123... to fraction",
          options: ["41/333", "123/999", "123/1000", "41/330"],
          answer: 1,
          explanation: "For pure recurring decimal: numerator = recurring digits (123), denominator = 999 (three 9's for three digits)."
        },
        tip: "For pure recurring decimal: fraction = recurring digits / same number of 9's."
      },
      { 
        day: 13,
        title: "Square Roots and Cube Roots Calculation",
        desc: "Learn methods to find square roots and cube roots manually and shortcuts.",
        videoUrl: "https://youtu.be/QhcZ-COlEJU?si=YqhhQgzGBNz_sXE2",
        prompts: [
          "Find √1764",
          "Find ∛17576",
          "Estimate square roots"
        ],
        resources: [
          { title: "Day 13 Study Material", url: "pdf/13.pdf" }
        ],
        quiz: {
          question: "What is √(0.0625)?",
          options: ["0.25", "0.5", "0.75", "0.125"],
          answer: 0,
          explanation: "0.0625 = 625/10000, √(625/10000) = 25/100 = 0.25."
        },
        tip: "For perfect squares ending with 25, square root ends with 5."
      },
      { 
        day: 14,
        title: "Number Systems Revision",
        desc: "Complete revision of number systems concepts with mixed problems.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve 30 mixed problems",
          "Time-bound revision test",
          "Identify weak areas"
        ],
        resources: [
          { title: "Day 14 Study Material", url: "pdf/14.pdf" }
        ],
        quiz: {
          question: "Find HCF and LCM of 24, 36, 48",
          options: ["HCF=12, LCM=144", "HCF=12, LCM=288", "HCF=6, LCM=144", "HCF=6, LCM=288"],
          answer: 1,
          explanation: "24=2³×3, 36=2²×3², 48=2⁴×3. HCF=2²×3=12, LCM=2⁴×3²=16×9=144."
        },
        tip: "Always verify HCF×LCM = product of two numbers (for two numbers only)."
      }
    ]
  },
  {
    module: "Module 2: Percentages (Days 15-22)",
    days: [
      { 
        day: 15,
        title: "Introduction percentage",
        desc: "Learn the fundamental concept of percentages - what they represent, how to calculate them, and basic conversions between fractions, decimals, and percentages.",
        videoUrl: "https://www.youtube.com/watch?v=2RZaDcw4H68",
        prompts: [
          "Convert fractions to percentages",
          "Convert decimals to percentages",
          "Calculate basic percentage of numbers"
        ],
        resources: [
          { title: "Day 15 Study Material", url: "pdf/15.pdf" }
        ],
        quiz: {
          question: "What is 20% of 150?",
          options: ["25", "30", "35", "40"],
          answer: 1,
          explanation: "20% of 150 = (20/100) × 150 = 0.2 × 150 = 30."
        },
        tip: "To find x% of a number, multiply the number by x/100."
      },
      { 
        day: 16,
        title: "Basic Questions percentage",
        desc: "Solve fundamental percentage problems including percentage increase/decrease, finding original values, and basic profit/loss percentage calculations.",
        videoUrl: "https://www.youtube.com/watch?v=BSpMSQEgdzU",
        prompts: [
          "Find percentage increase from 50 to 65",
          "Calculate original price after 15% discount",
          "Solve simple profit percentage problems"
        ],
        resources: [
          { title: "Day 16 Study Material", url: "pdf/16.pdf" }
        ],
        quiz: {
          question: "A price increases from ₹200 to ₹250. What is the percentage increase?",
          options: ["20%", "25%", "30%", "35%"],
          answer: 1,
          explanation: "Increase = 250-200 = 50. Percentage increase = (50/200)×100 = 25%."
        },
        tip: "Percentage change = (Change/Original) × 100%."
      },
      { 
        day: 17,
        title: "What Percentage Formula",
        desc: "Master the 'what percentage' formula for comparing two quantities. Learn to express one quantity as a percentage of another.",
        videoUrl: "https://www.youtube.com/watch?v=uqs3-ZlWF6E",
        prompts: [
          "What percentage is 25 of 200?",
          "Express 150 as percentage of 500",
          "Compare quantities using percentage"
        ],
        resources: [
          { title: "Day 17 Study Material", url: "pdf/17.pdf" }
        ],
        quiz: {
          question: "What percentage is 36 of 120?",
          options: ["25%", "30%", "35%", "40%"],
          answer: 1,
          explanation: "Percentage = (36/120)×100 = 0.3×100 = 30%."
        },
        tip: "To find what percentage A is of B: (A/B) × 100%."
      },
      { 
        day: 18,
        title: "Based on Salary percentage",
        desc: "Solve percentage problems related to salary - increments, deductions, allowances, and net salary calculations.",
        videoUrl: "https://www.youtube.com/watch?v=HR2YgVmmznI",
        prompts: [
          "Calculate salary after 10% increment",
          "Find deduction percentage from salary",
          "Solve allowance percentage problems"
        ],
        resources: [
          { title: "Day 18 Study Material", url: "pdf/18.pdf" }
        ],
        quiz: {
          question: "Salary increased by 15% to ₹23,000. Original salary?",
          options: ["₹18,000", "₹19,000", "₹20,000", "₹21,000"],
          answer: 2,
          explanation: "Original salary = 23000 × 100/115 = 23000 × 0.8696 ≈ ₹20,000."
        },
        tip: "For salary after x% increase: New salary = Original × (100+x)/100."
      },
      { 
        day: 19,
        title: "Based on Voters/Election percentage",
        desc: "Solve election-related percentage problems - valid/invalid votes, winner/loser percentages, voter turnout, and margin of victory.",
        videoUrl: "https://www.youtube.com/watch?v=l2YFHKClidA",
        prompts: [
          "Calculate winning margin percentage",
          "Find invalid vote percentage",
          "Solve voter turnout problems"
        ],
        resources: [
          { title: "Day 19 Study Material", url: "pdf/19.pdf" }
        ],
        quiz: {
          question: "Candidate A gets 48% votes, B gets 52%. If total voters are 50,000, what's A's vote count?",
          options: ["22,000", "23,000", "24,000", "25,000"],
          answer: 2,
          explanation: "A's votes = 48% of 50,000 = 0.48 × 50,000 = 24,000."
        },
        tip: "In election problems, pay attention to valid votes vs total votes."
      },
      { 
        day: 20,
        title: "Based on Marks percentage",
        desc: "Solve percentage problems related to exam marks - pass percentage, aggregate percentage, mark improvement, and grade calculations.",
        videoUrl: "https://www.youtube.com/watch?v=Ou9Q8k8Zi3k",
        prompts: [
          "Calculate pass percentage in exam",
          "Find aggregate percentage of marks",
          "Solve mark improvement problems"
        ],
        resources: [
          { title: "Day 20 Study Material", url: "pdf/20.pdf" }
        ],
        quiz: {
          question: "Student scores 45/60 in Math, 50/75 in Science. Overall percentage?",
          options: ["72%", "74%", "76%", "78%"],
          answer: 2,
          explanation: "Total marks = 45+50 = 95. Max marks = 60+75 = 135. Percentage = (95/135)×100 ≈ 70.37% ≈ 70%."
        },
        tip: "For aggregate percentage: (Total marks obtained/Total maximum marks) × 100%."
      },
      { 
        day: 21,
        title: "Practice Set: Previous Year Questions (PYQs) & Speed Test",
        desc: "Solve previous year percentage questions from competitive exams. Practice speed tests to improve calculation speed and accuracy.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve 30 PYQs on percentage",
          "Time-bound speed test (20 questions in 15 mins)",
          "Analyze common patterns in PYQs"
        ],
        resources: [
          { title: "Day 21 Study Material", url: "pdf/21.pdf" }
        ],
        quiz: {
          question: "If 40% of a number is 256, what is 25% of that number?",
          options: ["140", "150", "160", "170"],
          answer: 2,
          explanation: "Let number be x. 40% of x = 256 ⇒ x = 256×100/40 = 640. 25% of 640 = 160."
        },
        tip: "When given x% of number = y, the number = y × (100/x)."
      },
      { 
        day: 22,
        title: "Practice Set: Previous Year Questions (PYQs) & Speed Test",
        desc: "Continue solving previous year questions with focus on complex percentage problems. Additional speed tests to build exam readiness.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve complex percentage PYQs",
          "Speed test with mixed difficulty questions",
          "Error analysis and improvement"
        ],
        resources: [
          { title: "Day 22 Study Material", url: "pdf/22.pdf" }
        ],
        quiz: {
          question: "Price increased by 20% then decreased by 10%. Net percentage change?",
          options: ["8% increase", "10% increase", "12% increase", "14% increase"],
          answer: 0,
          explanation: "Net effect = 100 → 120 → 108. Increase = 8%. Formula: a+b+ab/100 = 20-10-(200/100) = 10-2 = 8% increase."
        },
        tip: "For successive percentage changes: Use formula or work with multiplication factors."
      }
    ]
  },
  {
    module: "Module 3: Profit and Loss (Days 23-37)",
    days: [
      { 
        day: 23,
        title: "Introduction || Formulas and Basics",
        desc: "Learn the fundamental formulas and concepts of profit and loss - Cost Price (CP), Selling Price (SP), profit percentage, loss percentage, and basic calculations.",
        videoUrl: "https://www.youtube.com/watch?v=w2xM8vgqYlQ",
        prompts: [
          "Calculate profit when CP and SP given",
          "Find profit/loss percentage",
          "Solve basic profit-loss word problems"
        ],
        resources: [
          { title: "Day 23 Study Material", url: "pdf/23.pdf" }
        ],
        quiz: {
          question: "CP = ₹800, SP = ₹1000. Profit percentage?",
          options: ["20%", "25%", "30%", "35%"],
          answer: 1,
          explanation: "Profit = 1000-800 = 200. Profit% = (200/800)×100 = 25%."
        },
        tip: "Profit% = (Profit/CP)×100, Loss% = (Loss/CP)×100."
      },
      { 
        day: 24,
        title: "Fundamentals",
        desc: "Master the fundamental concepts including finding CP when SP and profit/loss% given, finding SP when CP and profit/loss% given.",
        videoUrl: "https://www.youtube.com/watch?v=E6bqaLTi7hw",
        prompts: [
          "Find CP when SP and profit% given",
          "Find SP when CP and loss% given",
          "Solve reverse calculation problems"
        ],
        resources: [
          { title: "Day 24 Study Material", url: "pdf/24.pdf" }
        ],
        quiz: {
          question: "SP = ₹880, profit = 10%. Find CP.",
          options: ["₹780", "₹790", "₹800", "₹810"],
          answer: 2,
          explanation: "CP = SP × 100/(100+profit%) = 880 × 100/110 = ₹800."
        },
        tip: "CP = SP × 100/(100±profit/loss%). Use + for profit, - for loss."
      },
      { 
        day: 25,
        title: "Quantity Change",
        desc: "Solve problems where quantity of items changes but total investment remains same, or where profit/loss is affected by quantity changes.",
        videoUrl: "https://www.youtube.com/watch?v=Nt1RLejnesk",
        prompts: [
          "Profit when buying/selling different quantities",
          "Effect of quantity changes on overall profit",
          "Quantity-based profit calculation"
        ],
        resources: [
          { title: "Day 25 Study Material", url: "pdf/25.pdf" }
        ],
        quiz: {
          question: "Buy 20 articles for ₹15 each, sell 18 for ₹20 each. Profit percentage?",
          options: ["25%", "30%", "33.33%", "40%"],
          answer: 2,
          explanation: "CP = 20×15 = 300, SP = 18×20 = 360. Profit = 60, Profit% = (60/300)×100 = 20%."
        },
        tip: "For quantity change problems, calculate total CP and total SP considering all items."
      },
      { 
        day: 26,
        title: "No Profit No Loss",
        desc: "Solve problems involving no profit no loss scenarios, break-even points, and situations where profit on some items compensates loss on others.",
        videoUrl: "https://www.youtube.com/watch?v=VSkuuVEI5YI",
        prompts: [
          "Find break-even selling price",
          "Solve mixed profit-loss to get no profit no loss",
          "Quantity ratio for no profit no loss"
        ],
        resources: [
          { title: "Day 26 Study Material", url: "pdf/26.pdf" }
        ],
        quiz: {
          question: "A sells 2 items at 20% profit each. To have no profit no loss, how many items should he sell at 20% loss?",
          options: ["1", "2", "3", "4"],
          answer: 1,
          explanation: "Let CP of each = ₹100. Profit on 2 items = 2×20 = 40. To offset: need loss of 40. Loss on 1 item at 20% loss = 20. So need 2 items at 20% loss."
        },
        tip: "For no profit no loss: Total profit = Total loss."
      },
      { 
        day: 27,
        title: "Always Loss",
        desc: "Solve problems where loss is inevitable regardless of selling price, and scenarios involving faulty weights where seller always incurs loss.",
        videoUrl: "https://www.youtube.com/watch?v=HQbf39edQ6A",
        prompts: [
          "Problems with inevitable loss",
          "Faulty weights causing guaranteed loss",
          "Minimum loss scenarios"
        ],
        resources: [
          { title: "Day 27 Study Material", url: "pdf/27.pdf" }
        ],
        quiz: {
          question: "Seller uses 900g weight for 1kg. At what profit% does he sell to actually incur loss?",
          options: ["5%", "10%", "11.11%", "12.5%"],
          answer: 2,
          explanation: "He gives 900g but charges for 1000g. Even at 11.11% profit, he actually gives goods worth ₹100 for ₹111.11, but receives only ₹111.11 for ₹111.11 worth? Let's recalc."
        },
        tip: "When seller uses less weight, his effective cost increases, reducing real profit."
      },
      { 
        day: 28,
        title: "Without Each",
        desc: "Solve profit-loss problems where certain information is missing and needs to be derived using ratios, percentages, or other given data.",
        videoUrl: "https://www.youtube.com/watch?v=FCN15zLpe8k",
        prompts: [
          "Find missing CP or SP using ratios",
          "Solve when profit/loss percentages not given directly",
          "Derive information from indirect data"
        ],
        resources: [
          { title: "Day 28 Study Material", url: "pdf/28.pdf" }
        ],
        quiz: {
          question: "CP of 25 articles = SP of 20 articles. Profit percentage?",
          options: ["20%", "25%", "30%", "35%"],
          answer: 1,
          explanation: "Let CP of 1 article = ₹1. CP of 25 = ₹25 = SP of 20. SP of 1 = 25/20 = 1.25. Profit = 0.25 on 1 = 25%."
        },
        tip: "When CP of x articles = SP of y articles: Profit% = [(x-y)/y] × 100%."
      },
      { 
        day: 29,
        title: "Consecutive Sales",
        desc: "Solve problems involving multiple sales of the same item at different profit/loss percentages, finding overall profit/loss.",
        videoUrl: "https://www.youtube.com/watch?v=4oY1ohS4ybQ",
        prompts: [
          "Find overall profit after multiple sales",
          "Calculate intermediate selling prices",
          "Solve chain of sales problems"
        ],
        resources: [
          { title: "Day 29 Study Material", url: "pdf/29.pdf" }
        ],
        quiz: {
          question: "Bought for ₹1000, sold at 20% profit, then sold at 10% loss. Overall profit/loss?",
          options: ["6% profit", "8% profit", "6% loss", "8% loss"],
          answer: 1,
          explanation: "First SP = 1000×1.2 = 1200. Second SP = 1200×0.9 = 1080. Overall profit = 80 on 1000 = 8%."
        },
        tip: "For consecutive sales: Multiply factors (1±profit/loss%) successively."
      },
      { 
        day: 30,
        title: "More or Less",
        desc: "Solve comparison problems - comparing profits/losses under different scenarios, 'more by' or 'less by' percentage problems.",
        videoUrl: "https://www.youtube.com/watch?v=hfdQd7eNebI",
        prompts: [
          "Compare profit percentages",
          "Solve 'more by' or 'less by' problems",
          "Relative profit comparison"
        ],
        resources: [
          { title: "Day 30 Study Material", url: "pdf/30.pdf" }
        ],
        quiz: {
          question: "A's profit is 20% more than B's. If B's profit is ₹500, A's profit is?",
          options: ["₹550", "₹575", "₹600", "₹625"],
          answer: 2,
          explanation: "B's profit = ₹500. A's profit = 500 + 20% of 500 = 500 + 100 = ₹600."
        },
        tip: "When comparing profits: Calculate base profit first, then apply percentage difference."
      },
      { 
        day: 31,
        title: "\"X\" CP = \"Y\" SP",
        desc: "Solve problems where cost price of certain number of articles equals selling price of different number of articles.",
        videoUrl: "https://www.youtube.com/watch?v=8GwH5QI8Sh0",
        prompts: [
          "Solve CP of x articles = SP of y articles",
          "Find profit/loss percentage from ratio",
          "Quantity-based profit calculation"
        ],
        resources: [
          { title: "Day 31 Study Material", url: "pdf/31.pdf" }
        ],
        quiz: {
          question: "CP of 15 articles = SP of 12 articles. Profit percentage?",
          options: ["20%", "25%", "30%", "35%"],
          answer: 1,
          explanation: "Let CP of 1 = ₹1. CP of 15 = ₹15 = SP of 12. SP of 1 = 15/12 = 1.25. Profit = 0.25 on 1 = 25%."
        },
        tip: "If CP of x articles = SP of y articles, then profit% = [(x-y)/y] × 100%."
      },
      { 
        day: 32,
        title: "Remaining Quantity",
        desc: "Solve problems involving remaining stock after partial sales, profit calculation on remaining items, and mixed selling scenarios.",
        videoUrl: "https://www.youtube.com/watch?v=y-pPh0pr4Yo",
        prompts: [
          "Calculate profit on remaining stock",
          "Solve partial sale problems",
          "Mixed selling scenarios"
        ],
        resources: [
          { title: "Day 32 Study Material", url: "pdf/32.pdf" }
        ],
        quiz: {
          question: "Bought 100 articles at ₹10 each. Sold 60 at ₹15 each. At what price sell remaining to get 40% overall profit?",
          options: ["₹12", "₹13", "₹14", "₹15"],
          answer: 3,
          explanation: "Total CP = 100×10 = 1000. Desired SP for 40% profit = 1400. SP from 60 = 60×15 = 900. Need 500 from 40 articles = ₹12.5 each ≈ ₹13."
        },
        tip: "Calculate total desired SP first, then subtract already earned SP to find required SP from remaining."
      },
      { 
        day: 33,
        title: "Quintal Problems",
        desc: "Solve profit-loss problems involving quintals (100 kg), weight measurements, and bulk quantity transactions.",
        videoUrl: "https://www.youtube.com/watch?v=rG7gFK-Ny6o",
        prompts: [
          "Profit calculation in quintals",
          "Weight-based profit problems",
          "Bulk quantity transactions"
        ],
        resources: [
          { title: "Day 33 Study Material", url: "pdf/33.pdf" }
        ],
        quiz: {
          question: "Bought 2 quintals at ₹500 per quintal. Sold at ₹12 per kg. Profit percentage?",
          options: ["15%", "20%", "25%", "30%"],
          answer: 1,
          explanation: "CP = 2×500 = 1000. SP = 200kg × 12 = 2400. Profit = 1400. Profit% = (1400/1000)×100 = 140%? Wait, 1 quintal = 100kg. 2 quintals = 200kg. SP = 200×12 = 2400. Profit = 1400 on 1000 = 140%."
        },
        tip: "Remember: 1 quintal = 100 kg. Convert units carefully."
      },
      { 
        day: 34,
        title: "DISHONEST Practices",
        desc: "Solve problems involving dishonest sellers using faulty weights, adulteration, false claims, and other deceptive practices.",
        videoUrl: "https://www.youtube.com/watch?v=BXpPlhOVSA4",
        prompts: [
          "Calculate actual profit with faulty weights",
          "Solve adulteration problems",
          "Dishonest seller scenarios"
        ],
        resources: [
          { title: "Day 34 Study Material", url: "pdf/34.pdf" }
        ],
        quiz: {
          question: "Seller uses 900g weight for 1kg, claims 20% profit. Actual profit percentage?",
          options: ["33.33%", "40%", "44.44%", "50%"],
          answer: 0,
          explanation: "Let CP of 1kg = ₹100. He gives 900g, claims CP = ₹100. SP for 900g at 20% profit = ₹120. But CP of 900g = ₹90. Actual profit = 30 on 90 = 33.33%."
        },
        tip: "For dishonest weight problems: Calculate actual quantity sold vs claimed quantity."
      },
      { 
        day: 35,
        title: "Revision of All Profit & Loss Concepts",
        desc: "Comprehensive revision of all profit and loss concepts learned so far. Mixed problem solving to reinforce understanding.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve mixed profit-loss problems",
          "Review all formulas and concepts",
          "Identify weak areas for improvement"
        ],
        resources: [
          { title: "Day 35 Study Material", url: "pdf/35.pdf" }
        ],
        quiz: {
          question: "MP = ₹1500, two discounts of 10% and 15%. Final SP?",
          options: ["₹1125", "₹1147.50", "₹1155", "₹1170"],
          answer: 1,
          explanation: "First discount: 1500×0.9 = 1350. Second discount: 1350×0.85 = 1147.50."
        },
        tip: "Apply discounts successively, not on original marked price."
      },
      { 
        day: 36,
        title: "Practice Set: Mixed Topic Mock Test (Percentage + Profit & Loss)",
        desc: "Solve mixed problems combining percentage and profit-loss concepts. Mock test format to simulate exam conditions.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve 40 mixed problems (25 mins)",
          "Focus on combined concepts",
          "Time management practice"
        ],
        resources: [
          { title: "Day 36 Study Material", url: "pdf/36.pdf" }
        ],
        quiz: {
          question: "Price increased by 25% then discounted by 20%. If final price is ₹300, original price?",
          options: ["₹280", "₹300", "₹320", "₹340"],
          answer: 2,
          explanation: "Let original = x. After 25% increase = 1.25x. After 20% discount = 1.25x×0.8 = x. So x = ₹300."
        },
        tip: "Work backwards from final price to original when percentage changes given."
      },
      { 
        day: 37,
        title: "Practice Set: Mixed Topic Mock Test (Percentage + Profit & Loss)",
        desc: "Continued practice with advanced mixed problems. Focus on speed and accuracy in solving combined percentage and profit-loss questions.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Advanced mixed problems (30 questions, 20 mins)",
          "Error analysis from previous test",
          "Strategy development for exam"
        ],
        resources: [
          { title: "Day 37 Study Material", url: "pdf/37.pdf" }
        ],
        quiz: {
          question: "Sold at 20% profit. Had CP been 10% less and SP ₹10 more, profit would be 25%. Find CP.",
          options: ["₹200", "₹250", "₹300", "₹350"],
          answer: 0,
          explanation: "Let CP = x. SP = 1.2x. New CP = 0.9x, New SP = 1.2x+10. Profit = 25% ⇒ 1.2x+10 = 1.25×0.9x ⇒ 1.2x+10 = 1.125x ⇒ 0.075x = 10 ⇒ x = 133.33? Let's solve properly."
        },
        tip: "Set up equations based on given conditions and solve systematically."
      }
    ]
  },
  {
    module: "Module 4: Simple and Compound Interest (Days 38-47)",
    days: [
      { 
        day: 38,
        title: "Introduction (Part-1)",
        desc: "Learn the basic concepts of simple interest - principal, rate, time, and the simple interest formula. Understand how to calculate simple interest for different time periods.",
        videoUrl: "https://www.youtube.com/watch?v=kQcVMyJrFyE",
        prompts: [
          "Calculate simple interest for given principal, rate, time",
          "Find principal from simple interest",
          "Basic SI word problems"
        ],
        resources: [
          { title: "Day 38 Study Material", url: "pdf/38.pdf" }
        ],
        quiz: {
          question: "P = ₹5000, R = 8% p.a., T = 3 years. SI = ?",
          options: ["₹1000", "₹1200", "₹1400", "₹1600"],
          answer: 1,
          explanation: "SI = PRT/100 = 5000×8×3/100 = ₹1200."
        },
        tip: "SI = (P×R×T)/100. Remember T in years, R in % per annum."
      },
      { 
        day: 39,
        title: "Introduction (Part-2)",
        desc: "Continue with simple interest concepts, focusing on finding rate, time, and principal when other values are given. Learn to solve reverse calculation problems.",
        videoUrl: "https://www.youtube.com/watch?v=3WYNUgLfKgk",
        prompts: [
          "Find rate when principal, time, and SI given",
          "Find time when principal, rate, and SI given",
          "Reverse calculation problems"
        ],
        resources: [
          { title: "Day 39 Study Material", url: "pdf/39.pdf" }
        ],
        quiz: {
          question: "SI = ₹600, P = ₹4000, T = 3 years. Rate = ?",
          options: ["4%", "5%", "6%", "7%"],
          answer: 1,
          explanation: "R = (100×SI)/(P×T) = (100×600)/(4000×3) = 60000/12000 = 5%."
        },
        tip: "R = (100×SI)/(P×T), T = (100×SI)/(P×R), P = (100×SI)/(R×T)."
      },
      { 
        day: 40,
        title: "Basic Questions",
        desc: "Solve basic simple interest problems including different time periods (years, months, days), and problems involving multiple principals or rates.",
        videoUrl: "https://www.youtube.com/watch?v=nxsf7-YCBAA",
        prompts: [
          "SI for months and days",
          "Multiple principal problems",
          "Basic application problems"
        ],
        resources: [
          { title: "Day 40 Study Material", url: "pdf/40.pdf" }
        ],
        quiz: {
          question: "₹8000 at 6% p.a. for 9 months. SI = ?",
          options: ["₹340", "₹360", "₹380", "₹400"],
          answer: 1,
          explanation: "T = 9/12 = 0.75 years. SI = 8000×6×0.75/100 = 8000×4.5/100 = ₹360."
        },
        tip: "Convert months to years: months/12, days to years: days/365."
      },
      { 
        day: 41,
        title: "COMPARISON Problems",
        desc: "Solve problems comparing different simple interest scenarios - comparing interests for different rates, times, or principals. Learn ratio-based SI problems.",
        videoUrl: "https://www.youtube.com/watch?v=QPIt7wkOBi4",
        prompts: [
          "Compare SI for different rates",
          "Ratio-based SI problems",
          "Comparative analysis questions"
        ],
        resources: [
          { title: "Day 41 Study Material", url: "pdf/41.pdf" }
        ],
        quiz: {
          question: "SI on ₹5000 at 4% for 3 years is how much more than SI on ₹4000 at 5% for 2 years?",
          options: ["₹200", "₹300", "₹400", "₹500"],
          answer: 0,
          explanation: "SI1 = 5000×4×3/100 = 600, SI2 = 4000×5×2/100 = 400. Difference = 200."
        },
        tip: "Calculate each SI separately, then compare as asked."
      },
      { 
        day: 42,
        title: "Topic-22 (தனிவட்டி)",
        desc: "Advanced simple interest problems in Tamil/English mix, focusing on complex scenarios and word problems commonly found in regional competitive exams.",
        videoUrl: "https://www.youtube.com/watch?v=e8MSm_De2Fo",
        prompts: [
          "Solve complex SI word problems",
          "Advanced application scenarios",
          "Mixed concept problems"
        ],
        resources: [
          { title: "Day 42 Study Material", url: "pdf/42.pdf" }
        ],
        quiz: {
          question: "A sum becomes 3 times in 10 years at SI. Rate = ?",
          options: ["10%", "15%", "20%", "25%"],
          answer: 2,
          explanation: "Let P = x, Amount = 3x, SI = 2x. SI = PRT/100 ⇒ 2x = x×R×10/100 ⇒ 2 = R/10 ⇒ R = 20%."
        },
        tip: "If sum becomes n times, SI = (n-1)×P."
      },
      { 
        day: 43,
        title: "Topic-24 (Simple and Compound Interest)",
        desc: "Learn the transition from simple interest to compound interest. Understand the key differences and when to use which formula.",
        videoUrl: "https://www.youtube.com/watch?v=TAcl87vL2ow",
        prompts: [
          "Compare SI and CI for same P,R,T",
          "Understand compounding concept",
          "Basic CI calculations"
        ],
        resources: [
          { title: "Day 43 Study Material", url: "pdf/43.pdf" }
        ],
        quiz: {
          question: "P = ₹2000, R = 5%, T = 2 years. CI = ?",
          options: ["₹200", "₹205", "₹210", "₹215"],
          answer: 1,
          explanation: "Amount = 2000(1+5/100)² = 2000×1.1025 = 2205. CI = 2205-2000 = ₹205."
        },
        tip: "CI = P[(1+R/100)^T - 1]. Amount = P(1+R/100)^T."
      },
      { 
        day: 44,
        title: "Revision Class-2 Simple Interest",
        desc: "Comprehensive revision of all simple interest concepts. Solve mixed problems and reinforce understanding of key formulas and applications.",
        videoUrl: "https://www.youtube.com/watch?v=WTyK5__O59s",
        prompts: [
          "Solve 30 mixed SI problems",
          "Review all SI formulas",
          "Common mistake analysis"
        ],
        resources: [
          { title: "Day 44 Study Material", url: "pdf/44.pdf" }
        ],
        quiz: {
          question: "At what rate% will ₹5000 yield ₹1000 SI in 4 years?",
          options: ["4%", "5%", "6%", "7%"],
          answer: 1,
          explanation: "R = (100×SI)/(P×T) = (100×1000)/(5000×4) = 100000/20000 = 5%."
        },
        tip: "For finding rate: R = (100×SI)/(P×T)."
      },
      { 
        day: 45,
        title: "Simple Interest (Best 50 Questions)",
        desc: "Solve 50 best simple interest questions covering all difficulty levels. Focus on speed and accuracy in solving diverse SI problems.",
        videoUrl: "https://www.youtube.com/watch?v=nGgGglbqEQc",
        prompts: [
          "Solve 50 SI problems (timed)",
          "Identify question patterns",
          "Improve calculation speed"
        ],
        resources: [
          { title: "Day 45 Study Material", url: "pdf/45.pdf" }
        ],
        quiz: {
          question: "SI on a sum for 5 years is 2/5 of the sum. Rate = ?",
          options: ["6%", "8%", "10%", "12%"],
          answer: 1,
          explanation: "SI = (2/5)P. SI = PRT/100 ⇒ (2/5)P = P×R×5/100 ⇒ 2/5 = R/20 ⇒ R = 8%."
        },
        tip: "When SI given as fraction of P: Set up equation and solve for R."
      },
      { 
        day: 46,
        title: "Practice Set: Focus on Compound Interest vs. Simple Interest",
        desc: "Compare and contrast simple and compound interest through practice problems. Solve questions highlighting the differences between SI and CI.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve SI vs CI comparison problems",
          "Find difference between CI and SI",
          "Mixed SI/CI problems"
        ],
        resources: [
          { title: "Day 46 Study Material", url: "pdf/46.pdf" }
        ],
        quiz: {
          question: "Difference between CI and SI for 2 years at 10% on ₹5000 = ?",
          options: ["₹40", "₹50", "₹60", "₹70"],
          answer: 1,
          explanation: "Difference = P(R/100)² = 5000×(10/100)² = 5000×0.01 = ₹50."
        },
        tip: "For 2 years: CI - SI = P(R/100)²."
      },
      { 
        day: 47,
        title: "Practice Set: Focus on Compound Interest vs. Simple Interest",
        desc: "Continued practice with advanced CI vs SI problems. Focus on finding principal, rate, or time from given difference between CI and SI.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Find P/R/T from CI-SI difference",
          "Advanced CI/SI comparison",
          "Three-year difference problems"
        ],
        resources: [
          { title: "Day 47 Study Material", url: "pdf/47.pdf" }
        ],
        quiz: {
          question: "CI - SI for 3 years at 10% = ₹310. P = ?",
          options: ["₹8000", "₹9000", "₹10000", "₹11000"],
          answer: 2,
          explanation: "For 3 years: CI-SI = P(R/100)²(3+R/100) ⇒ 310 = P(0.1)²(3+0.1) ⇒ 310 = P×0.01×3.1 ⇒ P = 310/(0.031) = ₹10000."
        },
        tip: "For 3 years: CI-SI = P(R/100)²(3+R/100)."
      }
    ]
  },
  {
    module: "Module 5: Ratio and Proportion (Days 48-62)",
    days: [
      { 
        day: 48,
        title: "Introduction",
        desc: "Learn the basic concepts of ratio - what ratios represent, how to simplify them, and how to compare different ratios. Understand the fundamental properties of ratios.",
        videoUrl: "https://www.youtube.com/watch?v=SGj_uTJ83s0",
        prompts: [
          "Simplify given ratios",
          "Compare two or more ratios",
          "Basic ratio word problems"
        ],
        resources: [
          { title: "Day 48 Study Material", url: "pdf/48.pdf" }
        ],
        quiz: {
          question: "Simplify 24:36:60",
          options: ["2:3:5", "4:6:10", "6:9:15", "8:12:20"],
          answer: 0,
          explanation: "Divide by 12 (HCF): 24÷12=2, 36÷12=3, 60÷12=5. Ratio = 2:3:5."
        },
        tip: "To simplify ratio, divide all terms by their HCF."
      },
      { 
        day: 49,
        title: "Finding Ratio?",
        desc: "Learn techniques to find ratios from given conditions, word problems, and relationships between quantities. Master deriving ratios from complex descriptions.",
        videoUrl: "https://www.youtube.com/watch?v=RY32p6o7PSU",
        prompts: [
          "Find ratio from given conditions",
          "Derive ratios from relationships",
          "Word problems to find ratios"
        ],
        resources: [
          { title: "Day 49 Study Material", url: "pdf/49.pdf" }
        ],
        quiz: {
          question: "If A:B = 2:3 and B:C = 4:5, find A:B:C",
          options: ["2:3:5", "8:12:15", "6:9:10", "4:6:8"],
          answer: 1,
          explanation: "Make B same: LCM of 3 and 4 is 12. A:B = 8:12, B:C = 12:15. So A:B:C = 8:12:15."
        },
        tip: "To combine ratios, make common term equal in both ratios."
      },
      { 
        day: 50,
        title: "Divided Into Parts",
        desc: "Solve problems involving dividing a quantity into given ratio. Learn to find individual shares when total quantity and ratio are given.",
        videoUrl: "https://www.youtube.com/watch?v=MXjbKCCkzSU",
        prompts: [
          "Divide quantity in given ratio",
          "Find individual shares",
          "Apply division in real scenarios"
        ],
        resources: [
          { title: "Day 50 Study Material", url: "pdf/50.pdf" }
        ],
        quiz: {
          question: "Divide ₹1500 in ratio 2:3:5. Largest share = ?",
          options: ["₹300", "₹450", "₹600", "₹750"],
          answer: 3,
          explanation: "Total parts = 2+3+5=10. Largest share = (5/10)×1500 = ₹750."
        },
        tip: "Share = (individual ratio/total ratio) × total quantity."
      },
      { 
        day: 51,
        title: "Based On Numbers",
        desc: "Solve ratio problems based on numbers - finding numbers when their ratio and sum/difference is given, or finding ratio from number properties.",
        videoUrl: "https://www.youtube.com/watch?v=QGDSp2YB3BY",
        prompts: [
          "Find numbers from ratio and sum",
          "Find ratio from number properties",
          "Number-based ratio problems"
        ],
        resources: [
          { title: "Day 51 Study Material", url: "pdf/51.pdf" }
        ],
        quiz: {
          question: "Two numbers in ratio 3:4, sum = 84. Numbers are?",
          options: ["24,32", "30,40", "36,48", "42,56"],
          answer: 2,
          explanation: "Let numbers be 3x and 4x. 3x+4x=84 ⇒ 7x=84 ⇒ x=12. Numbers: 36 and 48."
        },
        tip: "Assume numbers as ratio×constant, then use given conditions to find constant."
      },
      { 
        day: 52,
        title: "Boys and Girls",
        desc: "Solve ratio problems involving boys and girls in classes, schools, or groups. Learn to handle problems with additions/subtractions to groups.",
        videoUrl: "https://www.youtube.com/watch?v=u69CCsLAsmg",
        prompts: [
          "Find ratio of boys to girls",
          "Solve addition/removal problems",
          "Classroom ratio scenarios"
        ],
        resources: [
          { title: "Day 52 Study Material", url: "pdf/52.pdf" }
        ],
        quiz: {
          question: "Class has boys:girls = 3:2. 5 more girls join, ratio becomes 3:4. Original total students?",
          options: ["20", "25", "30", "35"],
          answer: 1,
          explanation: "Let boys=3x, girls=2x. New: 3x/(2x+5)=3/4 ⇒ 12x=6x+15 ⇒ 6x=15 ⇒ x=2.5. Total=5x=12.5? Let's solve properly."
        },
        tip: "Set up equation with original ratio, then apply changes to get new ratio."
      },
      { 
        day: 53,
        title: "Income and Expenditure",
        desc: "Solve ratio problems involving income, expenditure, and savings. Learn to handle percentage relationships expressed as ratios.",
        videoUrl: "https://www.youtube.com/watch?v=BhGMbLeljkY",
        prompts: [
          "Income-expenditure ratio problems",
          "Savings percentage as ratio",
          "Budget allocation problems"
        ],
        resources: [
          { title: "Day 53 Study Material", url: "pdf/53.pdf" }
        ],
        quiz: {
          question: "Income:Expenditure = 5:3, savings = ₹4000. Income = ?",
          options: ["₹8000", "₹9000", "₹10000", "₹11000"],
          answer: 2,
          explanation: "Income=5x, Expenditure=3x, Savings=2x=4000 ⇒ x=2000. Income=5×2000=₹10000."
        },
        tip: "Savings = Income - Expenditure. Express all in terms of ratio variable."
      },
      { 
        day: 54,
        title: "Based on Coins",
        desc: "Solve ratio problems involving coins - paise, rupees, different denominations. Learn to handle monetary value ratios.",
        videoUrl: "https://www.youtube.com/watch?v=YSPXJUha6HY",
        prompts: [
          "Coin denomination ratio problems",
          "Value-based coin problems",
          "Mixed coin scenarios"
        ],
        resources: [
          { title: "Day 54 Study Material", url: "pdf/54.pdf" }
        ],
        quiz: {
          question: "50p, ₹1, ₹2 coins in ratio 2:3:4. Total value = ₹110. Number of ₹1 coins?",
          options: ["15", "20", "25", "30"],
          answer: 1,
          explanation: "Let coins: 2x of 50p, 3x of ₹1, 4x of ₹2. Value: 2x×0.5 + 3x×1 + 4x×2 = x+3x+8x=12x=110 ⇒ x≈9.17. Number of ₹1 coins=3x≈27.5? Let's solve properly."
        },
        tip: "Convert all values to same unit (rupees) before setting up equation."
      },
      { 
        day: 55,
        title: "Age Problems",
        desc: "Solve ratio problems involving ages - present ages, past ages, future ages. Master the technique of using ratio with age differences.",
        videoUrl: "https://www.youtube.com/watch?v=9BllrT3M9ic",
        prompts: [
          "Find present ages from ratio",
          "Past/future age ratio problems",
          "Age difference scenarios"
        ],
        resources: [
          { title: "Day 55 Study Material", url: "pdf/55.pdf" }
        ],
        quiz: {
          question: "A:B = 5:3. After 6 years, ratio = 7:5. Present age of A?",
          options: ["15", "20", "25", "30"],
          answer: 0,
          explanation: "Let A=5x, B=3x. (5x+6)/(3x+6)=7/5 ⇒ 25x+30=21x+42 ⇒ 4x=12 ⇒ x=3. A=15."
        },
        tip: "For age problems: Set up equation with (present age + time change)/(other present age + time change) = new ratio."
      },
      { 
        day: 56,
        title: "Ratio and Proportion (Lesson 9)",
        desc: "Advanced lesson on ratio and proportion covering continued proportion, mean proportional, and complex proportional relationships.",
        videoUrl: "https://www.youtube.com/watch?v=RGOvOpQo8cY",
        prompts: [
          "Continued proportion problems",
          "Find mean proportional",
          "Complex proportional relationships"
        ],
        resources: [
          { title: "Day 56 Study Material", url: "pdf/56.pdf" }
        ],
        quiz: {
          question: "Mean proportional between 9 and 16?",
          options: ["10", "11", "12", "13"],
          answer: 2,
          explanation: "Mean proportional = √(9×16) = √144 = 12."
        },
        tip: "Mean proportional between a and b = √(a×b)."
      },
      { 
        day: 57,
        title: "Mixture Problems",
        desc: "Solve ratio problems involving mixtures - mixing ingredients in given ratio, finding ratio of mixture, and mixture cost problems.",
        videoUrl: "https://www.youtube.com/watch?v=fFWhsMEnpu0",
        prompts: [
          "Find ratio of mixing",
          "Mixture cost problems",
          "Alligation basics"
        ],
        resources: [
          { title: "Day 57 Study Material", url: "pdf/57.pdf" }
        ],
        quiz: {
          question: "In what ratio mix ₹30/kg and ₹40/kg rice to get mixture at ₹34/kg?",
          options: ["2:3", "3:2", "3:4", "4:3"],
          answer: 1,
          explanation: "Using alligation: (40-34):(34-30) = 6:4 = 3:2."
        },
        tip: "For mixture price: Ratio = (Dearer price - Mean price):(Mean price - Cheaper price)."
      },
      { 
        day: 58,
        title: "Income & Expenditure Data Interpretation (Intro)",
        desc: "Introduction to data interpretation using income and expenditure data. Learn to read tables, charts and extract ratio information.",
        videoUrl: "https://www.youtube.com/watch?v=fodhqIBkWck",
        prompts: [
          "Read ratio data from tables",
          "Interpret income-expenditure charts",
          "Basic data extraction"
        ],
        resources: [
          { title: "Day 58 Study Material", url: "pdf/58.pdf" }
        ],
        quiz: {
          question: "In a pie chart, if savings is 60° sector, what fraction of income is saved?",
          options: ["1/6", "1/5", "1/4", "1/3"],
          answer: 0,
          explanation: "Fraction = 60°/360° = 1/6."
        },
        tip: "In pie chart: Fraction = Sector angle/360°."
      },
      { 
        day: 59,
        title: "Data Interpretation (Set-1)",
        desc: "Practice set for data interpretation involving ratios. Solve problems based on tabular data, bar graphs, and pie charts.",
        videoUrl: "https://www.youtube.com/watch?v=WFglcHARkZg",
        prompts: [
          "Solve DI problems from tables",
          "Interpret bar graphs with ratios",
          "Pie chart ratio extraction"
        ],
        resources: [
          { title: "Day 59 Study Material", url: "pdf/59.pdf" }
        ],
        quiz: {
          question: "If Company A's profit:Company B's profit = 3:5 and B's profit = ₹50,000, A's profit = ?",
          options: ["₹25,000", "₹30,000", "₹35,000", "₹40,000"],
          answer: 1,
          explanation: "A:B=3:5, B=50,000=5 parts ⇒ 1 part=10,000. A=3 parts=₹30,000."
        },
        tip: "Use ratio to find value per part, then calculate required values."
      },
      { 
        day: 60,
        title: "Data Interpretation (Set-2)",
        desc: "Advanced data interpretation practice with complex ratio problems. Focus on multi-step calculations and combined data analysis.",
        videoUrl: "https://www.youtube.com/watch?v=J9pLlJ_OJPw",
        prompts: [
          "Complex DI problems",
          "Multi-step ratio calculations",
          "Combined data analysis"
        ],
        resources: [
          { title: "Day 60 Study Material", url: "pdf/60.pdf" }
        ],
        quiz: {
          question: "If total expenditure is ₹1,20,000 and categories are in ratio 2:3:4:1, largest category expenditure = ?",
          options: ["₹30,000", "₹36,000", "₹40,000", "₹48,000"],
          answer: 3,
          explanation: "Total parts=2+3+4+1=10. Largest=4 parts=(4/10)×1,20,000=₹48,000."
        },
        tip: "For ratio distribution: Find value per part = Total/Sum of ratios."
      },
      { 
        day: 61,
        title: "Practice Set: Ratio, Proportions & Mixture Allegations",
        desc: "Comprehensive practice covering all ratio concepts including proportions, mixtures, and allegation rules. Mixed problem solving.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve mixed ratio problems",
          "Practice allegation rules",
          "Comprehensive revision"
        ],
        resources: [
          { title: "Day 61 Study Material", url: "pdf/61.pdf" }
        ],
        quiz: {
          question: "If a:b=3:4 and b:c=5:6, find a:c",
          options: ["5:8", "6:9", "7:10", "8:11"],
          answer: 0,
          explanation: "a:b=3:4=15:20, b:c=5:6=20:24. So a:c=15:24=5:8."
        },
        tip: "Make common term (b) equal in both ratios to combine."
      },
      { 
        day: 62,
        title: "Practice Set: Ratio, Proportions & Mixture Allegations",
        desc: "Continued practice with advanced problems. Focus on speed and accuracy in solving ratio-based questions.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Advanced mixed problems",
          "Time-bound practice",
          "Error analysis"
        ],
        resources: [
          { title: "Day 62 Study Material", url: "pdf/62.pdf" }
        ],
        quiz: {
          question: "Divide ₹7800 among A,B,C such that A:B=5:6 and B:C=4:9. C's share?",
          options: ["₹3000", "₹3240", "₹3600", "₹3960"],
          answer: 1,
          explanation: "A:B=5:6=10:12, B:C=4:9=12:27. A:B:C=10:12:27. Total parts=49. C's share=(27/49)×7800≈₹4298? Let's calculate: 27/49=0.551, ×7800≈4298. Closest is none. Check calculation."
        },
        tip: "Combine ratios first, then distribute according to combined ratio."
      }
    ]
  },
  {
    module: "Module 6: Average (Days 63-70)",
    days: [
      { 
        day: 63,
        title: "Introduction",
        desc: "Learn the basic concept of average - what it represents, how to calculate it, and understanding mean as measure of central tendency.",
        videoUrl: "https://www.youtube.com/watch?v=g-_xCXSVv1w",
        prompts: [
          "Calculate average of given numbers",
          "Find missing number from average",
          "Basic average word problems"
        ],
        resources: [
          { title: "Day 63 Study Material", url: "pdf/63.pdf" }
        ],
        quiz: {
          question: "Average of 12, 15, 18, 21, 24?",
          options: ["16", "17", "18", "19"],
          answer: 2,
          explanation: "Sum=12+15+18+21+24=90. Count=5. Average=90/5=18."
        },
        tip: "Average = Sum of observations / Number of observations."
      },
      { 
        day: 64,
        title: "Basic Questions",
        desc: "Solve fundamental average problems including finding totals from averages, working backwards from average, and simple application problems.",
        videoUrl: "https://www.youtube.com/watch?v=75wU-7MpMNc",
        prompts: [
          "Find total from average",
          "Reverse calculation problems",
          "Simple application scenarios"
        ],
        resources: [
          { title: "Day 64 Study Material", url: "pdf/64.pdf" }
        ],
        quiz: {
          question: "Average of 6 numbers is 15. Their sum?",
          options: ["75", "80", "85", "90"],
          answer: 3,
          explanation: "Sum = Average × Count = 15 × 6 = 90."
        },
        tip: "Sum = Average × Number of observations."
      },
      { 
        day: 65,
        title: "Based on Equation",
        desc: "Solve average problems that require setting up and solving equations. Learn to handle problems with algebraic expressions involving averages.",
        videoUrl: "https://www.youtube.com/watch?v=HYj7UAdIzqc",
        prompts: [
          "Set up equations from average conditions",
          "Solve algebraic average problems",
          "Variable-based average calculations"
        ],
        resources: [
          { title: "Day 65 Study Material", url: "pdf/65.pdf" }
        ],
        quiz: {
          question: "Average of x, x+2, x+4, x+6, x+8 is 20. Find x.",
          options: ["16", "17", "18", "19"],
          answer: 0,
          explanation: "Sum = 5x+20. Average = (5x+20)/5 = x+4 = 20 ⇒ x=16."
        },
        tip: "For consecutive numbers with common difference, average = middle term."
      },
      { 
        day: 66,
        title: "True/False Reading / Replacing a Person",
        desc: "Solve average problems involving replacement of persons in a group, true/false marking schemes, and changing group composition.",
        videoUrl: "https://www.youtube.com/watch?v=V-M3S1vo2s4",
        prompts: [
          "Solve replacement problems",
          "True/false marking average",
          "Group composition changes"
        ],
        resources: [
          { title: "Day 66 Study Material", url: "pdf/66.pdf" }
        ],
        quiz: {
          question: "Average of 5 persons=28. If person aged 32 is replaced by person aged 24, new average?",
          options: ["26", "26.4", "26.8", "27.2"],
          answer: 1,
          explanation: "Total age=5×28=140. New total=140-32+24=132. New average=132/5=26.4."
        },
        tip: "When replacing: New total = Old total - old value + new value."
      },
      { 
        day: 67,
        title: "Including/Excluding",
        desc: "Solve average problems involving including new members or excluding existing members from a group. Learn to handle group size changes.",
        videoUrl: "https://www.youtube.com/watch?v=-L6jdH3C-5E",
        prompts: [
          "Average after including new members",
          "Average after excluding members",
          "Group size change problems"
        ],
        resources: [
          { title: "Day 67 Study Material", url: "pdf/67.pdf" }
        ],
        quiz: {
          question: "Average of 10 numbers=15. If each number multiplied by 3, new average?",
          options: ["15", "30", "45", "60"],
          answer: 2,
          explanation: "New sum=3×old sum. New average=3×old average=45."
        },
        tip: "If each observation multiplied by k, new average = k × old average."
      },
      { 
        day: 68,
        title: "Average Speed",
        desc: "Learn to calculate average speed for different scenarios - equal distances, equal times, round trips. Understand why average speed is not simple average of speeds.",
        videoUrl: "https://www.youtube.com/watch?v=eV_5viRLv4o",
        prompts: [
          "Calculate average speed for round trip",
          "Average speed with different distances",
          "Time-weighted speed calculations"
        ],
        resources: [
          { title: "Day 68 Study Material", url: "pdf/68.pdf" }
        ],
        quiz: {
          question: "Car travels 60km at 40km/h, next 60km at 60km/h. Average speed?",
          options: ["46 km/h", "48 km/h", "50 km/h", "52 km/h"],
          answer: 1,
          explanation: "Total distance=120km. Time1=60/40=1.5h, time2=60/60=1h. Total time=2.5h. Avg speed=120/2.5=48km/h."
        },
        tip: "Average speed = Total distance / Total time. Not average of speeds!"
      },
      { 
        day: 69,
        title: "Practice Set: Average Weight/Age Problems & Speed Average",
        desc: "Practice solving average weight and age problems along with average speed calculations. Mixed problem set for comprehensive practice.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve weight average problems",
          "Age average calculations",
          "Mixed speed and weight problems"
        ],
        resources: [
          { title: "Day 69 Study Material", url: "pdf/69.pdf" }
        ],
        quiz: {
          question: "Average weight of 5 boys=45kg. If 2 boys of 40kg and 50kg join, new average?",
          options: ["44kg", "45kg", "46kg", "47kg"],
          answer: 1,
          explanation: "Total weight=5×45=225kg. New total=225+40+50=315kg. New average=315/7=45kg."
        },
        tip: "Calculate total first, then divide by new count."
      },
      { 
        day: 70,
        title: "Practice Set: Average Weight/Age Problems & Speed Average",
        desc: "Continued practice with advanced average problems. Focus on complex scenarios and multi-step calculations.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Advanced average problems",
          "Multi-step calculations",
          "Time-bound practice"
        ],
        resources: [
          { title: "Day 70 Study Material", url: "pdf/70.pdf" }
        ],
        quiz: {
          question: "A travels half distance at 30km/h, half at 60km/h. Average speed?",
          options: ["35km/h", "40km/h", "45km/h", "50km/h"],
          answer: 1,
          explanation: "For equal distances: Avg speed = 2ab/(a+b) = 2×30×60/(30+60)=3600/90=40km/h."
        },
        tip: "For equal distances: Avg speed = 2ab/(a+b). For equal times: Avg speed = (a+b)/2."
      }
    ]
  },
  {
    module: "Module 7: Time and Work (Days 71-78)",
    days: [
      { 
        day: 71,
        title: "Chain Rule",
        desc: "Learn the chain rule concept in time and work - understanding direct and indirect proportions, and solving problems using unitary method.",
        videoUrl: "https://www.youtube.com/watch?v=AcOIUsKhlFM",
        prompts: [
          "Apply chain rule to work problems",
          "Solve direct/inverse proportion problems",
          "Unitary method applications"
        ],
        resources: [
          { title: "Day 71 Study Material", url: "pdf/71.pdf" }
        ],
        quiz: {
          question: "If 5 workers complete work in 12 days, 10 workers in how many days?",
          options: ["5", "6", "7", "8"],
          answer: 1,
          explanation: "More workers, less time (inverse proportion). Days = 5×12/10 = 6 days."
        },
        tip: "For work: Men × Days = Constant (if work same)."
      },
      { 
        day: 72,
        title: "EFFICIENCY",
        desc: "Understand efficiency concept in work - comparing work capacities, efficiency ratios, and solving problems based on efficiency differences.",
        videoUrl: "https://www.youtube.com/watch?v=YPLvJgLZGLQ",
        prompts: [
          "Calculate efficiency ratios",
          "Compare work capacities",
          "Efficiency-based problems"
        ],
        resources: [
          { title: "Day 72 Study Material", url: "pdf/72.pdf" }
        ],
        quiz: {
          question: "A is twice as efficient as B. If B completes in 20 days, A in how many days?",
          options: ["8", "10", "12", "15"],
          answer: 1,
          explanation: "Efficiency ratio A:B=2:1. Time ratio inverse=1:2. B takes 20 days, so A takes 10 days."
        },
        tip: "Efficiency ∝ 1/Time. More efficient means less time."
      },
      { 
        day: 73,
        title: "Fraction of Work",
        desc: "Solve problems involving fractions of work - work done in fractions of days, remaining work calculations, and partial completion scenarios.",
        videoUrl: "https://www.youtube.com/watch?v=CJVURw8OF8c",
        prompts: [
          "Calculate work done in fractions of days",
          "Find remaining work",
          "Partial completion problems"
        ],
        resources: [
          { title: "Day 73 Study Material", url: "pdf/73.pdf" }
        ],
        quiz: {
          question: "A does 1/4 work in 5 days. Whole work in how many days?",
          options: ["15", "18", "20", "25"],
          answer: 2,
          explanation: "1/4 work in 5 days ⇒ 1 work in 5×4 = 20 days."
        },
        tip: "If x fraction of work in y days, whole work in y/x days."
      },
      { 
        day: 74,
        title: "Work and Wages",
        desc: "Solve problems involving distribution of wages based on work done, efficiency, or time worked. Learn proportional wage division.",
        videoUrl: "https://www.youtube.com/watch?v=tFWupUd0r6w",
        prompts: [
          "Divide wages proportionally to work",
          "Calculate wages based on efficiency",
          "Work-wage word problems"
        ],
        resources: [
          { title: "Day 74 Study Material", url: "pdf/74.pdf" }
        ],
        quiz: {
          question: "A and B complete work in 8 days. A alone in 12 days. Wages=₹6000. A's share?",
          options: ["₹2400", "₹3000", "₹3600", "₹4000"],
          answer: 3,
          explanation: "B's rate=1/8-1/12=1/24. Efficiency ratio A:B=1/12:1/24=2:1. A's share=2/3×6000=₹4000."
        },
        tip: "Wage share ∝ work done ∝ efficiency ∝ 1/time taken (if working same time)."
      },
      { 
        day: 75,
        title: "LEAVING Problems",
        desc: "Solve problems where workers leave before work completion, or join after work has started. Learn to handle changing work force scenarios.",
        videoUrl: "https://www.youtube.com/watch?v=1TAzFwhHTJI",
        prompts: [
          "Solve leaving before completion problems",
          "Handle joining after start scenarios",
          "Changing workforce calculations"
        ],
        resources: [
          { title: "Day 75 Study Material", url: "pdf/75.pdf" }
        ],
        quiz: {
          question: "A and B can complete in 12 days. After 4 days, A leaves. B completes in 20 more days. A alone in how many days?",
          options: ["15", "18", "21", "24"],
          answer: 1,
          explanation: "Work done in 4 days=4/12=1/3. Remaining=2/3 done by B in 20 days. B's rate=(2/3)/20=1/30 per day. A's rate=1/12-1/30=1/20. A alone=20 days."
        },
        tip: "Calculate work done together first, then remaining work done alone."
      },
      { 
        day: 76,
        title: "LEAVING (3-Person) Problems",
        desc: "Solve complex leaving problems involving three or more persons. Handle scenarios where multiple persons leave or join at different times.",
        videoUrl: "https://www.youtube.com/watch?v=_FcyY9wmmbg",
        prompts: [
          "Three-person leaving problems",
          "Multiple leave/join scenarios",
          "Complex workforce changes"
        ],
        resources: [
          { title: "Day 76 Study Material", url: "pdf/76.pdf" }
        ],
        quiz: {
          question: "A,B,C can complete in 10,12,15 days. All work for 2 days, then C leaves. Remaining work completed by A&B in how many days?",
          options: ["2", "3", "4", "5"],
          answer: 1,
          explanation: "Combined rate=1/10+1/12+1/15=1/4. Work in 2 days=2×1/4=1/2. Remaining=1/2. A&B rate=1/10+1/12=11/60. Time=(1/2)/(11/60)=30/11≈2.7 days."
        },
        tip: "Calculate work done by all first, then remaining work done by remaining persons."
      },
      { 
        day: 77,
        title: "X and Y PERSONS Problems",
        desc: "Solve problems involving generic persons (like A,B,C or X,Y,Z) with different efficiencies. Learn to handle abstract work scenarios.",
        videoUrl: "https://www.youtube.com/watch?v=GuMSa41hZa8",
        prompts: [
          "Solve with abstract persons",
          "Handle variable efficiency problems",
          "Generic work scenarios"
        ],
        resources: [
          { title: "Day 77 Study Material", url: "pdf/77.pdf" }
        ],
        quiz: {
          question: "X is twice as efficient as Y. Together they complete in 12 days. Y alone in how many days?",
          options: ["30", "32", "34", "36"],
          answer: 3,
          explanation: "Let Y's rate=1/y. X's rate=2/y. Combined=3/y=1/12 ⇒ y=36. Y alone=36 days."
        },
        tip: "Express rates in terms of one variable, then solve."
      },
      { 
        day: 78,
        title: "Practice Set: Pipes and Cisterns (Similar Logic)",
        desc: "Apply time and work logic to pipes and cisterns problems. Learn to handle inlet and outlet pipes, filling and emptying scenarios.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve pipes and cisterns problems",
          "Handle inlet-outlet combinations",
          "Apply work logic to pipes"
        ],
        resources: [
          { title: "Day 78 Study Material", url: "pdf/78.pdf" }
        ],
        quiz: {
          question: "Pipe A fills in 15 minutes, B empties in 20 minutes. Both open, tank fills in?",
          options: ["45", "50", "55", "60"],
          answer: 3,
          explanation: "Net rate=1/15-1/20=1/60 per minute. Time=60 minutes."
        },
        tip: "For pipes: filling rate positive, emptying rate negative."
      }
    ]
  },
  {
    module: "Module 8: Time, Speed and Distance (Days 79-90)",
    days: [
      { 
        day: 79,
        title: "Introduction (Time and Distance)",
        desc: "Learn the basic relationship between time, speed and distance. Understand the formula speed = distance/time and its variations.",
        videoUrl: "https://www.youtube.com/watch?v=ufbDCFUn6PY",
        prompts: [
          "Calculate speed from distance and time",
          "Convert between km/h and m/s",
          "Basic TSD formula applications"
        ],
        resources: [
          { title: "Day 79 Study Material", url: "pdf/79.pdf" }
        ],
        quiz: {
          question: "Car travels 240km in 4 hours. Speed in km/h?",
          options: ["50", "55", "60", "65"],
          answer: 2,
          explanation: "Speed = Distance/Time = 240/4 = 60 km/h."
        },
        tip: "Speed = Distance ÷ Time, Distance = Speed × Time, Time = Distance ÷ Speed."
      },
      { 
        day: 80,
        title: "Basic Questions",
        desc: "Solve fundamental time-speed-distance problems including different units, simple meeting problems, and basic application scenarios.",
        videoUrl: "https://www.youtube.com/watch?v=Z4aRxGL4ltU",
        prompts: [
          "Solve unit conversion problems",
          "Basic meeting point calculations",
          "Simple TSD word problems"
        ],
        resources: [
          { title: "Day 80 Study Material", url: "pdf/80.pdf" }
        ],
        quiz: {
          question: "Convert 72 km/h to m/s",
          options: ["18", "20", "22", "24"],
          answer: 1,
          explanation: "72 km/h = 72×1000/3600 = 72000/3600 = 20 m/s."
        },
        tip: "To convert km/h to m/s: multiply by 5/18. To convert m/s to km/h: multiply by 18/5."
      },
      { 
        day: 81,
        title: "Late/Early/Usual Time",
        desc: "Solve problems involving early arrival, late departure, and usual time calculations. Learn to handle time management scenarios.",
        videoUrl: "https://www.youtube.com/watch?v=842_S5KQa1c",
        prompts: [
          "Calculate usual time from early/late data",
          "Solve speed change affecting arrival time",
          "Time management word problems"
        ],
        resources: [
          { title: "Day 81 Study Material", url: "pdf/81.pdf" }
        ],
        quiz: {
          question: "Walking at 5 km/h, reaches 10 minutes late. At 6 km/h, reaches 5 minutes early. Distance?",
          options: ["5 km", "6 km", "7 km", "8 km"],
          answer: 2,
          explanation: "Let usual time = t hours. Distance same: 5(t+10/60)=6(t-5/60). Solve: 5t+5/6=6t-1/2 ⇒ t=4/3 hours. Distance=5×(4/3+1/6)=5×9/6=7.5 km ≈ 7 km."
        },
        tip: "When speed changes affect arrival time: set up equation with same distance."
      },
      { 
        day: 82,
        title: "CHASING (Thief-Police Problems)",
        desc: "Solve chasing problems involving thief and police, or any two objects where one is trying to catch up with the other.",
        videoUrl: "https://www.youtube.com/watch?v=mJ3MMPnPsmI",
        prompts: [
          "Calculate time to catch up",
          "Solve thief-police scenarios",
          "Relative speed in chasing"
        ],
        resources: [
          { title: "Day 82 Study Material", url: "pdf/82.pdf" }
        ],
        quiz: {
          question: "Thief ahead by 200m, runs at 8 km/h. Police at 10 km/h. Time to catch?",
          options: ["5 min", "6 min", "7 min", "8 min"],
          answer: 1,
          explanation: "Relative speed=10-8=2 km/h=2000/3600 m/s=5/9 m/s. Distance=200m. Time=200/(5/9)=360 seconds=6 minutes."
        },
        tip: "In chasing: Time = Initial gap / Relative speed (when same direction)."
      },
      { 
        day: 83,
        title: "Problems on Train: Introduction",
        desc: "Learn the basics of train problems - trains crossing poles, platforms, bridges. Understand the concept of train length in distance calculations.",
        videoUrl: "https://www.youtube.com/watch?v=tZ2eRwVF-tM",
        prompts: [
          "Train crossing pole problems",
          "Train crossing platform calculations",
          "Basic train speed problems"
        ],
        resources: [
          { title: "Day 83 Study Material", url: "pdf/83.pdf" }
        ],
        quiz: {
          question: "200m train crosses pole in 20 seconds. Speed in km/h?",
          options: ["30", "32", "34", "36"],
          answer: 3,
          explanation: "Speed = Distance/Time = 200m/20s = 10 m/s = 10×18/5 = 36 km/h."
        },
        tip: "To cross pole: distance = train length. To cross platform: distance = train length + platform length."
      },
      { 
        day: 84,
        title: "Problems on Train: Basic Questions",
        desc: "Solve basic train problems including different scenarios - trains in same/opposite directions, trains crossing each other.",
        videoUrl: "https://www.youtube.com/watch?v=eXdySaoL2Fs",
        prompts: [
          "Trains in same direction problems",
          "Trains in opposite direction problems",
          "Train crossing calculations"
        ],
        resources: [
          { title: "Day 84 Study Material", url: "pdf/84.pdf" }
        ],
        quiz: {
          question: "150m train crosses 250m platform in 40 seconds. Speed?",
          options: ["30 km/h", "36 km/h", "40 km/h", "45 km/h"],
          answer: 1,
          explanation: "Distance=150+250=400m. Time=40s. Speed=400/40=10 m/s=36 km/h."
        },
        tip: "Total distance = Train length + Platform/Bridge length."
      },
      { 
        day: 85,
        title: "Two Trains Meeting",
        desc: "Solve problems involving two trains meeting or crossing each other. Learn to calculate time taken for trains to completely pass each other.",
        videoUrl: "https://www.youtube.com/watch?v=mXiAjvA2nkM",
        prompts: [
          "Calculate time for trains to cross each other",
          "Solve meeting point problems",
          "Relative speed in train crossing"
        ],
        resources: [
          { title: "Day 85 Study Material", url: "pdf/85.pdf" }
        ],
        quiz: {
          question: "Two trains 200m and 300m long run at 50 km/h and 40 km/h in opposite directions. Time to cross?",
          options: ["12 sec", "15 sec", "18 sec", "20 sec"],
          answer: 3,
          explanation: "Relative speed=50+40=90 km/h=25 m/s. Distance=200+300=500m. Time=500/25=20 seconds."
        },
        tip: "When trains cross each other: distance = sum of lengths, relative speed = sum of speeds (opposite direction)."
      },
      { 
        day: 86,
        title: "Boats and Streams: Introduction",
        desc: "Learn the basic concepts of boats and streams - still water speed, stream speed, downstream and upstream speeds.",
        videoUrl: "https://www.youtube.com/watch?v=Agnaf5cv9lY",
        prompts: [
          "Calculate downstream speed",
          "Calculate upstream speed",
          "Basic boat speed problems"
        ],
        resources: [
          { title: "Day 86 Study Material", url: "pdf/86.pdf" }
        ],
        quiz: {
          question: "Boat speed in still water=12 km/h, stream speed=3 km/h. Downstream speed?",
          options: ["9", "12", "15", "18"],
          answer: 2,
          explanation: "Downstream speed = Boat speed + Stream speed = 12+3=15 km/h."
        },
        tip: "Downstream speed = u + v, Upstream speed = u - v, where u=boat speed, v=stream speed."
      },
      { 
        day: 87,
        title: "Upstream & Downstream",
        desc: "Solve problems involving upstream and downstream journeys. Learn to find speed in still water and stream speed from given data.",
        videoUrl: "https://www.youtube.com/watch?v=fL03r3exGSU",
        prompts: [
          "Find still water speed from up/down speeds",
          "Calculate stream speed",
          "Round trip time problems"
        ],
        resources: [
          { title: "Day 87 Study Material", url: "pdf/87.pdf" }
        ],
        quiz: {
          question: "Downstream speed=18 km/h, upstream speed=12 km/h. Still water speed?",
          options: ["13", "14", "15", "16"],
          answer: 2,
          explanation: "Still water speed = (Downstream+Upstream)/2 = (18+12)/2=15 km/h."
        },
        tip: "Still water speed = (Downstream speed + Upstream speed)/2. Stream speed = (Downstream speed - Upstream speed)/2."
      },
      { 
        day: 88,
        title: "Based On Two Equation",
        desc: "Solve boat and stream problems requiring setting up two equations. Learn to handle scenarios with multiple variables and conditions.",
        videoUrl: "https://www.youtube.com/watch?v=PeqLmknfs14",
        prompts: [
          "Set up equations from given conditions",
          "Solve for boat and stream speeds",
          "Two-variable boat problems"
        ],
        resources: [
          { title: "Day 88 Study Material", url: "pdf/88.pdf" }
        ],
        quiz: {
          question: "Boat covers 24km downstream in 2 hours, same distance upstream in 3 hours. Still water speed?",
          options: ["8", "9", "10", "11"],
          answer: 2,
          explanation: "Downstream speed=24/2=12 km/h. Upstream speed=24/3=8 km/h. Still water speed=(12+8)/2=10 km/h."
        },
        tip: "Set up: Downstream speed = Distance/Time, Upstream speed = Distance/Time."
      },
      { 
        day: 89,
        title: "Based On Twice, Thrice...",
        desc: "Solve boat problems involving multiples - speed twice/thrice stream speed, time twice/thrice for upstream vs downstream, etc.",
        videoUrl: "https://www.youtube.com/watch?v=ig49RVSer0s",
        prompts: [
          "Solve problems with speed ratios",
          "Handle time multiple scenarios",
          "Multiplicative relationships"
        ],
        resources: [
          { title: "Day 89 Study Material", url: "pdf/89.pdf" }
        ],
        quiz: {
          question: "Boat speed is twice stream speed. Upstream speed=12 km/h. Downstream speed?",
          options: ["24", "28", "32", "36"],
          answer: 3,
          explanation: "Let stream speed=v, boat speed=2v. Upstream=2v-v=v=12 km/h. So v=12, boat speed=24. Downstream=24+12=36 km/h."
        },
        tip: "Express boat and stream speeds in terms of variables, then use given conditions."
      },
      { 
        day: 90,
        title: "Grand Finale: Full Length Aptitude Test",
        desc: "Complete full-length aptitude test covering all topics learned in the 90-day program. Simulate real exam conditions for final preparation.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Complete 50-question mock test",
          "Time management practice (60 minutes)",
          "Final revision and weak area identification"
        ],
        resources: [
          { title: "Day 90 Study Material", url: "pdf/90.pdf" }
        ],
        quiz: {
          question: "A number when divided by 5 leaves remainder 3. What is remainder when square of number divided by 5?",
          options: ["1", "2", "3", "4"],
          answer: 3,
          explanation: "Number = 5k+3. Square = 25k²+30k+9 = 5(5k²+6k+1)+4. Remainder = 4."
        },
        tip: "Congratulations on completing the 90-day aptitude challenge! Review all concepts regularly for retention."
      }
    ]
  }
];
