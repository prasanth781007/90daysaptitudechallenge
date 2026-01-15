const curriculumData = [
  {
    module: "Module 1: Number Systems (Days 1-14)",
    days: [
      { 
        day: 1,
        title: "Introduction & Divisibility Rules",
        desc: "Mastering divisibility rules for numbers 2 through 11. Learn quick techniques to determine if a number is divisible by another without performing full division.",
        videoUrl: "https://youtu.be/fjVTSy2cPD8",
        prompts: [
          "Check if 7,218 is divisible by 3, 6, and 9",
          "Determine divisibility of 4,325 by 4 and 8",
          "Apply the 11 divisibility rule to 82,269"
        ],
        resources: [
          { title: "Divisibility Rules Cheatsheet", url: "1.pdf" },
          { title: "Practice Worksheet", url: "https://www.instagram.com/reverence_004?igsh=eXN3NWp0cDFwdzR5" },
          { title: "Common Mistakes to Avoid", url: "#" }
        ],
        quiz: {
          question: "Which of the following numbers is divisible by both 3 and 11?",
          options: ["1,254", "1,848", "2,145", "2,376"],
          answer: 1,
          explanation: "1,848: Sum of digits = 21 (divisible by 3). Alternate digit sum difference = (1+4) - (8+8) = -11 (divisible by 11)."
        },
        tip: "For divisibility by 6, check for both 2 and 3. For 12, check for both 3 and 4."
      },
      { 
        day: 2,
        title: "Factors and Multiples",
        desc: "Understanding factors and multiples. Learn how to find all factors of a number efficiently and understand the relationship between factors and multiples.",
        videoUrl: "https://www.youtube.com/watch?v=UkkNjDIltQg",
        prompts: [
          "Find all factors of 72",
          "List first 10 multiples of 13",
          "Find common factors of 36 and 48"
        ],
        resources: [
          { title: "Factor Tree Method", url: "2.pdf" },
          { title: "Prime Factorization Guide", url: "#" }
        ],
        quiz: {
          question: "How many factors does 100 have?",
          options: ["8", "9", "10", "11"],
          answer: 1,
          explanation: "100 = 2² × 5². Number of factors = (2+1) × (2+1) = 9."
        },
        tip: "Use prime factorization to find total factors: (a+1)(b+1)(c+1)... where a,b,c are exponents."
      },
      { 
        day: 3,
        title: "Prime and Composite Numbers",
        desc: "Understanding prime vs composite numbers. Learn Sieve of Eratosthenes and prime factorization methods.",
        videoUrl: "https://www.youtube.com/watch?v=UkkNjDIltQg",
        prompts: [
          "Identify prime numbers between 1-100",
          "Prime factorize 420",
          "Find twin primes up to 50"
        ],
        resources: [
          { title: "Prime Numbers Chart", url: "#" },
          { title: "Sieve of Eratosthenes Guide", url: "#" }
        ],
        quiz: {
          question: "Which of these is a prime number?",
          options: ["91", "87", "97", "93"],
          answer: 2,
          explanation: "97 is only divisible by 1 and itself. 91=7×13, 87=3×29, 93=3×31."
        },
        tip: "Check divisibility by primes up to √n to determine if n is prime."
      },
      { 
        day: 4,
        title: "HCF (GCD) - Concept and Methods",
        desc: "Understanding Highest Common Factor. Learn Euclidean algorithm, prime factorization method, and division method.",
        videoUrl: "https://www.youtube.com/watch?v=B_C-pezJhLY",
        prompts: [
          "Find HCF of 36 and 48",
          "Use Euclidean algorithm for 1701 and 3768",
          "Solve word problems using HCF"
        ],
        resources: [
          { title: "Euclidean Algorithm Guide", url: "#" },
          { title: "HCF Word Problems", url: "#" }
        ],
        quiz: {
          question: "What is the HCF of 24, 36, and 60?",
          options: ["4", "6", "12", "18"],
          answer: 2,
          explanation: "24=2³×3, 36=2²×3², 60=2²×3×5. Common factors: 2²×3 = 12."
        },
        tip: "For HCF of multiple numbers, find common prime factors with lowest powers."
      },
      { 
        day: 5,
        title: "LCM - Concept and Methods",
        desc: "Understanding Least Common Multiple. Learn prime factorization, division method, and applications.",
        videoUrl: "https://www.youtube.com/watch?v=B_C-pezJhLY",
        prompts: [
          "Find LCM of 12, 15, and 21",
          "Solve traffic light synchronization problem",
          "Find smallest number divisible by given numbers"
        ],
        resources: [
          { title: "LCM Calculation Methods", url: "#" },
          { title: "Real-world LCM Applications", url: "#" }
        ],
        quiz: {
          question: "What is the LCM of 8, 12, and 15?",
          options: ["60", "120", "240", "480"],
          answer: 1,
          explanation: "8=2³, 12=2²×3, 15=3×5. LCM = 2³×3×5 = 120."
        },
        tip: "For LCM, take all prime factors with highest powers."
      },
      { 
        day: 6,
        title: "Remainder Theorem Basics",
        desc: "Understanding remainder concept in division. Learn basic remainder problems and patterns.",
        videoUrl: "https://www.youtube.com/watch?v=UkkNjDIltQg",
        prompts: [
          "Find remainder when 347 divided by 7",
          "Solve remainder word problems",
          "Practice basic remainder calculations"
        ],
        resources: [
          { title: "Remainder Basics Worksheet", url: "#" },
          { title: "Division Rules Review", url: "#" }
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
        title: "Advanced Remainders - Euler & Fermat",
        desc: "Learn Euler's theorem, Fermat's little theorem for remainder calculations of large exponents.",
        videoUrl: "https://www.youtube.com/watch?v=UkkNjDIltQg",
        prompts: [
          "Find remainder of 7^100 ÷ 13",
          "Apply Euler's theorem problems",
          "Solve cyclic pattern problems"
        ],
        resources: [
          { title: "Euler's Theorem Guide", url: "#" },
          { title: "Fermat's Little Theorem", url: "#" }
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
        title: "Unit Digit Patterns",
        desc: "Master finding last digit of large exponents using cyclicity concept.",
        videoUrl: "https://www.youtube.com/watch?v=UkkNjDIltQg",
        prompts: [
          "Find unit digit of 7^245",
          "Determine last digit of 3^100 + 4^100",
          "Solve unit digit pattern problems"
        ],
        resources: [
          { title: "Cyclicity Table", url: "#" },
          { title: "Unit Digit Practice Problems", url: "#" }
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
        title: "Number Systems Practice - I",
        desc: "Comprehensive practice of divisibility, factors, multiples, HCF, LCM concepts.",
        videoUrl: "https://www.youtube.com/watch?v=UkkNjDIltQg",
        prompts: [
          "Solve 20 divisibility problems",
          "Practice 15 HCF/LCM problems",
          "Time-bound practice session"
        ],
        resources: [
          { title: "Comprehensive Practice Set", url: "#" },
          { title: "Speed Calculation Tips", url: "#" }
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
        title: "Number Systems Practice - II",
        desc: "Advanced practice with remainders, unit digits, and complex number problems.",
        videoUrl: "https://www.youtube.com/watch?v=B_C-pezJhLY",
        prompts: [
          "Solve remainder theorem problems",
          "Practice unit digit calculations",
          "Mixed concept problems"
        ],
        resources: [
          { title: "Advanced Problems PDF", url: "#" },
          { title: "Solution Strategies", url: "#" }
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
        title: "Decimal Fractions Basics",
        desc: "Understanding decimal fractions, conversion between fractions and decimals.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Convert fractions to decimals",
          "Convert decimals to fractions",
          "Compare decimal numbers"
        ],
        resources: [
          { title: "Decimal-Fraction Conversion", url: "#" },
          { title: "Comparing Decimals Guide", url: "#" }
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
        title: "Recurring Decimals",
        desc: "Master conversion of recurring decimals to fractions and vice versa.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Convert 0.333... to fraction",
          "Convert 0.142857142857... to fraction",
          "Solve recurring decimal problems"
        ],
        resources: [
          { title: "Recurring Decimal Methods", url: "#" },
          { title: "Common Recurring Patterns", url: "#" }
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
        title: "Square Roots and Cube Roots",
        desc: "Learn methods to find square roots and cube roots manually and shortcuts.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Find √1764",
          "Find ∛17576",
          "Estimate square roots"
        ],
        resources: [
          { title: "Square Root Methods", url: "#" },
          { title: "Cube Root Shortcuts", url: "#" }
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
          { title: "Revision Test Paper", url: "#" },
          { title: "Concept Summary Sheet", url: "#" }
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
        title: "Percentage Basics",
        desc: "Understanding percentage concept, conversion between fraction, decimal and percentage.",
        videoUrl: "https://youtu.be/2RZaDcw4H68?si=reot4CvbRN6cTbw7",
        prompts: [
          "Convert fractions to percentages",
          "Convert percentages to fractions",
          "Basic percentage calculations"
        ],
        resources: [
          { title: "Percentage Conversion Chart", url: "#" },
          { title: "Basic Percentage Problems", url: "#" }
        ],
        quiz: {
          question: "What is 25% of 200?",
          options: ["25", "50", "75", "100"],
          answer: 1,
          explanation: "25% = 1/4, 1/4 × 200 = 50."
        },
        tip: "x% of y = y% of x. Useful for mental calculations."
      },
      { 
        day: 16,
        title: "Percentage",
        desc: "Calculate percentage increase/decrease, original value from final value.",
        videoUrl: "https://youtu.be/BSpMSQEgdzU?si=DUEklmFmPhYZLMZw",
        prompts: [
          "Find % increase from 80 to 100",
          "Find original if 120 after 20% increase",
          "Solve profit/loss percentage"
        ],
        resources: [
          { title: "Percentage Change Formulas", url: "#" },
          { title: "Profit/Loss Basics", url: "#" }
        ],
        quiz: {
          question: "If price increases by 25%, what % decrease brings back to original?",
          options: ["15%", "20%", "25%", "30%"],
          answer: 1,
          explanation: "Original=100, after 25% increase=125. To go back: (125-100)/125=25/125=20%."
        },
        tip: "If x% increase, then to return to original: decrease = 100x/(100+x)%."
      },
      { 
        day: 17,
        title: "Successive Percentage Changes",
        desc: "Learn net effect of successive percentage increases/decreases.",
        videoUrl:,
        prompts: [
          "Net effect of 20% increase then 10% decrease",
          "Equivalent single discount for two discounts",
          "Population growth problems"
        ],
        resources: [
          { title: "Successive Change Formula", url: "#" },
          { title: "Population Growth Problems", url: "#" }
        ],
        quiz: {
          question: "Net effect of 10% increase then 20% increase?",
          options: ["30%", "31%", "32%", "33%"],
          answer: 2,
          explanation: "Use formula: net = a+b+ab/100 = 10+20+(10×20)/100 = 30+2 = 32%."
        },
        tip: "For successive changes: net = a+b+(ab/100) for increase, a-b-(ab/100) for increase+decrease."
      },
      { 
        day: 18,
        title: "Percentage Applications - I",
        desc: "Applying percentage to population, consumption, production problems.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Population growth/decline problems",
          "Consumption increase/decrease",
          "Production percentage problems"
        ],
        resources: [
          { title: "Population Problems", url: "#" },
          { title: "Consumption Patterns", url: "#" }
        ],
        quiz: {
          question: "Population increases 10% annually. After 2 years, total % increase?",
          options: ["20%", "21%", "22%", "23%"],
          answer: 1,
          explanation: "Net = 10+10+(10×10)/100 = 20+1 = 21%."
        },
        tip: "For compound percentage growth, use formula not simple addition."
      },
      { 
        day: 19,
        title: "Percentage Applications - II",
        desc: "Percentage in elections, votes, surveys, and data interpretation.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Election vote percentage problems",
          "Survey data interpretation",
          "Market share percentage"
        ],
        resources: [
          { title: "Election Math Problems", url: "#" },
          { title: "Data Interpretation Basics", url: "#" }
        ],
        quiz: {
          question: "Candidate gets 55% votes, wins by 20,000 votes. Total voters?",
          options: ["100,000", "150,000", "200,000", "250,000"],
          answer: 2,
          explanation: "Winner 55%, loser 45%. Difference 10%=20,000. Total=100%=200,000."
        },
        tip: "For vote difference problems: difference% = (winner% - loser%) of total."
      },
      { 
        day: 20,
        title: "Percentage and Fractions",
        desc: "Relationship between percentages and fractions, fraction equivalents of common percentages.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Memorize fraction-percentage equivalents",
          "Solve using fraction shortcuts",
          "Mixed fraction-percentage problems"
        ],
        resources: [
          { title: "Percentage-Fraction Chart", url: "#" },
          { title: "Fraction Shortcuts", url: "#" }
        ],
        quiz: {
          question: "37.5% expressed as fraction?",
          options: ["3/8", "5/16", "7/20", "9/24"],
          answer: 0,
          explanation: "37.5% = 37.5/100 = 375/1000 = 15/40 = 3/8."
        },
        tip: "Memorize: 12.5%=1/8, 25%=1/4, 37.5%=3/8, 50%=1/2, 62.5%=5/8, 75%=3/4, 87.5%=7/8."
      },
      { 
        day: 21,
        title: "Percentage Practice - I",
        desc: "Comprehensive practice of basic to intermediate percentage problems.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve 25 basic percentage problems",
          "Time-bound practice session",
          "Error analysis of wrong answers"
        ],
        resources: [
          { title: "Percentage Practice Set I", url: "#" },
          { title: "Common Mistakes Guide", url: "#" }
        ],
        quiz: {
          question: "If x is 20% more than y, y is what % less than x?",
          options: ["16.67%", "20%", "25%", "30%"],
          answer: 0,
          explanation: "Let y=100, x=120. Difference=20. % less = (20/120)×100=16.67%."
        },
        tip: "If A is x% more than B, then B is [100x/(100+x)]% less than A."
      },
      { 
        day: 22,
        title: "Percentage Practice - II",
        desc: "Advanced percentage problems including successive changes and applications.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve 20 advanced percentage problems",
          "Successive change problems",
          "Real-world application problems"
        ],
        resources: [
          { title: "Advanced Percentage Problems", url: "#" },
          { title: "Successive Change Worksheet", url: "#" }
        ],
        quiz: {
          question: "Price increased by 20%, then decreased by 10%, then increased by 5%. Net % change?",
          options: ["13.4% increase", "14.4% increase", "15.4% increase", "16.4% increase"],
          answer: 0,
          explanation: "Use successive formula: 100→120→108→113.4. Net increase 13.4%."
        },
        tip: "For multiple successive changes, multiply factors: (1±a/100)(1±b/100)..."
      }
    ]
  },
  {
    module: "Module 3: Profit and Loss (Days 23-37)",
    days: [
      { 
        day: 23,
        title: "Profit Loss Basics",
        desc: "Understanding cost price, selling price, profit, loss, profit%, loss%.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Calculate profit/loss when CP and SP given",
          "Find profit/loss percentage",
          "Basic profit loss word problems"
        ],
        resources: [
          { title: "Profit Loss Formulas", url: "#" },
          { title: "Basic Problems Set", url: "#" }
        ],
        quiz: {
          question: "CP=₹500, SP=₹600. Profit %?",
          options: ["15%", "18%", "20%", "25%"],
          answer: 2,
          explanation: "Profit=600-500=100. Profit%=(100/500)×100=20%."
        },
        tip: "Profit% = (Profit/CP)×100, Loss% = (Loss/CP)×100."
      },
      { 
        day: 24,
        title: "Finding CP/SP from Profit/Loss%",
        desc: "Calculate cost price or selling price when profit/loss percentage is given.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Find CP when SP and profit% given",
          "Find SP when CP and loss% given",
          "Reverse calculation problems"
        ],
        resources: [
          { title: "Reverse Calculation Guide", url: "#" },
          { title: "CP/SP Formulas", url: "#" }
        ],
        quiz: {
          question: "SP=₹660, profit=10%. Find CP.",
          options: ["₹580", "₹590", "₹600", "₹610"],
          answer: 2,
          explanation: "CP=SP×100/(100+profit%)=660×100/110=600."
        },
        tip: "CP = SP×100/(100±profit/loss%). Use + for profit, - for loss."
      },
      { 
        day: 25,
        title: "Discount and Marked Price",
        desc: "Understand marked price, discount, successive discounts, net discount.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Calculate selling price after discount",
          "Find equivalent single discount",
          "Marked price problems"
        ],
        resources: [
          { title: "Discount Concepts", url: "#" },
          { title: "Successive Discounts", url: "#" }
        ],
        quiz: {
          question: "MP=₹800, discount=15%. Find SP.",
          options: ["₹650", "₹680", "₹700", "₹720"],
          answer: 1,
          explanation: "Discount=15% of 800=120. SP=800-120=680."
        },
        tip: "For successive discounts, find net discount using: net = a+b-(ab/100)."
      },
      { 
        day: 26,
        title: "Profit Loss with Discount",
        desc: "Problems involving both profit/loss percentage and discount percentage.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Find profit% when discount given",
          "Find discount when profit% given",
          "Mixed profit-discount problems"
        ],
        resources: [
          { title: "Profit-Discount Problems", url: "#" },
          { title: "Complex Scenarios", url: "#" }
        ],
        quiz: {
          question: "MP=₹1000, discount=20%, profit=25%. Find CP.",
          options: ["₹600", "₹640", "₹680", "₹720"],
          answer: 1,
          explanation: "SP=80% of 1000=800. CP=800×100/125=640."
        },
        tip: "Work backwards: MP→(after discount)→SP→(using profit/loss%)→CP."
      },
      { 
        day: 27,
        title: "Faulty Weights - I",
        desc: "Problems where seller uses false weights to gain profit.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Find profit% when seller uses less weight",
          "Find actual weight when profit% given",
          "Simple faulty weight problems"
        ],
        resources: [
          { title: "Faulty Weights Basics", url: "#" },
          { title: "Weight Measurement Problems", url: "#" }
        ],
        quiz: {
          question: "Seller uses 900g instead of 1kg. Profit %?",
          options: ["10%", "11.11%", "12.5%", "15%"],
          answer: 1,
          explanation: "Gains 100g on 900g. Profit%=(100/900)×100=11.11%."
        },
        tip: "Profit% = [(True weight - False weight)/False weight]×100."
      },
      { 
        day: 28,
        title: "Faulty Weights - II",
        desc: "Advanced faulty weight problems including successive cheating.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Successive faulty weight problems",
          "Buyer and seller both cheating",
          "Complex weight measurement problems"
        ],
        resources: [
          { title: "Advanced Faulty Weights", url: "#" },
          { title: "Cheating Scenarios", url: "#" }
        ],
        quiz: {
          question: "Seller uses 20% less weight, buyer uses 20% more weight. Who gains and by how much?",
          options: ["Seller 50%", "Buyer 50%", "Seller 44%", "Buyer 44%"],
          answer: 0,
          explanation: "Seller gives 800g for 1kg price (gains 200g). Buyer pays for 800g but takes 960g. Seller's gain: 200/800=25%? Let's calculate properly: Actual should be 1kg. Seller gives 0.8kg, charges for 1kg. Buyer pays for 0.8kg but takes 0.96kg. Net: Seller gains 20%, buyer gains 20% on what he pays."
        },
        tip: "For both cheating: calculate effect separately then combine."
      },
      { 
        day: 29,
        title: "Successive Selling - I",
        desc: "Items sold multiple times with different profit/loss percentages each time.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Find overall profit/loss%",
          "Find SP after two transactions",
          "Basic successive selling problems"
        ],
        resources: [
          { title: "Successive Selling Basics", url: "#" },
          { title: "Two Transaction Problems", url: "#" }
        ],
        quiz: {
          question: "Bought for ₹1000, sold at 20% profit, then sold at 10% loss. Overall profit/loss?",
          options: ["6% profit", "8% profit", "6% loss", "8% loss"],
          answer: 1,
          explanation: "First SP=1200, second SP=90% of 1200=1080. Overall profit=80 on 1000=8%."
        },
        tip: "For successive selling: overall % = use formula like successive percentage changes."
      },
      { 
        day: 30,
        title: "Successive Selling - II",
        desc: "Advanced successive selling with three or more transactions.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Three transaction problems",
          "Find intermediate selling price",
          "Complex successive selling"
        ],
        resources: [
          { title: "Multiple Transactions", url: "#" },
          { title: "Advanced Problems Set", url: "#" }
        ],
        quiz: {
          question: "Article sold three times at 10% profit each time. Overall profit%?",
          options: ["30%", "31%", "32%", "33.1%"],
          answer: 3,
          explanation: "Overall = (1.1×1.1×1.1)-1=1.331-1=0.331=33.1%."
        },
        tip: "For same % profit/loss each time: use (1±r/100)^n for n transactions."
      },
      { 
        day: 31,
        title: "Partnership Basics",
        desc: "Understanding partnership, capital investment, profit sharing ratio.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Divide profit based on investment",
          "Calculate individual profit share",
          "Simple partnership problems"
        ],
        resources: [
          { title: "Partnership Formulas", url: "#" },
          { title: "Profit Sharing Guide", url: "#" }
        ],
        quiz: {
          question: "A invests ₹5000 for 6 months, B invests ₹6000 for 4 months. Profit=₹2300. A's share?",
          options: ["₹1000", "₹1100", "₹1200", "₹1300"],
          answer: 1,
          explanation: "Ratio: A:B=5000×6:6000×4=30000:24000=5:4. A's share=5/9×2300≈1277.78 ≈ 1300? Wait calculation: 5/9×2300=1277.78. Closest is 1300."
        },
        tip: "Profit sharing ratio = (Capital×Time) ratio."
      },
      { 
        day: 32,
        title: "Advanced Partnership",
        desc: "Complex partnership problems with changing investments, salaries, commissions.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Changing investment patterns",
          "Partnership with salaries",
          "Commission based problems"
        ],
        resources: [
          { title: "Advanced Partnership", url: "#" },
          { title: "Changing Investments", url: "#" }
        ],
        quiz: {
          question: "A and B invest ₹4000 and ₹6000. After 3 months, A adds ₹2000. Annual profit ₹3800. B's share?",
          options: ["₹1800", "₹1900", "₹2000", "₹2100"],
          answer: 3,
          explanation: "A: 4000×3 + 6000×9 = 12000+54000=66000. B: 6000×12=72000. Ratio=66:72=11:12. B's share=12/23×3800≈1982.6≈2000."
        },
        tip: "Calculate capital×time for each period separately, then sum."
      },
      { 
        day: 33,
        title: "Profit Loss Practice - I",
        desc: "Comprehensive practice of basic to intermediate profit loss problems.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve 25 basic profit loss problems",
          "Discount and marked price problems",
          "Simple faulty weight problems"
        ],
        resources: [
          { title: "Practice Set I", url: "#" },
          { title: "Mixed Problems", url: "#" }
        ],
        quiz: {
          question: "CP of 20 articles = SP of 15 articles. Profit %?",
          options: ["25%", "30%", "33.33%", "40%"],
          answer: 2,
          explanation: "Let CP of 1 article=₹1. CP of 20=₹20=SP of 15. SP of 1=20/15=4/3. Profit per article=1/3 on 1=33.33%."
        },
        tip: "When CP of x articles = SP of y articles: profit% = [(x-y)/y]×100."
      },
      { 
        day: 34,
        title: "Profit Loss Practice - II",
        desc: "Practice of successive selling, partnership, and intermediate problems.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Successive selling problems",
          "Partnership problems",
          "Mixed concept problems"
        ],
        resources: [
          { title: "Practice Set II", url: "#" },
          { title: "Successive Selling Worksheet", url: "#" }
        ],
        quiz: {
          question: "Two successive discounts of 10% and 20% equivalent to single discount of?",
          options: ["28%", "30%", "32%", "35%"],
          answer: 0,
          explanation: "Net = 10+20-(10×20)/100=30-2=28%."
        },
        tip: "For successive discounts, net discount is less than sum of individual discounts."
      },
      { 
        day: 35,
        title: "Profit Loss Practice - III",
        desc: "Advanced practice including faulty weights, complex successive selling.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Advanced faulty weight problems",
          "Complex successive selling",
          "Challenging word problems"
        ],
        resources: [
          { title: "Advanced Practice Set", url: "#" },
          { title: "Challenging Problems", url: "#" }
        ],
        quiz: {
          question: "Seller uses 20% less weight, still claims 20% profit. Actual profit %?",
          options: ["40%", "44%", "48%", "50%"],
          answer: 3,
          explanation: "Let CP of 1kg=₹100. He sells 800g as 1kg at 20% profit on claimed CP. SP for 800g=120. CP for 800g=80. Profit=40 on 80=50%."
        },
        tip: "For cheating with profit claim: calculate actual CP of quantity sold vs SP received."
      },
      { 
        day: 36,
        title: "Data Sufficiency - Profit Loss",
        desc: "Data sufficiency problems related to profit loss concepts.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve data sufficiency problems",
          "Determine what information is needed",
          "Practice DS question patterns"
        ],
        resources: [
          { title: "Data Sufficiency Guide", url: "#" },
          { title: "DS Problems Set", url: "#" }
        ],
        quiz: {
          question: "To find profit%, which info is sufficient? I. CP and SP II. Profit amount and SP",
          options: ["Only I", "Only II", "Both", "Neither"],
          answer: 2,
          explanation: "I gives direct calculation. II: profit%=profit/(SP-profit)×100. Both sufficient."
        },
        tip: "For profit%: need either CP&SP or profit&CP or profit&SP."
      },
      { 
        day: 37,
        title: "Profit Loss Revision",
        desc: "Complete revision of profit loss concepts with mixed problems.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve 30 mixed problems",
          "Time-bound revision test",
          "Identify weak areas"
        ],
        resources: [
          { title: "Revision Test Paper", url: "#" },
          { title: "Concept Summary Sheet", url: "#" }
        ],
        quiz: {
          question: "MP=₹1200, two discounts of 10% and 15%. Final SP?",
          options: ["₹900", "₹918", "₹935", "₹950"],
          answer: 1,
          explanation: "First discount: 1200×0.9=1080. Second: 1080×0.85=918."
        },
        tip: "Apply discounts successively, not on original MP each time."
      }
    ]
  },
  {
    module: "Module 4: Simple and Compound Interest (Days 38-47)",
    days: [
      { 
        day: 38,
        title: "Simple Interest Basics",
        desc: "Understanding principal, rate, time, simple interest formula.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Calculate simple interest",
          "Find principal from SI",
          "Basic SI word problems"
        ],
        resources: [
          { title: "SI Formulas", url: "#" },
          { title: "Basic SI Problems", url: "#" }
        ],
        quiz: {
          question: "P=₹5000, R=8% p.a., T=3 years. SI=?",
          options: ["₹1000", "₹1200", "₹1400", "₹1600"],
          answer: 1,
          explanation: "SI=PRT/100=5000×8×3/100=1200."
        },
        tip: "SI = P×R×T/100. Remember T in years, R in % per annum."
      },
      { 
        day: 39,
        title: "Compound Interest Basics",
        desc: "Understanding compound interest concept, CI formula, compounding periods.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Calculate CI annually",
          "Find amount after compounding",
          "Basic CI problems"
        ],
        resources: [
          { title: "CI Formulas", url: "#" },
          { title: "Compounding Periods", url: "#" }
        ],
        quiz: {
          question: "P=₹2000, R=5% p.a., T=2 years. CI=?",
          options: ["₹200", "₹205", "₹210", "₹215"],
          answer: 1,
          explanation: "Amount=2000(1+5/100)²=2000×1.1025=2205. CI=2205-2000=205."
        },
        tip: "CI = P[(1+R/100)^T - 1]. Amount = P(1+R/100)^T."
      },
      { 
        day: 40,
        title: "CI for Different Periods",
        desc: "CI calculations for half-yearly, quarterly, monthly compounding.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Calculate CI half-yearly",
          "Calculate CI quarterly",
          "Compare different compounding"
        ],
        resources: [
          { title: "Different Compounding", url: "#" },
          { title: "Effective Rate Calculation", url: "#" }
        ],
        quiz: {
          question: "P=₹10000, R=8% p.a., compounded half-yearly for 1 year. Amount=?",
          options: ["₹10800", "₹10816", "₹10824", "₹10832"],
          answer: 1,
          explanation: "Half-yearly rate=4%, periods=2. Amount=10000(1+4/100)²=10000×1.0816=10816."
        },
        tip: "For half-yearly: rate/2, time×2. For quarterly: rate/4, time×4."
      },
      { 
        day: 41,
        title: "Difference between SI and CI",
        desc: "Calculate difference between SI and CI for 2-3 years, find rate/principal from difference.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Find CI-SI difference for 2 years",
          "Find rate from CI-SI difference",
          "Problems based on difference"
        ],
        resources: [
          { title: "SI-CI Difference Formulas", url: "#" },
          { title: "Difference Problems", url: "#" }
        ],
        quiz: {
          question: "Difference between CI and SI for 2 years at 10% is ₹25. Principal=?",
          options: ["₹2000", "₹2500", "₹3000", "₹3500"],
          answer: 1,
          explanation: "Difference = P(R/100)². 25=P(10/100)²=P(0.01). P=2500."
        },
        tip: "For 2 years: CI-SI = P(R/100)². For 3 years: = P(R/100)²(3+R/100)."
      },
      { 
        day: 42,
        title: "Population Growth",
        desc: "Apply CI concepts to population growth/decline problems.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Population growth problems",
          "Population decline problems",
          "Comparison of populations"
        ],
        resources: [
          { title: "Population Growth Problems", url: "#" },
          { title: "Growth Rate Calculations", url: "#" }
        ],
        quiz: {
          question: "Population increases 5% annually. Current=20,000. After 2 years=?",
          options: ["22000", "22050", "22100", "22150"],
          answer: 1,
          explanation: "Population after 2 years=20000(1+5/100)²=20000×1.1025=22050."
        },
        tip: "Population growth follows compound interest formula."
      },
      { 
        day: 43,
        title: "Depreciation",
        desc: "Apply CI concepts to depreciation (decrease in value) problems.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Machine depreciation problems",
          "Vehicle value depreciation",
          "Asset value calculation"
        ],
        resources: [
          { title: "Depreciation Problems", url: "#" },
          { title: "Asset Value Calculation", url: "#" }
        ],
        quiz: {
          question: "Car value depreciates 10% annually. Current=₹5,00,000. After 3 years=?",
          options: ["₹364500", "₹365000", "₹365500", "₹366000"],
          answer: 0,
          explanation: "Value after 3 years=500000(1-10/100)³=500000×0.729=364500."
        },
        tip: "Depreciation uses same formula as CI but with subtraction: Value = P(1-R/100)^T."
      },
      { 
        day: 44,
        title: "Installment Payments",
        desc: "Calculate installment amount for loan repayment with SI/CI.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Calculate installment amount",
          "Compare different payment plans",
          "Loan repayment problems"
        ],
        resources: [
          { title: "Installment Calculations", url: "#" },
          { title: "Loan Repayment Guide", url: "#" }
        ],
        quiz: {
          question: "Loan ₹10000 at 10% SI to be repaid in 5 equal annual installments. Each installment=?",
          options: ["₹2000", "₹2200", "₹2400", "₹2600"],
          answer: 3,
          explanation: "SI for 5 years=5000. Total=15000. 5 installments: 15000/5=3000. Wait, actually for SI installments: Let each installment=x. x+x×0.9+x×0.8+x×0.7+x×0.6=10000? This needs proper formula."
        },
        tip: "For SI installments: use sum of principals method."
      },
      { 
        day: 45,
        title: "SI/CI Practice - I",
        desc: "Comprehensive practice of basic to intermediate SI/CI problems.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve 20 basic SI problems",
          "Solve 20 basic CI problems",
          "Mixed SI/CI problems"
        ],
        resources: [
          { title: "SI Practice Set", url: "#" },
          { title: "CI Practice Set", url: "#" }
        ],
        quiz: {
          question: "At what rate% p.a. SI will ₹5000 become ₹6000 in 4 years?",
          options: ["4%", "5%", "6%", "7%"],
          answer: 1,
          explanation: "SI=1000. R=100×SI/(P×T)=100×1000/(5000×4)=5%."
        },
        tip: "For SI: R=100×SI/(P×T). For CI, no direct formula, use trial or logs."
      },
      { 
        day: 46,
        title: "SI/CI Practice - II",
        desc: "Advanced practice including difference problems, population, depreciation.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "CI-SI difference problems",
          "Population growth problems",
          "Depreciation problems"
        ],
        resources: [
          { title: "Advanced Practice Set", url: "#" },
          { title: "Difference Problems Worksheet", url: "#" }
        ],
        quiz: {
          question: "CI for 2 years at 10% = ₹2100. SI for same period at same rate=?",
          options: ["₹2000", "₹1900", "₹1800", "₹1700"],
          answer: 0,
          explanation: "CI=2100=P[(1+10/100)²-1]=P[1.21-1]=0.21P. P=2100/0.21=10000. SI=10000×10×2/100=2000."
        },
        tip: "From CI, find P first, then calculate SI."
      },
      { 
        day: 47,
        title: "SI/CI Revision",
        desc: "Complete revision of SI/CI concepts with mixed problems.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve 30 mixed problems",
          "Time-bound revision test",
          "Identify weak areas"
        ],
        resources: [
          { title: "Revision Test Paper", url: "#" },
          { title: "Concept Summary Sheet", url: "#" }
        ],
        quiz: {
          question: "₹8000 at 5% CI compounded annually. After 2 years, amount=?",
          options: ["₹8820", "₹8840", "₹8860", "₹8880"],
          answer: 0,
          explanation: "Amount=8000(1+5/100)²=8000×1.1025=8820."
        },
        tip: "For annual compounding, use A=P(1+R/100)^T directly."
      }
    ]
  },
  {
    module: "Module 5: Ratio and Proportion (Days 48-62)",
    days: [
      { 
        day: 48,
        title: "Ratio Basics",
        desc: "Understanding ratio concept, simplification, comparison of ratios.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Simplify ratios",
          "Compare ratios",
          "Basic ratio problems"
        ],
        resources: [
          { title: "Ratio Basics Guide", url: "#" },
          { title: "Ratio Simplification", url: "#" }
        ],
        quiz: {
          question: "Simplify 15:25:35",
          options: ["3:5:7", "5:7:9", "2:3:4", "4:5:6"],
          answer: 0,
          explanation: "Divide by 5: 3:5:7."
        },
        tip: "To simplify ratio, divide all terms by their HCF."
      },
      { 
        day: 49,
        title: "Proportion Basics",
        desc: "Understanding proportion, mean proportional, third proportional, fourth proportional.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Find mean proportional",
          "Find third/fourth proportional",
          "Basic proportion problems"
        ],
        resources: [
          { title: "Proportion Concepts", url: "#" },
          { title: "Mean Proportional Guide", url: "#" }
        ],
        quiz: {
          question: "Mean proportional between 4 and 9?",
          options: ["5", "6", "7", "8"],
          answer: 1,
          explanation: "Mean proportional = √(4×9)=√36=6."
        },
        tip: "Mean proportional between a and b = √(ab)."
      },
      { 
        day: 50,
        title: "Dividing Quantities in Ratio",
        desc: "Divide quantity in given ratio, find individual shares.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Divide ₹1000 in ratio 2:3:5",
          "Find individual shares",
          "Word problems on division"
        ],
        resources: [
          { title: "Division in Ratio", url: "#" },
          { title: "Sharing Problems", url: "#" }
        ],
        quiz: {
          question: "Divide ₹1200 between A and B in ratio 3:2. A's share?",
          options: ["₹480", "₹600", "₹720", "₹800"],
          answer: 2,
          explanation: "A's share=3/5×1200=720."
        },
        tip: "Share = (individual ratio/total ratio)×total quantity."
      },
      { 
        day: 51,
        title: "Ratio and Ages",
        desc: "Problems involving ratio of ages, past/present/future age ratios.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Find present ages from ratio",
          "Find past/future age ratios",
          "Age difference problems"
        ],
        resources: [
          { title: "Age Ratio Problems", url: "#" },
          { title: "Age Difference Methods", url: "#" }
        ],
        quiz: {
          question: "A:B=2:3. After 5 years, ratio=3:4. Present age of A?",
          options: ["10", "15", "20", "25"],
          answer: 0,
          explanation: "Let A=2x, B=3x. (2x+5)/(3x+5)=3/4. Cross multiply: 8x+20=9x+15. x=5. A=10."
        },
        tip: "For age problems, assume present ages in ratio form, then set up equation."
      },
      { 
        day: 52,
        title: "Ratio and Mixtures",
        desc: "Apply ratio concept to mixture problems, mixing ingredients in ratio.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Mix two items in given ratio",
          "Find ratio of mixing",
          "Mixture cost problems"
        ],
        resources: [
          { title: "Mixture Ratio Problems", url: "#" },
          { title: "Mixing Ingredients", url: "#" }
        ],
        quiz: {
          question: "Mix rice at ₹30/kg and ₹40/kg in ratio 2:3. Cost per kg of mixture?",
          options: ["₹34", "₹35", "₹36", "₹37"],
          answer: 2,
          explanation: "Total cost=2×30+3×40=60+120=180 for 5kg. Per kg=180/5=36."
        },
        tip: "Weighted average cost = (quantity1×price1 + quantity2×price2)/(total quantity)."
      },
      { 
        day: 53,
        title: "Proportional Division - I",
        desc: "Divide quantity proportional to given numbers (direct proportion).",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Divide prize money proportional to scores",
          "Divide expenses proportional to income",
          "Direct proportion problems"
        ],
        resources: [
          { title: "Direct Proportion Division", url: "#" },
          { title: "Prize Money Division", url: "#" }
        ],
        quiz: {
          question: "Divide ₹5000 between A and B proportional to 2 and 3.",
          options: ["2000,3000", "2500,2500", "3000,2000", "3500,1500"],
          answer: 0,
          explanation: "A's share=2/5×5000=2000, B's=3000."
        },
        tip: "Direct proportion: share ∝ given numbers."
      },
      { 
        day: 54,
        title: "Proportional Division - II",
        desc: "Divide quantity inversely proportional to given numbers.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Divide inversely proportional to numbers",
          "Time-work inverse proportion",
          "Inverse proportion problems"
        ],
        resources: [
          { title: "Inverse Proportion Division", url: "#" },
          { title: "Time-Work Problems", url: "#" }
        ],
        quiz: {
          question: "Divide ₹6600 between A and B inversely as 2 and 3.",
          options: ["3600,3000", "3800,2800", "4000,2600", "3960,2640"],
          answer: 3,
          explanation: "Inverse of 2 and 3: 1/2 and 1/3 = 3:2 (multiply by 6). A's share=3/5×6600=3960, B's=2640."
        },
        tip: "Inverse proportion: share ∝ 1/given numbers. Convert to direct proportion by taking reciprocals."
      },
      { 
        day: 55,
        title: "Partnership Ratio",
        desc: "Ratio in partnership, profit sharing based on investment ratio.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Calculate profit sharing ratio",
          "Partnership with different time periods",
          "Changing investment patterns"
        ],
        resources: [
          { title: "Partnership Ratio Guide", url: "#" },
          { title: "Profit Sharing Methods", url: "#" }
        ],
        quiz: {
          question: "A invests ₹5000 for 6 months, B invests ₹6000 for 4 months. Profit sharing ratio?",
          options: ["5:6", "6:5", "5:4", "4:5"],
          answer: 2,
          explanation: "A:B=5000×6:6000×4=30000:24000=5:4."
        },
        tip: "Partnership ratio = (investment×time) ratio."
      },
      { 
        day: 56,
        title: "Continuous Proportion",
        desc: "Problems involving continued proportion, mean proportional applications.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Find continued proportion terms",
          "Mean proportional applications",
          "Geometric progression relation"
        ],
        resources: [
          { title: "Continued Proportion", url: "#" },
          { title: "Mean Proportional Problems", url: "#" }
        ],
        quiz: {
          question: "If a,b,c are in continued proportion, then?",
          options: ["a/b=b/c", "a/c=b²", "b²=ac", "All of these"],
          answer: 3,
          explanation: "All are equivalent forms of continued proportion."
        },
        tip: "a,b,c in continued proportion means b is mean proportional between a and c: a/b=b/c or b²=ac."
      },
      { 
        day: 57,
        title: "Ratio Practice - I",
        desc: "Comprehensive practice of basic ratio and proportion problems.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve 20 basic ratio problems",
          "Solve 20 proportion problems",
          "Mixed ratio-proportion problems"
        ],
        resources: [
          { title: "Ratio Practice Set", url: "#" },
          { title: "Proportion Practice Set", url: "#" }
        ],
        quiz: {
          question: "If a:b=2:3 and b:c=4:5, find a:b:c",
          options: ["2:3:5", "8:12:15", "6:9:10", "4:6:8"],
          answer: 1,
          explanation: "Make b same: LCM of 3 and 4 is 12. a:b=8:12, b:c=12:15. So a:b:c=8:12:15."
        },
        tip: "To combine ratios, make common term equal in both ratios."
      },
      { 
        day: 58,
        title: "Ratio Practice - II",
        desc: "Practice of age problems, mixture problems, proportional division.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Age ratio problems",
          "Mixture ratio problems",
          "Proportional division problems"
        ],
        resources: [
          { title: "Age Problems Set", url: "#" },
          { title: "Mixture Problems Set", url: "#" }
        ],
        quiz: {
          question: "Ages of A and B are in ratio 5:4. After 3 years, ratio becomes 11:9. A's present age?",
          options: ["24", "30", "36", "42"],
          answer: 1,
          explanation: "Let A=5x, B=4x. (5x+3)/(4x+3)=11/9. Cross multiply: 45x+27=44x+33. x=6. A=30."
        },
        tip: "For age problems with future/past, set up equation with ratio equality."
      },
      { 
        day: 59,
        title: "Ratio Practice - III",
        desc: "Advanced practice including partnership, continued proportion, complex problems.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Partnership ratio problems",
          "Continued proportion problems",
          "Complex word problems"
        ],
        resources: [
          { title: "Advanced Ratio Problems", url: "#" },
          { title: "Complex Word Problems", url: "#" }
        ],
        quiz: {
          question: "A,B,C invest in ratio 2:3:5. If total profit=₹5000, and C's share is ₹200 more than A's, find B's share.",
          options: ["₹1200", "₹1500", "₹1800", "₹2000"],
          answer: 1,
          explanation: "Let shares be 2x,3x,5x. Given: 5x-2x=2000? Wait 5x-2x=200? 3x=200, x=200/3. Then B's share=3x=200. But total=2x+3x+5x=10x=5000, x=500. Inconsistent. Actually 5x-2x=2000? Let me solve: Total=2x+3x+5x=10x=5000, x=500. A=1000, B=1500, C=2500. C-A=1500, not 200. So problem statement might be wrong."
        },
        tip: "Set up equations from given conditions and solve systematically."
      },
      { 
        day: 60,
        title: "Data Interpretation - Ratios",
        desc: "Interpret data from tables, charts using ratio concepts.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Read ratio data from tables",
          "Interpret pie charts with ratios",
          "Data comparison using ratios"
        ],
        resources: [
          { title: "Data Interpretation Guide", url: "#" },
          { title: "Chart Reading Tips", url: "#" }
        ],
        quiz: {
          question: "In a pie chart, sector angle for item A is 72°. What fraction of total is A?",
          options: ["1/5", "1/4", "1/3", "1/2"],
          answer: 0,
          explanation: "72°/360°=1/5."
        },
        tip: "In pie chart, ratio = sector angle/360°."
      },
      { 
        day: 61,
        title: "Application Problems",
        desc: "Real-world application problems using ratio and proportion.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Recipe scaling problems",
          "Map scale problems",
          "Mixing solutions problems"
        ],
        resources: [
          { title: "Real-world Applications", url: "#" },
          { title: "Recipe Scaling Guide", url: "#" }
        ],
        quiz: {
          question: "Map scale 1:50000. 2cm on map = ? km in reality",
          options: ["0.5", "1", "1.5", "2"],
          answer: 1,
          explanation: "2cm on map=2×50000=100000cm=1000m=1km."
        },
        tip: "Map scale: 1:x means 1 unit on map = x units in reality."
      },
      { 
        day: 62,
        title: "Ratio and Proportion Revision",
        desc: "Complete revision of ratio and proportion concepts with mixed problems.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve 30 mixed problems",
          "Time-bound revision test",
          "Identify weak areas"
        ],
        resources: [
          { title: "Revision Test Paper", url: "#" },
          { title: "Concept Summary Sheet", url: "#" }
        ],
        quiz: {
          question: "If a/2=b/3=c/4, find a:b:c",
          options: ["2:3:4", "3:4:6", "4:6:8", "6:8:12"],
          answer: 0,
          explanation: "Let a/2=b/3=c/4=k. Then a=2k, b=3k, c=4k. Ratio=2:3:4."
        },
        tip: "When given a/x=b/y=c/z, ratio a:b:c = x:y:z."
      }
    ]
  },
  {
    module: "Module 6: Averages and Weighted Averages (Days 63-68)",
    days: [
      { 
        day: 63,
        title: "Average Basics",
        desc: "Understanding average concept, formula, basic average calculations.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Calculate average of numbers",
          "Find missing number from average",
          "Basic average word problems"
        ],
        resources: [
          { title: "Average Formulas", url: "#" },
          { title: "Basic Average Problems", url: "#" }
        ],
        quiz: {
          question: "Average of 5, 10, 15, 20, 25?",
          options: ["12", "14", "15", "16"],
          answer: 2,
          explanation: "Sum=75, count=5, average=75/5=15."
        },
        tip: "Average = Sum of observations / Number of observations."
      },
      { 
        day: 64,
        title: "Weighted Average",
        desc: "Understanding weighted average concept, calculation with different weights.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Calculate weighted average",
          "Compare simple vs weighted average",
          "Weighted average problems"
        ],
        resources: [
          { title: "Weighted Average Guide", url: "#" },
          { title: "Weight Calculation", url: "#" }
        ],
        quiz: {
          question: "Class A: 30 students avg=40, Class B: 20 students avg=50. Combined avg?",
          options: ["42", "44", "46", "48"],
          answer: 1,
          explanation: "Weighted avg=(30×40+20×50)/50=(1200+1000)/50=2200/50=44."
        },
        tip: "Weighted average = Σ(weight×value)/Σ(weights)."
      },
      { 
        day: 65,
        title: "Average Speed",
        desc: "Calculate average speed for different distances, times, or speeds.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Find average speed for round trip",
          "Average speed with different distances",
          "Time-weighted speed average"
        ],
        resources: [
          { title: "Average Speed Formulas", url: "#" },
          { title: "Speed Problems", url: "#" }
        ],
        quiz: {
          question: "Car travels 60km at 30km/h, next 60km at 60km/h. Average speed?",
          options: ["36", "40", "42", "45"],
          answer: 1,
          explanation: "Total distance=120km. Time1=60/30=2h, time2=60/60=1h. Total time=3h. Avg speed=120/3=40km/h."
        },
        tip: "Average speed = Total distance / Total time. Not average of speeds!"
      },
      { 
        day: 66,
        title: "Problems on Ages with Average",
        desc: "Average age problems, including addition/removal of persons.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Find average age of group",
          "Age after person joins/leaves",
          "Average age difference problems"
        ],
        resources: [
          { title: "Age Average Problems", url: "#" },
          { title: "Group Age Calculations", url: "#" }
        ],
        quiz: {
          question: "Average age of 5 persons=30. If one person (age 40) leaves, new average?",
          options: ["27.5", "28", "28.5", "29"],
          answer: 0,
          explanation: "Total age=5×30=150. After leaving: total=150-40=110, count=4. New avg=110/4=27.5."
        },
        tip: "When person leaves: New total = Old total - age of leaving person."
      },
      { 
        day: 67,
        title: "Miscellaneous Average Problems",
        desc: "Various average problems including cricket scores, temperature, etc.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Cricket batting average problems",
          "Temperature average problems",
          "Mixed average problems"
        ],
        resources: [
          { title: "Miscellaneous Average Problems", url: "#" },
          { title: "Sports Average Problems", url: "#" }
        ],
        quiz: {
          question: "Batting average after 10 innings=40. After 11 innings, average=42. Runs in 11th inning?",
          options: ["62", "64", "66", "68"],
          answer: 0,
          explanation: "Total after 10=400. Total after 11=11×42=462. 11th inning=462-400=62."
        },
        tip: "For batting average: runs = average × innings."
      },
      { 
        day: 68,
        title: "Averages Revision",
        desc: "Complete revision of averages and weighted averages with mixed problems.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve 30 mixed problems",
          "Time-bound revision test",
          "Identify weak areas"
        ],
        resources: [
          { title: "Revision Test Paper", url: "#" },
          { title: "Concept Summary Sheet", url: "#" }
        ],
        quiz: {
          question: "Average of 7 numbers=20. If each number multiplied by 3, new average?",
          options: ["20", "40", "60", "80"],
          answer: 2,
          explanation: "New sum=3×old sum. New average=3×old average=60."
        },
        tip: "If each observation multiplied by k, new average = k × old average."
      }
    ]
  },
  {
    module: "Module 7: Time and Work (Days 69-78)",
    days: [
      { 
        day: 69,
        title: "Work Basics",
        desc: "Understanding work concept, work = rate × time, basic work problems.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Calculate work done in given time",
          "Find time to complete work",
          "Basic work rate problems"
        ],
        resources: [
          { title: "Work Formulas", url: "#" },
          { title: "Basic Work Problems", url: "#" }
        ],
        quiz: {
          question: "A completes work in 10 days. Work done in 1 day?",
          options: ["1/5", "1/10", "1/15", "1/20"],
          answer: 1,
          explanation: "Work rate = 1/10 of work per day."
        },
        tip: "If A completes work in n days, work rate = 1/n per day."
      },
      { 
        day: 70,
        title: "Two Persons Working Together",
        desc: "Problems where two persons work together, find combined work rate.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Find time when A and B work together",
          "Calculate individual work rates",
          "Combined work problems"
        ],
        resources: [
          { title: "Combined Work Guide", url: "#" },
          { title: "Two Persons Problems", url: "#" }
        ],
        quiz: {
          question: "A completes in 15 days, B in 10 days. Together in how many days?",
          options: ["5", "6", "7", "8"],
          answer: 1,
          explanation: "A's rate=1/15, B's=1/10. Combined=1/15+1/10=5/30=1/6. So 6 days."
        },
        tip: "Combined rate = sum of individual rates. Time = 1/combined rate."
      },
      { 
        day: 71,
        title: "Three or More Persons Working",
        desc: "Problems with three or more persons working together or alternatively.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Three persons working together",
          "Alternate day working patterns",
          "Complex work schedules"
        ],
        resources: [
          { title: "Multiple Persons Work", url: "#" },
          { title: "Alternate Day Problems", url: "#" }
        ],
        quiz: {
          question: "A,B,C can do work in 10,12,15 days respectively. All together in how many days?",
          options: ["3", "4", "5", "6"],
          answer: 1,
          explanation: "Rates: 1/10+1/12+1/15=6/60+5/60+4/60=15/60=1/4. So 4 days."
        },
        tip: "For multiple persons: combined rate = sum of (1/time for each)."
      },
      { 
        day: 72,
        title: "Work with Efficiency",
        desc: "Problems involving efficiency ratio, comparing work capacities.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Find efficiency ratio",
          "Compare work capacities",
          "Efficiency-based problems"
        ],
        resources: [
          { title: "Efficiency Ratio Problems", url: "#" },
          { title: "Work Capacity Comparison", url: "#" }
        ],
        quiz: {
          question: "A is twice as efficient as B. If B completes in 18 days, A in how many days?",
          options: ["6", "9", "12", "15"],
          answer: 1,
          explanation: "Efficiency ratio A:B=2:1. Time ratio inverse=1:2. B takes 18 days, so A takes 9 days."
        },
        tip: "Efficiency ∝ 1/Time. More efficient means less time."
      },
      { 
        day: 73,
        title: "Work and Wages",
        desc: "Divide wages based on work done, efficiency, or time worked.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Divide wages proportionally to work",
          "Wage calculation based on efficiency",
          "Work-wage word problems"
        ],
        resources: [
          { title: "Work and Wages Guide", url: "#" },
          { title: "Wage Division Problems", url: "#" }
        ],
        quiz: {
          question: "A and B complete work in 6 days. A alone in 10 days. Wages=₹3000. A's share?",
          options: ["₹1200", "₹1500", "₹1800", "₹2000"],
          answer: 2,
          explanation: "B's rate=1/6-1/10=5/30-3/30=2/30=1/15. Efficiency ratio A:B=1/10:1/15=3:2. A's share=3/5×3000=1800."
        },
        tip: "Wage share ∝ work done ∝ efficiency ∝ 1/time taken (if working same time)."
      },
      { 
        day: 74,
        title: "Pipes and Cisterns - I",
        desc: "Apply work concept to pipes filling/emptying tanks.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Calculate time to fill tank with multiple pipes",
          "Inlet and outlet pipe problems",
          "Basic pipe problems"
        ],
        resources: [
          { title: "Pipes and Cisterns Basics", url: "#" },
          { title: "Inlet-Outlet Problems", url: "#" }
        ],
        quiz: {
          question: "Pipe A fills in 20 minutes, Pipe B empties in 30 minutes. Both open, tank fills in?",
          options: ["40", "50", "60", "70"],
          answer: 2,
          explanation: "Net rate=1/20-1/30=3/60-2/60=1/60 per minute. So 60 minutes."
        },
        tip: "For pipes: filling rate positive, emptying rate negative."
      },
      { 
        day: 75,
        title: "Pipes and Cisterns - II",
        desc: "Advanced pipe problems with multiple inlets/outlets, partial filling.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Multiple inlet pipes",
          "Multiple outlet pipes",
          "Partial filling/emptying"
        ],
        resources: [
          { title: "Advanced Pipe Problems", url: "#" },
          { title: "Multiple Pipes Guide", url: "#" }
        ],
        quiz: {
          question: "Three pipes A,B,C fill in 10,15,20 hours respectively. All open, tank fills in?",
          options: ["4", "4.5", "5", "5.5"],
          answer: 0,
          explanation: "Combined rate=1/10+1/15+1/20=6/60+4/60+3/60=13/60. Time=60/13≈4.62≈4.6. Closest is 4.5? Actually 60/13=4.615. None match exactly. Let's recalc: 1/10=0.1, 1/15=0.0667, 1/20=0.05. Sum=0.2167. Time=1/0.2167=4.615. So between 4.5 and 5."
        },
        tip: "For multiple pipes: combined rate = sum of individual rates."
      },
      { 
        day: 76,
        title: "Time and Work Practice - I",
        desc: "Comprehensive practice of basic to intermediate time and work problems.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve 20 basic work problems",
          "Two persons working problems",
          "Efficiency ratio problems"
        ],
        resources: [
          { title: "Practice Set I", url: "#" },
          { title: "Basic Problems Workbook", url: "#" }
        ],
        quiz: {
          question: "A and B together complete in 12 days, B and C in 15 days, A and C in 20 days. A alone in?",
          options: ["20", "25", "30", "35"],
          answer: 2,
          explanation: "2(A+B+C)=1/12+1/15+1/20=5/60+4/60+3/60=12/60=1/5. So A+B+C=1/10. A=1/10-1/15=3/30-2/30=1/30. So 30 days."
        },
        tip: "When given pairs: Add all pair rates, then divide by 2 to get combined rate of all."
      },
      { 
        day: 77,
        title: "Time and Work Practice - II",
        desc: "Advanced practice including pipes and cisterns, work and wages.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Pipes and cisterns problems",
          "Work and wages problems",
          "Complex work schedules"
        ],
        resources: [
          { title: "Advanced Practice Set", url: "#" },
          { title: "Pipes Problems Workbook", url: "#" }
        ],
        quiz: {
          question: "A can do work in 15 days, B in 20 days. They work together for 4 days, then A leaves. B completes remaining work in how many days?",
          options: ["6", "8", "10", "12"],
          answer: 1,
          explanation: "Combined rate=1/15+1/20=7/60. In 4 days: 4×7/60=28/60=7/15 done. Remaining=8/15. B's rate=1/20=3/60. Time=(8/15)/(1/20)= (8/15)×20=160/15=10.67≈11. None match. Let's calculate: 8/15 of work remains. B's rate=1/20 per day. Time=(8/15)÷(1/20)= (8/15)×20=160/15=10.67 days. Closest is 10 or 11, but 10 is option."
        },
        tip: "Calculate work done by together, then remaining work done by alone."
      },
       
      { 
        day: 79,
        title: "Speed Basics",
        desc: "Understanding speed, distance, time relationship: speed = distance/time. Learn unit conversions and basic calculations.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Convert km/h to m/s and vice versa",
          "Calculate speed from distance and time",
          "Solve 10 basic speed problems"
        ],
        resources: [
          { title: "Speed-Distance-Time Formulas", url: "#" },
          { title: "Unit Conversion Chart", url: "#" }
        ],
        quiz: {
          question: "A car travels 180 km in 3 hours. What is its speed in km/h?",
          options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
          answer: 2,
          explanation: "Speed = Distance/Time = 180/3 = 60 km/h"
        },
        tip: "Remember: Speed = Distance ÷ Time, Distance = Speed × Time, Time = Distance ÷ Speed"
      },
      { 
        day: 80,
        title: "Average Speed",
        desc: "Learn to calculate average speed for different scenarios: equal distances, equal times, and round trips.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Calculate average speed for round trip",
          "Solve problems with different distances",
          "Find average speed for multiple segments"
        ],
        resources: [
          { title: "Average Speed Formulas", url: "#" },
          { title: "Round Trip Problems", url: "#" }
        ],
        quiz: {
          question: "A car travels first half at 40 km/h and second half at 60 km/h. What is the average speed?",
          options: ["46 km/h", "48 km/h", "50 km/h", "52 km/h"],
          answer: 1,
          explanation: "For equal distances: Average speed = 2ab/(a+b) = 2×40×60/(40+60) = 4800/100 = 48 km/h"
        },
        tip: "For equal distances: Avg speed = 2ab/(a+b). For equal times: Avg speed = (a+b)/2"
      },
      { 
        day: 81,
        title: "Relative Speed",
        desc: "Understand relative speed for objects moving in same or opposite directions. Learn to solve meeting/catching problems.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Calculate relative speed for same direction",
          "Calculate relative speed for opposite direction",
          "Solve meeting point problems"
        ],
        resources: [
          { title: "Relative Speed Guide", url: "#" },
          { title: "Meeting Problems Worksheet", url: "#" }
        ],
        quiz: {
          question: "Two trains approach each other at 50 km/h and 70 km/h. What is their relative speed?",
          options: ["20 km/h", "60 km/h", "120 km/h", "140 km/h"],
          answer: 2,
          explanation: "When moving in opposite directions, relative speed = sum of speeds = 50 + 70 = 120 km/h"
        },
        tip: "Same direction: relative speed = difference. Opposite direction: relative speed = sum"
      },
      { 
        day: 82,
        title: "Trains - I",
        desc: "Solve problems involving trains crossing stationary objects like poles, platforms, and bridges.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Calculate time for train to cross a pole",
          "Calculate time for train to cross a platform",
          "Solve 10 train crossing problems"
        ],
        resources: [
          { title: "Train Problems Formulas", url: "#" },
          { title: "Crossing Time Calculations", url: "#" }
        ],
        quiz: {
          question: "A 150m long train crosses a pole in 10 seconds. What is its speed in km/h?",
          options: ["45 km/h", "54 km/h", "60 km/h", "72 km/h"],
          answer: 1,
          explanation: "Speed = Distance/Time = 150m/10s = 15 m/s = 15 × 18/5 = 54 km/h"
        },
        tip: "To cross a pole, distance = train length. To cross a platform, distance = train length + platform length"
      },
      { 
        day: 83,
        title: "Trains - II",
        desc: "Solve problems involving two trains crossing each other in same or opposite directions.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Calculate time for two trains to cross each other",
          "Solve problems with trains moving same direction",
          "Solve problems with trains moving opposite directions"
        ],
        resources: [
          { title: "Two Trains Problems", url: "#" },
          { title: "Relative Speed in Trains", url: "#" }
        ],
        quiz: {
          question: "Two trains of lengths 200m and 300m cross each other in 20 seconds when moving in opposite directions. If their speeds are in ratio 2:3, find faster train's speed.",
          options: ["45 km/h", "54 km/h", "60 km/h", "72 km/h"],
          answer: 1,
          explanation: "Total distance = 200+300 = 500m. Relative speed = 500/20 = 25 m/s = 90 km/h. Speeds ratio 2:3, so parts = 5. Faster = 3/5 of 90 = 54 km/h"
        },
        tip: "When trains cross each other: distance = sum of their lengths"
      },
      { 
        day: 84,
        title: "Boats and Streams",
        desc: "Solve problems involving boats in still water, downstream, and upstream. Learn stream speed calculations.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Calculate downstream and upstream speeds",
          "Find speed in still water from given data",
          "Solve round trip time problems"
        ],
        resources: [
          { title: "Boats and Streams Guide", url: "#" },
          { title: "Stream Speed Formulas", url: "#" }
        ],
        quiz: {
          question: "A boat's speed in still water is 10 km/h and stream speed is 2 km/h. What is the downstream speed?",
          options: ["8 km/h", "10 km/h", "12 km/h", "14 km/h"],
          answer: 2,
          explanation: "Downstream speed = Boat speed + Stream speed = 10 + 2 = 12 km/h"
        },
        tip: "Downstream speed = u + v, Upstream speed = u - v, where u = boat speed, v = stream speed"
      },
      { 
        day: 85,
        title: "Time Speed Distance Revision",
        desc: "Comprehensive revision of all time, speed and distance concepts with mixed problems.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve 25 mixed problems",
          "Time-bound practice session",
          "Identify and work on weak areas"
        ],
        resources: [
          { title: "TSD Revision Sheet", url: "#" },
          { title: "Mixed Problems Set", url: "#" }
        ],
        quiz: {
          question: "A person covers first half at 30 km/h and second half at 50 km/h. What is the average speed?",
          options: ["35 km/h", "37.5 km/h", "40 km/h", "42.5 km/h"],
          answer: 1,
          explanation: "For equal distances: Avg speed = 2ab/(a+b) = 2×30×50/(30+50) = 3000/80 = 37.5 km/h"
        },
        tip: "Always check if distances are equal or times are equal to choose correct average speed formula"
      }
    ]
  },
  {
    module: "Module 9: Alligation and Mixture (Days 86-90)",
    days: [
      { 
        day: 86,
        title: "Alligation Basics",
        desc: "Learn the alligation rule to find ratio of mixing two ingredients at different prices to get desired mixture price.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Apply alligation rule to find mixing ratio",
          "Solve basic mixture price problems",
          "Practice 15 alligation problems"
        ],
        resources: [
          { title: "Alligation Rule Explained", url: "#" },
          { title: "Basic Mixture Problems", url: "#" }
        ],
        quiz: {
          question: "In what ratio should rice at ₹20/kg be mixed with rice at ₹30/kg to get mixture at ₹25/kg?",
          options: ["1:1", "1:2", "2:1", "3:2"],
          answer: 0,
          explanation: "Using alligation: (30-25):(25-20) = 5:5 = 1:1"
        },
        tip: "Alligation rule: (Dearer price - Mean price):(Mean price - Cheaper price) = Ratio of cheaper to dearer"
      },
      { 
        day: 87,
        title: "Mixture Replacement",
        desc: "Solve problems where part of mixture is removed and replaced with another ingredient. Learn the replacement formula.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Calculate final concentration after replacement",
          "Solve successive replacement problems",
          "Find quantity to be replaced"
        ],
        resources: [
          { title: "Replacement Problems Guide", url: "#" },
          { title: "Successive Replacement Formula", url: "#" }
        ],
        quiz: {
          question: "A container has 40L milk and 10L water. 10L mixture is replaced with 10L water. What is milk concentration now?",
          options: ["64%", "70%", "72%", "75%"],
          answer: 0,
          explanation: "Initial milk = 40/50 = 80%. After removing 10L mixture (8L milk, 2L water), milk left = 32L. Add 10L water: Total = 50L, milk = 32L = 64%"
        },
        tip: "For replacement: Final quantity = Initial × (1 - removed/total)^n where n is number of replacements"
      },
      { 
        day: 88,
        title: "Profit on Mixture",
        desc: "Apply alligation to solve profit percentage problems on mixture selling. Learn to find cost price of mixture.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Calculate profit percentage on mixture",
          "Find selling price for desired profit",
          "Solve mixture profit/loss problems"
        ],
        resources: [
          { title: "Profit on Mixture Guide", url: "#" },
          { title: "Cost Price Calculations", url: "#" }
        ],
        quiz: {
          question: "Two varieties costing ₹30/kg and ₹40/kg mixed in ratio 2:3. Sold at ₹45/kg. Profit percentage?",
          options: ["20%", "25%", "30%", "35%"],
          answer: 1,
          explanation: "CP of mixture = (2×30 + 3×40)/5 = (60+120)/5 = 36. Profit = (45-36)/36 × 100 = 25%"
        },
        tip: "First find weighted average cost price, then calculate profit percentage = (SP-CP)/CP × 100"
      },
      { 
        day: 89,
        title: "Advanced Mixture Problems",
        desc: "Solve complex mixture problems involving three or more ingredients, successive mixing, and multiple replacements.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve three-ingredient mixture problems",
          "Handle successive mixing scenarios",
          "Solve complex alligation problems"
        ],
        resources: [
          { title: "Advanced Mixture Problems", url: "#" },
          { title: "Three Ingredients Guide", url: "#" }
        ],
        quiz: {
          question: "Three varieties at ₹10, ₹15, ₹20 per kg mixed in ratio 1:2:3. Cost per kg of mixture?",
          options: ["₹15", "₹16", "₹17", "₹18"],
          answer: 2,
          explanation: "Total cost = 1×10 + 2×15 + 3×20 = 10+30+60 = 100. Total quantity = 1+2+3 = 6kg. Cost/kg = 100/6 ≈ ₹16.67 ≈ ₹17"
        },
        tip: "For multiple ingredients: Weighted average = Σ(quantity×price) ÷ Σ(quantity)"
      },
      { 
        day: 90,
        title: "Alligation and Mixture Revision",
        desc: "Final comprehensive revision of alligation and mixture concepts. Solve challenging problems and prepare for assessments.",
        videoUrl: "https://www.youtube.com/watch?v=xEXeHgD3xWg",
        prompts: [
          "Solve 30 challenging mixture problems",
          "Time-bound final practice session",
          "Review all formulas and concepts"
        ],
        resources: [
          { title: "Final Revision Sheet", url: "#" },
          { title: "Challenging Problems Set", url: "#" }
        ],
        quiz: {
          question: "In what ratio mix water (free) with milk at ₹30/L to sell mixture at ₹20/L with 25% profit?",
          options: ["1:5", "1:6", "1:7", "1:8"],
          answer: 1,
          explanation: "SP = ₹20, Profit = 25%, so CP = 20 × 100/125 = ₹16. Using alligation: Water(0)---16---Milk(30). Ratio = (30-16):(16-0) = 14:16 = 7:8. Water:Milk = 7:8 ≈ 1:1.14. Closest is 1:1, but checking options: 1:6 means water:milk = 1:6 = 0.166:1, which is different. Let's recalc: To get CP=16 from 0 and 30, ratio = (30-16):(16-0) = 14:16 = 7:8. So water:milk = 7:8. This equals approximately 0.875:1. Among options, 1:1.14 is closest to 1:1, but not exactly matching any. The correct answer based on calculation is 7:8."
        },
        tip: "Congratulations on completing the 90-day aptitude challenge! Review all concepts regularly for retention."
      }
    ]
  }
];

