/* Chapter 3 — Life Cycle Analyses and Methods (quality characteristics, analyses, modeling) (26) */

/* ---- Affordability / Life Cycle Cost (3) ---- */
Q({
  id: "X01", d: "analyses", b: "understand",
  ref: "SEH5 Ch.3 — Quality Characteristics: Affordability / Cost-Effectiveness / Life Cycle Cost Analysis",
  s: "Which costs should a life cycle cost (LCC) analysis include?",
  o: [
    ["Only development and production costs, because operating costs are the customer's responsibility.", "Excluding operation and support usually misses the largest share of cost for long-lived systems."],
    ["Costs of all stages: development, production, operation and support, and retirement.",
      "Correct. LCC is the total cost of ownership across the whole life, which enables fair comparison of alternatives."],
    ["Only the acquisition price paid by the acquirer, including the supplier's profit margin.", "Purchase price is just one part of LCC."],
    ["Only costs that can be measured precisely, so that the comparison is not distorted by estimates.", "LCC includes estimates with uncertainty; that's normal for early decisions."],
  ],
  a: 1,
  t: "LCC = cradle-to-grave: develop, produce, operate & support, dispose.",
});

Q({
  id: "X02", d: "analyses", b: "understand",
  ref: "SEH5 Ch.3 — Quality Characteristics: Affordability / Life Cycle Cost",
  s: "For many long-lived systems (e.g., aircraft, ships), which category often represents the largest share of life cycle cost?",
  o: [
    ["Concept studies and trade-offs", "Concept studies are a small fraction of total cost, though they commit much of it."],
    ["Retirement and disposal", "Disposal can be significant, but usually not the largest."],
    ["Operation and support", "Correct. Decades of operation, maintenance, staffing and logistics usually outweigh acquisition cost — so early design decisions about supportability matter a lot."],
    ["Detailed design and qualification", "Development is significant, but typically smaller than decades of operation and support."],
  ],
  a: 2,
  t: "Operation & support often dominates LCC — design for supportability early.",
});

Q({
  id: "X03", d: "analyses", b: "understand",
  ref: "SEH5 Ch.3 — Quality Characteristics: Affordability / Cost-Effectiveness",
  s: "What does 'affordability' mean in the SE sense?",
  o: [
    ["Selecting the lowest-priced alternative that meets the threshold requirements at contract award.",
      "Lowest acquisition price may fail to meet needs well or cost more over the life."],
    ["Planning to spend the whole available budget so that no capability is left on the table.",
      "Spending everything is not a design goal."],
    ["Deferring costs to later stages so that the development budget stays within its ceiling.",
      "Deferring costs can increase total LCC."],
    ["Balancing capability against life cycle cost so the system delivers value stakeholders can sustain.",
      "Correct. Affordability treats cost as a design parameter traded against capability across the whole life."],
  ],
  a: 3,
  t: "Affordability = capability balanced against life cycle cost the stakeholders can sustain.",
});

/* ---- Reliability, Availability, Maintainability (5) ---- */
Q({
  id: "X04", d: "analyses", b: "remember",
  ref: "SEH5 Ch.3 — Quality Characteristics: Reliability, Availability and Maintainability",
  s: "How is reliability defined?",
  o: [
    ["The probability of performing a required function under stated conditions for a stated time.",
      "Correct. Note the three parts: required function, stated conditions, stated time."],
    ["The proportion of time the system is in an operable state when called upon for use.",
      "That's availability."],
    ["The ease and speed with which the system can be restored to service after a failure.",
      "That's maintainability."],
    ["The freedom of the system from unacceptable risk of harm to people and the environment.",
      "That's safety."],
  ],
  a: 0,
  t: "Reliability = probability of performing the required function, under stated conditions, for a stated time.",
});

Q({
  id: "X05", d: "analyses", b: "understand",
  ref: "SEH5 Ch.3 — Quality Characteristics: Reliability, Availability and Maintainability (availability)",
  s: "Inherent availability is commonly expressed as MTBF / (MTBF + MTTR). What does operational availability add?",
  o: [
    ["Nothing — inherent and operational availability are the same measure under different names.",
      "They differ in what downtime they include."],
    ["The time the system spent in development and qualification before entering service.",
      "Development time isn't part of availability."],
    ["Real-world downtime such as logistics, administrative delays and preventive maintenance.",
      "Correct. Operational availability reflects the actual support environment, so it's normally lower than inherent availability."],
    ["The time the system is intentionally switched off because it is not needed.",
      "Standby by choice isn't generally counted as unavailability."],
  ],
  a: 2,
  t: "Inherent availability = design only; operational availability = includes real support delays.",
});

Q({
  id: "X06", d: "analyses", b: "remember",
  ref: "SEH5 Ch.3 — Quality Characteristics: Reliability, Availability and Maintainability (maintainability)",
  s: "What does maintainability describe?",
  o: [
    ["The probability that the system completes a mission of stated duration without any failure.",
      "That's reliability."],
    ["How easily and quickly the system can be kept in, or restored to, a specified condition.",
      "Correct. Maintainability (by personnel with specified skills, using prescribed procedures and resources) is often measured by MTTR and is designed in (access, modularity, diagnostics)."],
    ["The quantity and quality of maintenance documentation delivered with the system.",
      "Documentation supports maintenance but isn't maintainability."],
    ["The total cost of spare parts and consumables needed over the system's service life.",
      "That's a logistics cost element."],
  ],
  a: 1,
  t: "Maintainability = how easily/quickly it can be kept or restored in working condition (design-driven).",
});

Q({
  id: "X07", d: "analyses", b: "apply",
  ref: "SEH5 Ch.3 — Quality Characteristics: Reliability (MTBF)",
  s: "A component has a constant failure rate of 0.0002 failures per hour. What is its MTBF?",
  o: [
    ["200 hours", "That would correspond to a failure rate of 0.005 per hour."],
    ["2,000 hours", "That would correspond to 0.0005 per hour."],
    ["20,000 hours", "That would correspond to 0.00005 per hour."],
    ["5,000 hours", "Correct. With a constant failure rate, MTBF = 1/λ = 1/0.0002 = 5,000 hours."],
  ],
  a: 3,
  t: "Constant failure rate: MTBF = 1/λ.",
});

Q({
  id: "X08", d: "analyses", b: "understand",
  ref: "SEH5 Ch.3 — Quality Characteristics: RAM (design influence)",
  s: "Why should reliability and maintainability be addressed early, during concept and architecture definition?",
  o: [
    ["Because early architecture choices largely determine them and are costly to change later.",
      "Correct. Redundancy, modularity, access and diagnostics are architectural; RAM is designed in, not tested in at the end."],
    ["Because reliability testing can only be performed during the Concept stage.",
      "Testing happens later, but the design decisions come early."],
    ["Because reliability and maintainability matter only for software-intensive systems.",
      "RAM matters for all systems."],
    ["Because RAM requirements are fixed by regulation and never change later.",
      "They can change, but early attention is still key."],
  ],
  a: 0,
  t: "Reliability and maintainability are designed in through early architecture choices.",
});

/* ---- System Safety (3) ---- */
Q({
  id: "X09", d: "analyses", b: "understand",
  ref: "SEH5 Ch.3 — Quality Characteristics: System Safety",
  s: "Which statement about safety and reliability is correct?",
  o: [
    ["A highly reliable system is inherently safe, because accidents are caused by component failures.",
      "A system can reliably do something hazardous, and many accidents involve no component failure at all."],
    ["Safety and reliability are the same characteristic and are analyzed with the same methods.",
      "They are related but distinct, and safety needs its own analyses."],
    ["They differ: safety is freedom from unacceptable risk of harm, which can arise without any failure.",
      "Correct. Reliability concerns performing the function without failure; many accidents involve unsafe interactions or requirements, not component failures."],
    ["Safety is only a concern during the Retirement stage, when hazardous materials are handled.",
      "Safety matters throughout the life cycle."],
  ],
  a: 2,
  t: "Reliable ≠ safe. Hazards can come from interactions and requirements, not just failures.",
});

Q({
  id: "X10", d: "analyses", b: "understand",
  ref: "SEH5 Ch.3 — Quality Characteristics: System Safety (hazard analysis)",
  s: "When should hazard analysis begin?",
  o: [
    ["After the first incident in service, when real hazard data becomes available.", "Reactive safety is too late and too costly."],
    ["During final verification testing, once the design is complete enough to analyze.", "By then, removing hazards requires expensive redesign."],
    ["When the regulator formally requests a safety case for certification.", "Good practice goes beyond minimum regulatory triggers."],
    ["In the Concept stage, continuing iteratively as the design matures.",
      "Correct. Early hazard identification (e.g., preliminary hazard analysis) lets you design hazards out, which is the most effective mitigation."],
  ],
  a: 3,
  t: "Start hazard analysis in Concept; iterate as design matures.",
});

Q({
  id: "X11", d: "analyses", b: "understand",
  ref: "SEH5 Ch.3 — Quality Characteristics: System Safety (design order of precedence)",
  s: "Which is generally the most effective way to deal with an identified hazard?",
  o: [
    ["Eliminate it, or reduce its risk, through design choices", "Correct. The safety precedence is: design it out, then add safety devices, then warnings, then procedures and training."],
    ["Add clear warning labels and alarms to alert the users", "Warnings are among the less effective controls, used when design and devices can't remove the risk."],
    ["Write operating procedures and train the users in them", "Procedures and training are useful but rely on human behavior; they rank below design measures."],
    ["Accept it if its likelihood is judged to be low", "Acceptance requires analysis, consideration of severity, and appropriate authority — it's the last resort, not the first."],
  ],
  a: 0,
  t: "Hazard control order: design out → safety devices → warnings → procedures/training.",
});

/* ---- System Security (2) ---- */
Q({
  id: "X12", d: "analyses", b: "understand",
  ref: "SEH5 Ch.3 — Quality Characteristics: System Security",
  s: "Why does the handbook stress engineering security into the system from the start rather than adding it at the end?",
  o: [
    ["Because security can only be verified by penetration testing, which needs a complete system.",
      "Testing matters, but relying on it alone finds problems too late."],
    ["Because security emerges from architecture, interfaces and life cycle concepts; bolted-on security is weaker.",
      "Correct. Security, like safety, must be considered from concept onward (threats, vulnerabilities, protections); added late it is less effective and more expensive."],
    ["Because security is a software concern, and software is designed early in the life cycle.",
      "Security spans hardware, software, people, processes, supply chain and facilities."],
    ["Because security requirements are fixed at contract award and cannot change later.",
      "Threats evolve; security needs continual attention."],
  ],
  a: 1,
  t: "Security is engineered in from the start — it's an emergent, whole-system property.",
});

Q({
  id: "X13", d: "analyses", b: "apply",
  ref: "SEH5 Ch.3 — Quality Characteristics: System Security (supply chain and life cycle)",
  s: "A team secures its network interfaces but buys a critical microcontroller from an unvetted broker. What security concern has been overlooked?",
  o: [
    ["Maintainability of the microcontroller over the service life", "Maintainability concerns repair; the issue is trust in the supply chain."],
    ["Electromagnetic compatibility with the rest of the system", "EMC is about interference, not trust."],
    ["Supply chain security — parts may be counterfeit or tampered with", "Correct. Security spans the whole life cycle, including acquisition; compromised parts can undermine the system regardless of its network protections."],
    ["Interoperability of the microcontroller with its interfaces", "Interoperability is about exchanging and using information, not trust."],
  ],
  a: 2,
  t: "Security covers the whole life cycle — including where your parts come from.",
});

/* ---- Resilience (2) ---- */
Q({
  id: "X14", d: "analyses", b: "remember",
  ref: "SEH5 Ch.3 — Quality Characteristics: Resilience Engineering",
  s: "What does system resilience describe?",
  o: [
    ["The system's physical ability to survive mechanical shock and impact loads.", "Too narrow; resilience applies to any adversity."],
    ["The mean time between failures of the system under normal operation.", "That's reliability (MTBF)."],
    ["The system's ability to be produced at a higher rate when demand rises.", "That's production scalability, not resilience."],
    ["The ability to deliver required capability despite adversity: avoid, withstand, recover.",
      "Correct. Resilience deals with adverse events, including unexpected ones, and how capability is maintained or restored."],
  ],
  a: 3,
  t: "Resilience: keep delivering capability through adversity — avoid, withstand, recover.",
});

Q({
  id: "X15", d: "analyses", b: "apply",
  ref: "SEH5 Ch.3 — Quality Characteristics: Resilience Engineering",
  s: "A power grid is designed so that when a substation fails, loads are automatically rerouted and service is restored within minutes. Which characteristic does this design mainly demonstrate?",
  o: [
    ["Resilience", "Correct. It withstands and recovers from a disruption while maintaining needed capability."],
    ["Producibility", "Producibility is about ease of manufacture."],
    ["Interoperability", "Interoperability is about systems exchanging and using information or services."],
    ["Affordability", "Affordability concerns cost versus capability."],
  ],
  a: 0,
  t: "Graceful degradation and recovery → resilience.",
});

/* ---- Human Systems Integration (2) ---- */
Q({
  id: "X16", d: "analyses", b: "understand",
  ref: "SEH5 Ch.3 — Quality Characteristics: Human Systems Integration",
  s: "What is the goal of Human Systems Integration (HSI)?",
  o: [
    ["To automate as many functions as possible so that the number of human operators is minimized.",
      "Automation is a trade-off, not an absolute goal."],
    ["To integrate human considerations across the life cycle so people and technology perform together.",
      "Correct. HSI covers human factors, staffing, skills, training, safety, health, habitability and more — humans are part of the system and are designed for, not bolted on."],
    ["To design the user interface screens once the system's functions have been implemented.",
      "Late UI design is not HSI; HSI starts at concept."],
    ["To manage the recruitment and training of the project's own engineering team.",
      "That's the HR Management process."],
  ],
  a: 1,
  t: "HSI treats people as part of the system — considered from concept onward.",
});

Q({
  id: "X17", d: "analyses", b: "apply",
  ref: "SEH5 Ch.3 — Quality Characteristics: Human Systems Integration",
  s: "An investigation finds operators repeatedly misread a critical display because of cluttered layout. Which discipline should have addressed this during design?",
  o: [
    ["Configuration management of the display software", "CM controls changes; it doesn't design displays."],
    ["Quality assurance of the display production process", "QA checks processes and products against requirements; the requirement for a usable display came from human factors."],
    ["Logistics engineering for the operator workstations", "Logistics addresses support and supply."],
    ["Human factors engineering, within HSI", "Correct. Designing interfaces for human perception and cognition is a core HSI domain."],
  ],
  a: 3,
  t: "Human error by design is an HSI/human factors failure — design for human capabilities and limits.",
});

/* ---- Interoperability, producibility, sustainability, logistics (4) ---- */
Q({
  id: "X18", d: "analyses", b: "remember",
  ref: "SEH5 Ch.3 — Quality Characteristics: Interoperability",
  s: "What is interoperability?",
  o: [
    ["The ability of systems to exchange information or services and use what is exchanged.",
      "Correct. It's more than connecting — the exchanged information must be usable by the receiving system."],
    ["The ability of the system to operate across a wide range of environmental conditions.",
      "That's environmental robustness."],
    ["The ability of different operators to take over the system at shift changes.",
      "Unrelated."],
    ["The ability of the system to be manufactured in several factories to one design.",
      "That's related to producibility."],
  ],
  a: 0,
  t: "Interoperability = exchange AND use information/services.",
});

Q({
  id: "X19", d: "analyses", b: "understand",
  ref: "SEH5 Ch.3 — Quality Characteristics: Manufacturability / Producibility",
  s: "What is the best way to improve a system's producibility?",
  o: [
    ["Release the finished design to manufacturing and let them adapt it to their processes.",
      "Throw-it-over-the-wall leads to late, costly redesign."],
    ["Specify the tightest tolerances achievable so that every unit performs identically.",
      "Unnecessarily tight tolerances usually hurt producibility and cost."],
    ["Involve manufacturing early so design choices account for production methods and cost.",
      "Correct. Producibility is designed in through early collaboration (concurrent engineering)."],
    ["Use custom-made parts throughout so that each is optimized for its function.",
      "Custom parts often reduce producibility; standard parts usually help."],
  ],
  a: 2,
  t: "Producibility is designed in — bring manufacturing in early.",
});

Q({
  id: "X20", d: "analyses", b: "understand",
  ref: "SEH5 Ch.3 — Quality Characteristics: Sustainability / Environmental Engineering",
  s: "How should environmental sustainability be considered in SE?",
  o: [
    ["At end of life, when materials are recovered and recycled in line with regulations.",
      "Disposal matters, but so do material choices, energy use and emissions during production and operation."],
    ["Across the whole life cycle, as requirements and design considerations from the start.",
      "Correct. Environmental impact (materials, energy and resource use, emissions, end-of-life) is a whole-life property, shaped by early decisions."],
    ["Only if the acquirer includes sustainability targets in the contract requirements.",
      "It's an engineering and often a regulatory concern regardless."],
    ["It sits outside SE; environmental specialists handle it independently of the system design.",
      "The handbook treats it as a quality characteristic SE must address."],
  ],
  a: 1,
  t: "Sustainability is a whole-life design consideration, not just a disposal task.",
});

Q({
  id: "X21", d: "analyses", b: "understand",
  ref: "SEH5 Ch.3 — Quality Characteristics: Logistics Engineering / Supportability",
  s: "What does logistics engineering (integrated product support) aim to achieve?",
  o: [
    ["Efficient transport and delivery of finished units from the factory to the customer's sites.",
      "Transport is one element, but logistics covers the whole support system."],
    ["Optimal design of the warehouses and stores used to hold the system's spare parts.",
      "Too narrow."],
    ["The smallest possible maintenance workforce, regardless of the effect on availability.",
      "Staffing is traded against availability and cost, not minimized in isolation."],
    ["Designing the system and its support system together so it can be sustained affordably.",
      "Correct. Spares, tools, training, technical data, facilities and supply chain are planned alongside the product; supportability is designed in."],
  ],
  a: 3,
  t: "Logistics engineering designs the product and its support system together.",
});

/* ---- Analyses and methods (5) ---- */
Q({
  id: "X22", d: "analyses", b: "understand",
  ref: "SEH5 Ch.3 — Analyses and Methods: FMEA and FTA",
  s: "How do Failure Modes and Effects Analysis (FMEA) and Fault Tree Analysis (FTA) differ?",
  o: [
    ["FMEA works bottom-up from part failure modes; FTA works top-down from an undesired event.",
      "Correct. They are complementary: FMEA finds what each failure does; FTA finds what combinations of causes could produce a specific bad outcome."],
    ["FMEA works top-down from an undesired event; FTA works bottom-up from part failure modes.",
      "This reverses them."],
    ["They are the same analysis; FTA is simply the graphical form of an FMEA worksheet.",
      "They approach the problem from opposite directions."],
    ["FMEA is used only for software, and FTA is used only for hardware components.",
      "Both apply broadly."],
  ],
  a: 0,
  t: "FMEA: bottom-up (part → effect). FTA: top-down (event → causes).",
});

Q({
  id: "X23", d: "analyses", b: "understand",
  ref: "SEH5 Ch.3 — Analyses and Methods: Modeling and Simulation",
  s: "Which statement about models and simulation is consistent with the handbook?",
  o: [
    ["A model is only useful if it represents reality completely and exactly.",
      "No model is perfect; usefulness depends on fitness for purpose."],
    ["Simulation, once validated, removes the need for any physical testing.",
      "Simulation complements testing; some evidence still needs physical tests."],
    ["Models are purposeful abstractions whose fidelity should match the question.",
      "Correct. 'All models are wrong, some are useful' — fitness for purpose is key, and models support analysis, verification, validation and training."],
    ["Models are used during the Concept stage and discarded once design begins.",
      "Models are used across the life cycle."],
  ],
  a: 2,
  t: "Models are purposeful abstractions — match fidelity and validity to the question.",
});

Q({
  id: "X24", d: "analyses", b: "remember",
  ref: "SEH5 Ch.3 — Analyses and Methods: Digital Engineering / Digital Twin",
  s: "What is a digital twin?",
  o: [
    ["A complete backup copy of the project's engineering data held at a second site.",
      "A backup isn't linked to a physical instance's state."],
    ["A second physical prototype built in parallel to de-risk qualification testing.",
      "A digital twin is virtual."],
    ["The CAD model of the design, used during development to produce drawings.",
      "A CAD model alone isn't updated from the real asset in operation."],
    ["A virtual model of a specific physical instance, kept updated with data from it.",
      "Correct. The ongoing connection with the real instance (used to monitor, analyze and predict its behavior) distinguishes a digital twin from an ordinary model."],
  ],
  a: 3,
  t: "Digital twin = virtual model of a specific real instance, kept updated with its data.",
});

Q({
  id: "X25", d: "analyses", b: "understand",
  ref: "SEH5 Ch.3 — Analyses and Methods: Interface Management",
  s: "What is the main purpose of interface management across the life cycle?",
  o: [
    ["To identify, define, control and verify interfaces so separately built elements work together.",
      "Correct. Interface control documents and working groups keep both sides consistent as designs evolve."],
    ["To design the system's graphical user interface to be consistent and easy to learn.",
      "GUI design is one small type of interface."],
    ["To manage communication between the acquirer's and the supplier's project managers.",
      "Not the technical meaning."],
    ["To eliminate all interfaces by integrating functions into as few elements as possible.",
      "Minimizing complexity helps, but interfaces are necessary."],
  ],
  a: 0,
  t: "Interface management: identify, define, control, verify — both sides, all life.",
});

Q({
  id: "X26", d: "analyses", b: "understand",
  ref: "SEH5 Ch.3 — Loss-Driven Systems Engineering",
  s: "What is the main idea behind 'loss-driven' systems engineering in the handbook?",
  o: [
    ["Accepting some financial losses early in development in order to save money in later stages.",
      "That is not what the term means."],
    ["Treating safety, security, resilience and reliability together, as ways of preventing unacceptable losses.",
      "Correct. These characteristics share concepts (losses, hazards/threats, adversity) and benefit from integrated analysis rather than silos."],
    ["Designing the system only against its single most likely failure, to keep the analysis manageable.",
      "Loss-driven SE considers a broad range of adverse events."],
    ["Reducing verification scope wherever the expected loss from a defect is small.",
      "Unrelated."],
  ],
  a: 1,
  t: "Loss-driven SE: treat safety, security, resilience, reliability together through the lens of preventing losses.",
});
