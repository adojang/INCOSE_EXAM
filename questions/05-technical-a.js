/* Chapter 2 — Technical Processes, part A: Business or Mission Analysis → System Analysis (30) */

/* ---- Business or Mission Analysis (4) ---- */
Q({
  id: "T01", d: "technical", b: "remember",
  ref: "SEH5 Ch.2 — Technical Processes: Business or Mission Analysis",
  s: "What is the purpose of the Business or Mission Analysis process?",
  o: [
    ["To transform the stakeholders' view of needed capabilities into a technical view of a solution.",
      "That is System Requirements Definition, which comes later."],
    ["To define the problem or opportunity, characterize the solution space, and identify solution classes.",
      "Correct. BMA frames the business or mission problem before any system is specified, keeping the solution space open."],
    ["To provide evidence that the system, in use, fulfils its business or mission objectives.",
      "That is Validation."],
    ["To define the stakeholder needs and requirements for a system in a defined environment.",
      "That is Stakeholder Needs and Requirements Definition, which follows BMA."],
  ],
  a: 1,
  t: "BMA = define the problem/opportunity and the solution space before jumping to solutions.",
});

Q({
  id: "T02", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: Business or Mission Analysis (ConOps vs OpsCon)",
  s: "How does a Concept of Operations (ConOps) differ from an Operational Concept (OpsCon)?",
  o: [
    ["A ConOps states the organization's intent for its overall operations; an OpsCon describes how one system will be used.",
      "Correct. ConOps is enterprise-level, typically produced by leadership during BMA; OpsCon is developed in Stakeholder Needs and Requirements Definition for the SoI, from the users' perspective."],
    ["They are interchangeable terms; the handbook uses both for the same user-oriented description.",
      "The handbook distinguishes them by level and purpose."],
    ["A ConOps is written by the supplier during design; an OpsCon is written by the acquirer beforehand.",
      "Authorship isn't the defining difference; level of focus is."],
    ["An OpsCon describes the whole enterprise's operations; a ConOps describes how one system is used.",
      "This reverses them."],
  ],
  a: 0,
  t: "ConOps = enterprise/organization intent (BMA). OpsCon = how this system will be used (SNRD).",
});

Q({
  id: "T03", d: "technical", b: "apply",
  ref: "SEH5 Ch.2 — Technical Processes: Business or Mission Analysis",
  s: "A city council notices growing congestion and asks engineers to explore whether the answer is better public transport, road changes, remote-working incentives, or something else. Which process is this?",
  o: [
    ["System Requirements Definition", "No system has been chosen yet, so there is nothing to specify."],
    ["System Architecture Definition", "Architecture defines a chosen system's structure; here the solution class is still open."],
    ["Business or Mission Analysis", "Correct. Framing the problem and considering alternative solution classes (including non-materiel ones) is BMA."],
    ["Stakeholder Needs and Requirements Definition", "SNRD elaborates needs for a system once the solution class is chosen; here the council hasn't yet decided what kind of solution it wants."],
  ],
  a: 2,
  t: "Solution class still open (maybe not even a new system)? You're in Business or Mission Analysis.",
});

Q({
  id: "T04", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: Business or Mission Analysis",
  s: "Why is it important in Business or Mission Analysis to avoid committing to a specific solution too early?",
  o: [
    ["Because the choice of solution belongs to the supplier, and the acquirer must stay neutral.",
      "Who chooses isn't the issue; premature commitment is."],
    ["Because ISO/IEC/IEEE 15288 forbids naming solutions before the Development stage begins.",
      "No such rule exists."],
    ["Because leaving the solution open reduces the documentation needed at the first gate.",
      "It usually requires more thinking, not less."],
    ["Because early commitment can exclude better options before the problem is understood.",
      "Correct. Keeping the solution space open (including non-materiel options) avoids solving the wrong problem or missing a better option."],
  ],
  a: 3,
  t: "Understand the problem before picking the solution.",
});

/* ---- Stakeholder Needs and Requirements Definition (7) ---- */
Q({
  id: "T05", d: "technical", b: "remember",
  ref: "SEH5 Ch.2 — Technical Processes: Stakeholder Needs and Requirements Definition",
  s: "What is the purpose of the Stakeholder Needs and Requirements Definition process?",
  o: [
    ["To define stakeholder needs and requirements for a system providing needed capabilities in a defined environment.",
      "Correct. It identifies stakeholders, elicits needs, develops life cycle concepts (e.g., OpsCon) and transforms needs into stakeholder requirements."],
    ["To transform the stakeholder view into a technical view of a solution that the design must meet.",
      "That's System Requirements Definition — the technical (supplier) view."],
    ["To define the business or mission problem, characterize the solution space and solution classes.",
      "That's Business or Mission Analysis, which precedes SNRD."],
    ["To provide objective evidence that stakeholders' needs are fulfilled by the system in operation.",
      "That's Validation."],
  ],
  a: 0,
  t: "SNRD: who the stakeholders are, what they need, and their requirements in their own terms.",
});

Q({
  id: "T06", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: Stakeholder Needs and Requirements Definition (life cycle concepts)",
  s: "Besides the operational concept, which other life cycle concepts should be developed with stakeholders?",
  o: [
    ["Only a marketing concept, since the OpsCon already covers every technical life cycle concern.",
      "Marketing may matter but the handbook lists broader life cycle concepts."],
    ["Only a test concept, because verification is the only other stage with stakeholder needs.",
      "Test is only one area; many life cycle stages need concepts."],
    ["Concepts for acquisition, deployment, support and retirement, among others.",
      "Correct. Stakeholders in every life cycle stage (production, deployment, support, disposal) have needs that must be captured early."],
    ["None — the operational concept is sufficient; other stages are handled during design.",
      "Ignoring other life cycle stages leads to missed needs (e.g., maintainers, disposal)."],
  ],
  a: 2,
  t: "Capture concepts for the whole life: acquisition, deployment, operation, support, retirement.",
});

Q({
  id: "T07", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: Stakeholder Needs and Requirements Definition (needs vs requirements)",
  s: "What is the relationship between stakeholder needs and stakeholder requirements?",
  o: [
    ["They are the same statements; 'requirement' is simply the contractual name for a need.",
      "They differ in form and purpose."],
    ["Needs are written by engineers from analysis; requirements are written by users in their own words.",
      "Typically the other way round in origin — needs come from stakeholders; requirements are formalized with engineering help."],
    ["Needs apply to the operational stage only, while requirements apply to all other stages.",
      "Both span the whole life cycle."],
    ["Needs, in stakeholders' terms, are transformed into structured, verifiable requirements.",
      "Correct. Needs are the source; requirements formalize them (e.g., 'The system shall…'), keeping traceability back to the needs."],
  ],
  a: 3,
  t: "Needs → (analysis, transformation) → requirements, with traceability back.",
});

Q({
  id: "T08", d: "technical", b: "apply",
  ref: "SEH5 Ch.2 — Technical Processes: Stakeholder Needs and Requirements Definition (identifying stakeholders)",
  s: "A team gathers needs from the customer and end users of a new medical device but forgets about hospital maintenance staff and the regulator. What is the most likely consequence?",
  o: [
    ["Little effect, because maintainers and regulators adapt to whatever the users have specified.",
      "Maintainers and regulators are stakeholders with legitimate, often mandatory, needs."],
    ["Missed requirements such as maintainability and certification emerge late, causing rework.",
      "Correct. Stakeholders across the whole life cycle, including regulators and maintainers, must be identified early."],
    ["Faster certification, because fewer stakeholder requirements need to be demonstrated.",
      "Ignoring the regulator tends to delay certification."],
    ["Lower life cycle cost, because the design is optimized for the users' needs alone.",
      "Late discovery of unmet needs increases cost."],
  ],
  a: 1,
  t: "Miss a stakeholder → miss their requirements → late surprises.",
});

Q({
  id: "T09", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: Stakeholder Needs and Requirements Definition (conflicting needs)",
  s: "Two stakeholder groups have conflicting needs (lowest cost vs. highest capability). How should this be handled?",
  o: [
    ["Adopt the position of the most senior stakeholder, since they carry the final accountability.",
      "Seniority alone ignores the value and consequences of the trade-off."],
    ["Record both needs as requirements and let the design team find a solution that satisfies both.",
      "If the needs genuinely conflict, this creates infeasible requirements and hides the decision."],
    ["Make the trade-offs visible and resolve them with the stakeholders, recording the rationale.",
      "Correct. Resolving conflicts early and transparently (e.g., via prioritization and decision management) is a key SNRD activity."],
    ["Defer the conflict until validation, when real performance data will settle the question.",
      "Deferring conflicts makes them far more costly to resolve."],
  ],
  a: 2,
  t: "Conflicting needs are resolved with stakeholders, transparently, with recorded rationale.",
});

Q({
  id: "T10", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: Stakeholder Needs and Requirements Definition (validation criteria)",
  s: "Why should validation criteria (such as MOEs) be defined together with stakeholder requirements?",
  o: [
    ["So stakeholders agree up front how operational success will be judged.",
      "Correct. Defining how you'll know the needs are met, early, prevents disputes at validation time and guides later validation."],
    ["Because system verification cannot begin until the MOEs have been measured in the field.",
      "Verification is against system requirements; validation criteria are about stakeholder needs and intended use."],
    ["So the contract price can be fixed before the supplier starts any design work.",
      "Pricing is not the purpose."],
    ["Because validation criteria replace the need for separate stakeholder requirements.",
      "They complement requirements; they don't replace them."],
  ],
  a: 0,
  t: "Agree early how success will be judged (MOEs, validation criteria).",
});

Q({
  id: "T11", d: "technical", b: "remember",
  ref: "SEH5 Ch.2 — Technical Processes: Stakeholder Needs and Requirements Definition (elicitation techniques)",
  s: "Which set lists common techniques for eliciting stakeholder needs?",
  o: [
    ["Earned value analysis, cost and schedule performance indices", "These are project control measures."],
    ["Interviews, workshops, observation, scenarios, surveys, prototypes", "Correct. A mix of techniques helps uncover stated and unstated needs."],
    ["Functional and physical configuration audits and inspections", "These are CM audits and a verification method."],
    ["Fault tree analysis, FMEA and reliability block diagrams", "These are safety/reliability analyses, not primary elicitation techniques."],
  ],
  a: 1,
  t: "Elicit with interviews, workshops, observation, scenarios, surveys and prototypes.",
});

/* ---- System Requirements Definition (8) ---- */
Q({
  id: "T12", d: "technical", b: "remember",
  ref: "SEH5 Ch.2 — Technical Processes: System Requirements Definition",
  s: "What is the purpose of the System Requirements Definition process?",
  o: [
    ["To transform the stakeholders' view of desired capabilities into a technical view of a solution.",
      "Correct. System requirements describe what the system must do and how well, in technical terms, without prescribing the design."],
    ["To generate architecture alternatives and select one that frames stakeholder concerns.",
      "That is System Architecture Definition."],
    ["To provide sufficient detailed data about the system elements to enable implementation.",
      "That is Design Definition."],
    ["To identify the stakeholders and elicit their needs for the system across its life.",
      "Eliciting needs is Stakeholder Needs and Requirements Definition."],
  ],
  a: 0,
  t: "System Requirements Definition: stakeholder view → technical view (the 'what', not the 'how').",
});

Q({
  id: "T13", d: "technical", b: "apply",
  ref: "SEH5 Ch.2 — Technical Processes: System Requirements Definition (characteristics of good requirements)",
  s: "Which requirement statement is best written?",
  o: [
    ["The system shall be user-friendly and shall respond fast to all user queries under normal conditions.",
      "Not singular (two requirements in one) and not verifiable ('user-friendly', 'fast', 'normal' are vague)."],
    ["The system should try to return search results quickly, where possible, even during peak periods.",
      "'Should', 'try', 'quickly' and 'where possible' make it ambiguous and unverifiable."],
    ["The system shall use a 3.2 GHz quad-core processor so that search results are displayed rapidly.",
      "This prescribes an implementation (design) rather than stating the needed performance, and 'rapidly' is still vague."],
    ["The system shall display search results within 2 seconds of query submission at OpsCon peak load.",
      "Correct. It is singular, measurable, verifiable, states conditions, and states what is needed rather than how."],
  ],
  a: 3,
  t: "Good requirement: singular, unambiguous, verifiable, feasible, necessary — states 'what', with conditions.",
});

Q({
  id: "T14", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: System Requirements Definition (characteristics of requirements)",
  s: "Which characteristic means a requirement statement addresses one and only one thing?",
  o: [
    ["Feasible", "Feasible means it can be achieved within constraints."],
    ["Singular", "Correct. A singular requirement states a single capability or characteristic, so it can be traced and verified independently."],
    ["Complete", "Complete means it contains enough information to be understood and verified without needing more."],
    ["Consistent", "Consistency is a property of a set of requirements (no conflicts)."],
  ],
  a: 1,
  t: "Singular = one thing per requirement. Watch for 'and'/'or' combining requirements.",
});

Q({
  id: "T15", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: System Requirements Definition (traceability)",
  s: "What is the main benefit of maintaining bidirectional traceability between requirements levels?",
  o: [
    ["It reduces the total number of requirements needed at each level of the hierarchy.",
      "Traceability doesn't reduce count."],
    ["It removes the need to verify lower-level requirements that trace to verified parents.",
      "Traceability links requirements to verification; it doesn't replace it."],
    ["It shows every requirement is justified and satisfied, and enables change impact analysis.",
      "Correct. Upward traces show why a requirement exists (no gold-plating); downward traces show how it's met; both make impact analysis possible."],
    ["It is only needed for regulatory submissions such as safety cases and certification.",
      "It's valuable on all projects, not only regulated ones."],
  ],
  a: 2,
  t: "Traceability up = why it exists; down = how it's met; both = impact analysis.",
});

Q({
  id: "T16", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: System Requirements Definition (derived requirements)",
  s: "What is a derived requirement?",
  o: [
    ["A requirement reused from a previous similar project's specification.", "Reused requirements are not necessarily derived."],
    ["A requirement stated explicitly by a stakeholder during elicitation.", "Explicit stakeholder statements are the source, not derived."],
    ["A requirement whose verification is inferred from another requirement's results.", "That describes verification by similarity or inheritance, not a derived requirement."],
    ["A requirement arising from analysis, design decisions or decomposition.",
      "Correct. Derived requirements aren't stated by stakeholders, but still need traceability to their source (a parent requirement or decision)."],
  ],
  a: 3,
  t: "Derived requirements come from analysis/design decisions — they still need a trace to their rationale.",
});

Q({
  id: "T17", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: System Requirements Definition (requirement types)",
  s: "'The enclosure shall be made from material compliant with regulation X' is best categorized as which type of requirement?",
  o: [
    ["A functional requirement", "Functional requirements state what the system must do (a function)."],
    ["A constraint (design constraint)", "Correct. Constraints restrict the design solution (materials, standards, regulations) rather than stating a function or performance."],
    ["A performance requirement", "Performance requirements state how well a function must be performed."],
    ["An interface requirement", "Interface requirements define interactions with other systems or elements."],
  ],
  a: 1,
  t: "Types: functional (what), performance (how well), interface, constraints (limits on the solution), quality/'-ility'.",
});

Q({
  id: "T18", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: System Requirements Definition (requirements verification vs validation)",
  s: "In requirements work, what is the difference between verifying and validating a requirement?",
  o: [
    ["Verifying checks it is well-formed; validating checks it expresses the real need.",
      "Correct. Requirement verification = clear, singular, verifiable, etc.; validation = the right requirement. The same 'thing right / right thing' distinction applies as for systems."],
    ["Verifying means testing the built system; validating means reviewing the document.",
      "Both can apply to requirement statements themselves, before any system exists."],
    ["They are two names for the same review, performed at the requirements review.",
      "They answer different questions."],
    ["Validating is done only by suppliers; verifying is done only by customers.",
      "Either party can be involved in either."],
  ],
  a: 0,
  t: "Requirement verification = well-formed? Requirement validation = the right requirement for the need?",
});

Q({
  id: "T19", d: "technical", b: "apply",
  ref: "SEH5 Ch.2 — Technical Processes: System Requirements Definition (implementation-free requirements)",
  s: "A system requirement says: 'The system shall use a hydraulic actuator to open the door.' Why might a systems engineer challenge it?",
  o: [
    ["Because it does not include a unique identifier, rationale and priority attribute.",
      "Attributes are good practice, but the core problem is the content of the statement."],
    ["Because requirements should use 'will' rather than 'shall' for system capabilities.",
      "'Shall' is the correct form for requirements."],
    ["Because it prescribes a solution instead of stating the needed capability and performance.",
      "Correct. Unless it's a genuine constraint, it limits the solution space; better to state what is needed (e.g., open within 3 s, force limits) so alternatives can be traded."],
    ["Because it cannot be verified by any of the standard verification methods.",
      "It is actually verifiable by inspection; the problem is that it's a design choice at the wrong level."],
  ],
  a: 2,
  t: "Requirements state what and how well; design decides how — unless it's a real constraint.",
});

/* ---- System Architecture Definition (6) ---- */
Q({
  id: "T20", d: "technical", b: "remember",
  ref: "SEH5 Ch.2 — Technical Processes: System Architecture Definition",
  s: "What is the purpose of the System Architecture Definition process?",
  o: [
    ["To provide sufficient detailed data about the elements to enable their implementation.",
      "That's Design Definition."],
    ["To generate and select architecture alternatives, expressed in consistent views and models.",
      "Correct. It selects one or more alternatives that frame stakeholder concerns and meet system requirements, defining the system's fundamental organization."],
    ["To provide a rigorous basis of data and information to aid technical decision-making.",
      "That's System Analysis, which supports architecture but is a separate process."],
    ["To synthesize system elements into a realized system that satisfies the requirements.",
      "That's Integration."],
  ],
  a: 1,
  t: "Architecture = alternatives → selection → expressed in consistent views that address stakeholder concerns.",
});

Q({
  id: "T21", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: System Architecture Definition (viewpoints and views, ISO/IEC/IEEE 42010)",
  s: "In architecture description practice (ISO/IEC/IEEE 42010), what is a viewpoint?",
  o: [
    ["The conventions for constructing and using a view to frame particular stakeholder concerns.",
      "Correct. A viewpoint is the template (model kinds, notations, techniques); a view is the actual content for your system that addresses those concerns."],
    ["The actual set of diagrams and models describing your system from one perspective.",
      "That's a view — the instance, not the conventions."],
    ["A stakeholder's documented opinion of the proposed architecture, recorded at a review.",
      "Opinions are not viewpoints in this sense."],
    ["The physical location from which operators observe and control the system in use.",
      "Not related."],
  ],
  a: 0,
  t: "Viewpoint = the rules/template; view = the instance for your system addressing concerns.",
});

Q({
  id: "T22", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: System Architecture Definition (logical vs physical)",
  s: "What distinguishes a logical (functional) architecture from a physical architecture?",
  o: [
    ["The logical architecture is a throwaway sketch that is discarded once the physical design exists.",
      "It remains valuable for traceability and change analysis."],
    ["The logical architecture covers software elements, while the physical architecture covers hardware.",
      "Logical architecture is technology-independent, not software-only."],
    ["The physical architecture shows cabling and connectors; the logical one shows everything else.",
      "Physical architecture covers all physical elements and their interfaces, not just wiring."],
    ["The logical one describes functions independent of technology; the physical one allocates them to elements.",
      "Correct. Separating the two allows trade-offs of physical solutions against stable functional needs."],
  ],
  a: 3,
  t: "Logical = what functions and flows (technology-free). Physical = which elements implement them.",
});

Q({
  id: "T23", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: System Architecture Definition vs Design Definition",
  s: "How does architecture differ from design in the handbook?",
  o: [
    ["Architecture is carried out by project managers, while design is carried out by engineers.",
      "Both are engineering activities."],
    ["Architecture gives the fundamental structure and principles; design gives details for implementation.",
      "Correct. Architecture is more abstract and conceptual (elements and their relationships); design is more concrete and implementation-oriented."],
    ["Architecture applies to the software elements; design applies to the hardware elements.",
      "Both apply to all kinds of elements."],
    ["There is no difference; the handbook treats them as a single combined process.",
      "The standard defines them as separate processes."],
  ],
  a: 1,
  t: "Architecture = essential structure and principles. Design = detailed characteristics to build.",
});

Q({
  id: "T24", d: "technical", b: "remember",
  ref: "SEH5 Ch.2 — Technical Processes: System Architecture Definition (architecture frameworks)",
  s: "What is an architecture framework (e.g., DoDAF, MODAF/NAF, TOGAF)?",
  o: [
    ["A structural frame that mechanically supports and houses the system's hardware.", "Not the SE meaning."],
    ["A software modeling tool used to draw and store architecture diagrams.", "Tools may implement frameworks, but a framework is a set of conventions."],
    ["A set of conventions and viewpoints for describing architectures in a community.",
      "Correct. Frameworks standardize how architectures are described so they can be compared and integrated."],
    ["A contract template for procuring architecture services from specialist firms.", "Not related."],
  ],
  a: 2,
  t: "Architecture framework = standard set of viewpoints and conventions for a community.",
});

Q({
  id: "T25", d: "technical", b: "apply",
  ref: "SEH5 Ch.2 — Technical Processes: System Architecture Definition (interfaces)",
  s: "Why is interface definition a key concern during architecture definition?",
  o: [
    ["Because interfaces are where elements interact, and where many integration problems arise.",
      "Correct. Defining interfaces early (and managing them) reduces integration risk and supports parallel development."],
    ["Because interfaces are the cheapest part of the system and so offer quick savings.",
      "Cost isn't the reason."],
    ["Because interfaces matter only for software, where data formats must be agreed.",
      "Mechanical, electrical, thermal, data and human interfaces all matter."],
    ["Because interfaces can then be left to be finalized during integration testing.",
      "That's too late; problems would be discovered at the most expensive point."],
  ],
  a: 0,
  t: "Interfaces are where systems fail — define and manage them early.",
});

/* ---- Design Definition (3) ---- */
Q({
  id: "T26", d: "technical", b: "remember",
  ref: "SEH5 Ch.2 — Technical Processes: Design Definition",
  s: "What is the purpose of the Design Definition process?",
  o: [
    ["To provide enough detailed data about the elements to enable implementation.",
      "Correct. Design definition establishes design characteristics and enablers, consistent with the architecture, so elements can be built, bought or coded."],
    ["To generate architecture alternatives and express them in consistent views.",
      "That's System Architecture Definition."],
    ["To realize each specified system element by fabrication, coding or purchase.",
      "That's Implementation."],
    ["To transform stakeholder requirements into a technical view of the solution.",
      "That's System Requirements Definition."],
  ],
  a: 0,
  t: "Design Definition gives implementers enough detail to realize each element.",
});

Q({
  id: "T27", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: Design Definition (make, buy, reuse)",
  s: "During design definition, the team decides whether each system element should be developed, bought off-the-shelf, or reused. What should this decision consider?",
  o: [
    ["Mainly the unit purchase price, since integration and support costs are similar for all options.",
      "Purchase price alone ignores integration, support, obsolescence and risk, which differ a lot between options."],
    ["Mainly the preference of the lead engineer, who is accountable for the element's design.",
      "Personal preference is not an objective basis."],
    ["Mainly whether the element can be verified, since all options perform similarly once integrated.",
      "All options must be verifiable; it's not the deciding factor alone."],
    ["Performance, life cycle cost, schedule, risk, supportability and architectural fit.",
      "Correct. Make/buy/reuse decisions are multi-criteria trade-offs, often using decision management."],
  ],
  a: 3,
  t: "Make/buy/reuse = a life-cycle trade-off, not just a price comparison.",
});

Q({
  id: "T28", d: "technical", b: "apply",
  ref: "SEH5 Ch.2 — Technical Processes: Design Definition",
  s: "Detailed drawings, software unit designs and specifications for each element are produced so that manufacturing and coding can begin. Which process produces these?",
  o: [
    ["System Architecture Definition", "Architecture is more abstract; this level of detail comes from design definition."],
    ["Implementation", "Implementation uses these outputs to realize the element."],
    ["Design Definition", "Correct. Its outputs are the detailed design artifacts needed for implementation."],
    ["System Requirements Definition", "Requirements state what is needed; drawings and unit designs state how."],
  ],
  a: 2,
  t: "Detailed design artifacts ready for build → Design Definition.",
});

/* ---- System Analysis (2) ---- */
Q({
  id: "T29", d: "technical", b: "remember",
  ref: "SEH5 Ch.2 — Technical Processes: System Analysis",
  s: "What is the purpose of the System Analysis process?",
  o: [
    ["To collect, analyze and report objective data on project and process performance.",
      "That's Measurement."],
    ["To provide a rigorous basis of data and information to aid technical decisions.",
      "Correct. System Analysis provides quantitative evidence (performance, cost, risk, effectiveness) for other processes' decisions across the life cycle."],
    ["To verify every system requirement using the analysis verification method.",
      "Analysis is one verification method, but System Analysis supports decisions broadly."],
    ["To define the business or mission problem and characterize the solution space.",
      "That's Business or Mission Analysis."],
  ],
  a: 1,
  t: "System Analysis supplies the rigorous data that decisions need.",
});

Q({
  id: "T30", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: System Analysis (model validity)",
  s: "Before relying on a simulation to support a design decision, what should the analyst confirm?",
  o: [
    ["That the simulation tool is an industry-leading product with a large user base.",
      "Popularity says nothing about validity for this question."],
    ["That the simulation results agree with the design option the team already prefers.",
      "That would be confirmation bias."],
    ["That the model runs fast enough to evaluate every possible design combination.",
      "Speed is useful but doesn't make the results trustworthy."],
    ["That the model's assumptions, fidelity and validity suit the question being asked.",
      "Correct. Analysis results are only as good as the model; assumptions, validity and uncertainty must be checked and recorded."],
  ],
  a: 3,
  t: "Check model assumptions and validity before trusting results.",
});
