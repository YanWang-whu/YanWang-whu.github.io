const torporQuestions = [
    'How do hibernators enter torpor?',
    'What maintains torpor and its timing?',
    'How is whole-body homeostasis protected?',
    'Which neural or metabolic switches matter?',
    'How can the state be measured and controlled?',
    'Can torpor be induced?',
    'What protective effects emerge?',
    'What changes across species?'
  ];

  const torporAuthors = [
  {
    "id": "wangtf",
    "name": "Tongfei Wang",
    "team": "team-wangtf",
    "image": "life/researchers/tongfei-wang.jpg",
    "role": "Principal investigator at CIBR in Beijing, studying neural control of body temperature and energy metabolism.",
    "connection": "I visited Prof. Wang at CIBR and discussed his work on torpor. I was especially interested in how his lab connects molecular questions with physiological measurements, from receptor studies to wireless temperature recording. The visit gave me a clearer sense of the experiments behind the papers I had been reading.",
    "profile": "https://cibr.ac.cn/teamDetail/cibrTeamteam/0ec7d315941e4c0aba957b803fb67c32/%E7%8E%8B%E5%90%8C%E9%A3%9E"
  },
  {
    "id": "wangsq",
    "name": "Shiqiang Wang",
    "team": "team-wangsq",
    "image": "life/researchers/shiqiang-wang.jpg",
    "role": "Professor at Peking University, working on calcium signaling, cardiac physiology, and hibernation.",
    "connection": "During the Peking University summer program, I spent nearly three hours talking with Prof. Wang about hibernation, education, and possible research directions. He explained his group's ground-squirrel work and told me about Zhao Yibing's earlier research. Our discussion drew my attention to what the heart and other organs have to maintain while an animal is in torpor.",
    "profile": "https://www.bio.pku.edu.cn/homes/Index/news_cont_jl/16/19.html"
  },
  {
    "id": "sunagawa",
    "name": "Genshiro A. Sunagawa",
    "team": "team-sunagawa",
    "image": "life/researchers/genshiro-sunagawa.jpg",
    "role": "Team Director of the Laboratory for Hibernation Biology at RIKEN.",
    "connection": "I follow his group's work from Q-neuron induction to measurements in other organs. The kidney-injury and imaging studies are useful places to ask whether an induced state changes tissue function as well as temperature.",
    "profile": "https://www.bdr.riken.jp/en/research/labs/sunagawa-g/index.html"
  },
  {
    "id": "hrvatin",
    "name": "Sinisa Hrvatin",
    "team": "team-hrvatin",
    "image": "life/researchers/sinisa-hrvatin.jpg",
    "role": "Whitehead Institute Member and Assistant Professor of Biology at MIT, studying torpor and hibernation.",
    "connection": "His group's work connects the mouse neurons involved in torpor with questions about fuel use, tissue damage, and aging. I am interested in how those effects can be separated experimentally when temperature, metabolism, and feeding all change together.",
    "profile": "https://www.hhmi.org/scientists/sinisa-hrvatin"
  },
  {
    "id": "senmiao",
    "name": "Senmiao Sun",
    "team": "team-hrvatin",
    "image": "life/researchers/senmiao-sun.jpg",
    "role": "Postdoctoral Scholar at Stanford and co-first author of the 2020 Nature study on neurons that regulate mouse torpor.",
    "connection": "I first heard Dr. Sun in an online lecture about induced torpor. We later exchanged emails about regulation outside the brain, possible protective effects, and other groups working in the field. He took time to answer my questions, which helped me decide what to read next.",
    "profile": "https://med.stanford.edu/profiles/senmiao-sun"
  },
  {
    "id": "machado",
    "name": "Natalia Machado",
    "team": "team-machado",
    "image": "life/researchers/natalia-machado.jpg",
    "role": "Assistant Professor in Neurology at Harvard Medical School and Staff Scientist at Beth Israel Deaconess Medical Center.",
    "connection": "Her work makes me think about fever and torpor together. I am particularly interested in how related preoptic circuits can support such different responses to infection, food shortage, and other challenges.",
    "profile": "https://brain.harvard.edu/people/natalia-machado/"
  },
  {
    "id": "gracheva",
    "name": "Elena Gracheva",
    "team": "team-gracheva",
    "image": "life/researchers/elena-gracheva.jpg",
    "role": "Professor of Neuroscience and of Cellular & Molecular Physiology at Yale School of Medicine.",
    "connection": "Her lab's ground-squirrel studies bring in questions that are easy to miss in an induction experiment: how an animal conserves water, tolerates cold, and resumes activity. I read this work alongside mouse studies to understand which adaptations an induced state may still lack.",
    "profile": "https://medicine.yale.edu/profile/elena-gracheva/"
  }
];

  const torporPapers = [
  {
    "year": "2026",
    "question": 1,
    "team": "team-other",
    "label": "Rahaman et al. · Ono lab",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/42173901/",
    "title": "GABAergic projections from the suprachiasmatic nucleus to the preoptic area regulate the timing of torpor in mice",
    "citation": "Rahaman, S. M., Miyazaki, S., Tsai, C.-T. et al. Nature Communications 17, 6761 (2026).",
    "insight": "SCN output organizes the timing of fasting-induced torpor; activating SCN-to-POA GABAergic projections suppresses torpor.",
    "note": "This makes time of day more than a detail in the methods. A pathway that controls when torpor can occur may be doing something different from one that lowers metabolism. That distinction seems worth testing when comparing induction methods. The experiments were in female mice; the timing rules in males and seasonal hibernators remain a separate question.",
    "species": "Female mice",
    "intervention": "Manipulation of SCN GABAergic and Avp projections to the POA.",
    "caveat": "These experiments distinguish the timing of torpor from the mechanisms that lower metabolism.",
    "topic": "Timing",
    "doi": "10.1038/s41467-026-73374-9",
    "pmid": "42173901",
    "journal": "Nature Communications",
    "status": "Peer-reviewed research",
    "authors": [
      "Sheikh Mizanur Rahaman",
      "Shota Miyazaki",
      "Chang-Ting Tsai",
      "Akihiro Yamanaka",
      "Chi Jung Hung",
      "Michihiro Mieda",
      "Takahiro J Nakamura",
      "Hiroshi Yamaguchi",
      "Daisuke Ono"
    ],
    "correspondingAuthor": "Daisuke Ono"
  },
  {
    "year": "2026",
    "question": 3,
    "team": "team-hrvatin",
    "label": "Roessler et al.",
    "source": "Preprint",
    "url": "https://pubmed.ncbi.nlm.nih.gov/41727022/",
    "title": "A Preoptic Neurocircuit That Modulates Metabolic Flexibility",
    "citation": "Roessler et al. bioRxiv (2026).",
    "insight": "Activation shifts fuel use toward fatty acids and reduces skeletal-muscle glucose use, partly through corticosterone.",
    "note": "Which tissues get to keep using glucose when muscle switches fuel? That question interests me as much as the temperature drop. The corticosterone result suggests one hormonal route from the brain to muscle. I am also curious about how quickly the change reverses. This preprint describes an acute metabolic response, so I do not read it as evidence of long-term health benefits.",
    "species": "Mice; comparative anatomical observations do not establish primate function",
    "intervention": "Activation or silencing of torpor-associated avPOA glutamatergic/PACAP neurons.",
    "caveat": "Preprint. Acute, tissue-specific insulin resistance is not evidence of metabolic benefit or established primate function.",
    "topic": "Fuel use",
    "doi": "10.64898/2026.01.15.699760",
    "pmid": "41727022",
    "journal": "bioRxiv",
    "status": "Preprint; not peer reviewed",
    "authors": [
      "Julian M Roessler",
      "Matthew Alkire",
      "Nathan Nigrin",
      "Haorui Wang",
      "Christopher M Reid",
      "Marissa D Cortopassi",
      "Millenia Waite",
      "Brooke Linnehan",
      "Eric C Griffith",
      "Mollie Madigan",
      "Tenzin Kunchok",
      "Alexander S Banks",
      "Fabian Schulte",
      "Bukyung Kim",
      "Bo-Yeon Kim",
      "Jason K Kim",
      "Siniša Hrvatin"
    ]
  },
  {
    "year": "2026",
    "question": 3,
    "team": "team-wangtf",
    "label": "Wu et al.",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/41495223/",
    "title": "Photo-cross-linking-assisted deorphanization deciphers GPR50-L-LEN pairing in metabolism",
    "citation": "Wu et al. Nature Chemical Biology (2026).",
    "insight": "Identifies L-LEN as a GPR50 ligand and links the pathway to energy expenditure, thermogenesis and challenge-related torpor probability.",
    "note": "The ligand discovery gives a concrete starting point for testing GPR50. I am especially interested in the link between the brain and adipose tissue. The direction of the result matters: losing the pathway makes torpor more likely under a challenge. That still leaves several steps between identifying a ligand and using a drug to control entry and recovery.",
    "species": "Mice; cell and tissue assays",
    "intervention": "Photo-cross-linking ligand discovery followed by GPR50/L-LEN pathway manipulation.",
    "caveat": "Molecular/metabolic context, not an established induction method. Loss of function increasing torpor is not equivalent to therapeutic receptor targeting.",
    "topic": "Molecular control",
    "doi": "10.1038/s41589-025-02098-6",
    "pmid": "41495223",
    "journal": "Nature Chemical Biology",
    "status": "Peer-reviewed research",
    "authors": [
      "Rui Wu",
      "Na Li",
      "Zhihui Wen",
      "Ya Wang",
      "Shitian Li",
      "Hao Zhou",
      "Yuehong Huang",
      "Xiao Xie",
      "Xiaoyun Zhao",
      "Xiaohui Wang",
      "Shaoxin Tao",
      "Guoliang Chai",
      "Tongfei A Wang",
      "Zhen Li",
      "Peng R Chen",
      "Miao Jing"
    ]
  },
  {
    "year": "2026",
    "question": 5,
    "team": "team-other",
    "label": "Tong et al.",
    "source": "Preprint",
    "url": "https://www.biorxiv.org/content/10.64898/2026.04.22.719582v1",
    "title": "Identification of a neural circuit that enables safe, long-term torpor in mice",
    "citation": "Tong et al. bioRxiv (2026).",
    "insight": "Reports weeks-long torpor-like states and fewer measured recovery abnormalities than broad preoptic activation.",
    "note": "I keep coming back to the comparison with broad preoptic activation. Two methods might produce similar temperature traces and quite different recoveries. This preprint suggests that selecting a narrower population helps. The recovery tests, follow-up period, and response to repeated bouts seem as important as how many weeks the state can last; selected normal test results cannot establish general safety.",
    "species": "Mice",
    "intervention": "Sustained selective activation of GCN2-expressing preoptic neurons.",
    "caveat": "Preprint. No obvious deficits in selected assays do not establish general safety; cancer findings are model-specific.",
    "topic": "Long-duration induction",
    "doi": "10.64898/2026.04.22.719582",
    "pmid": null,
    "journal": "bioRxiv",
    "status": "Preprint; not peer reviewed",
    "authors": [
      "Kexin Tong",
      "Jingrui Yang",
      "Feixiang Yuan",
      "Min Tang",
      "Yeting Gan",
      "Shangming Wu",
      "Xinyuan Tong",
      "Peixiang Luo",
      "Shanghai Chen",
      "Hongbin Ji",
      "Feifan Guo"
    ]
  },
  {
    "year": "2026",
    "question": 6,
    "team": "team-sunagawa",
    "label": "Nomura et al.",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/41547304/",
    "title": "Metabolic positron emission tomography imaging and tumor growth inhibition during the Q neuron-induced hibernation-like state in mice",
    "citation": "Nomura et al. Biochemical and Biophysical Research Communications (2026).",
    "insight": "Reports altered tracer distribution, reduced cardiac glucose uptake and reduced growth of implanted tumors during QIH.",
    "note": "PET lets me look beyond the brain, but interpreting the signal takes care: tracer delivery changes with circulation as well as tissue uptake. The implanted-tumor result leaves me with two questions. How much depends on reduced food intake or temperature, and what happens to growth once normal physiology returns? Those would help put this mouse result in context.",
    "species": "Mice with Q-neuron-induced hypometabolism; subcutaneous tumor model",
    "intervention": "Q-neuron activation combined with metabolic PET and tumor-growth measurements.",
    "caveat": "Tracer distribution depends on circulation as well as tissue uptake; one tumor model does not establish cancer therapy.",
    "topic": "Possible applications",
    "doi": "10.1016/j.bbrc.2026.153268",
    "pmid": "41547304",
    "journal": "Biochemical and Biophysical Research Communications",
    "status": "Peer-reviewed research",
    "authors": [
      "Shoko Nomura",
      "Wakiko Arakaki",
      "Akari Kato",
      "Naomi Fujie",
      "Kiyomi Ishikawa",
      "Ayaka Wataki",
      "Hiroaki Ono",
      "Tsuyoshi Tahara",
      "Yasuhiro Wada",
      "Yasuyoshi Watanabe",
      "Hisashi Doi",
      "Genshiro A Sunagawa",
      "Hidefumi Mukai"
    ]
  },
  {
    "team": "team-other",
    "question": 1,
    "label": "Haugg et al.",
    "year": "2026",
    "url": "https://pubmed.ncbi.nlm.nih.gov/42171721/",
    "title": "Daily torpor in the Djungarian hamster (Phodopus sungorus) is orchestrated by the suprachiasmatic nucleus: evidence from immediate early gene mapping and nucleus-specific sequencing",
    "source": "PubMed",
    "insight": "Finds phase-dependent SCN activity and transcriptional changes during spontaneous daily torpor.",
    "note": "The time-matched controls matter here: a transcriptional difference during torpor could otherwise be a time-of-day effect. The hamster data also make a useful comparison with the mouse SCN studies. The proposed SCN–PVN connection still needs manipulation, and regional sequencing cannot tell us which cell types account for every expression change.",
    "species": "Djungarian hamsters",
    "intervention": "Short-photoperiod acclimation, matched torpor-phase sampling, c-Fos mapping and regional RNA sequencing.",
    "caveat": "Observational mapping and regional sequencing; proposed SCN-PVN pathway is not causally demonstrated by these assays.",
    "topic": "Timing across species",
    "doi": "10.1007/s00360-026-01675-y",
    "pmid": "42171721",
    "journal": "Journal of Comparative Physiology B",
    "status": "Peer-reviewed research",
    "authors": [
      "Elena Haugg",
      "Victoria Diedrich",
      "Ceyda Cubuk-Charalampous",
      "Janus Borner",
      "Perry Barrett",
      "Annika Herwig"
    ],
    "citation": "Haugg et al. Journal of Comparative Physiology B (2026)."
  },
  {
    "year": "2025",
    "question": 0,
    "team": "team-other",
    "label": "Cheng et al.",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/40593766/",
    "title": "Brainstem catecholaminergic neurons induce torpor during fasting by orchestrating cardiovascular and thermoregulation changes",
    "citation": "Cheng et al. Nature Communications (2025).",
    "insight": "Coordinates reductions in heart rate, thermogenesis and energy expenditure in mice; heart-rate reduction precedes cooling.",
    "note": "Heart rate falls before body temperature. That order suggests the cardiac change is not just a response to being cold. It also makes recovery interesting: do the cardiovascular and thermoregulatory outputs return in the same order? The ground-squirrel observations add a useful comparison, although the causal circuit experiments were done in mice.",
    "species": "Mice; Daurian ground squirrels for comparative observations",
    "intervention": "Activation/inhibition of ventrolateral medullary catecholaminergic neurons and projection analysis.",
    "caveat": "Ground-squirrel activity before hibernation is supporting comparative evidence, not equivalent causal induction in that species.",
    "topic": "Entry and coordination",
    "doi": "10.1038/s41467-025-61179-1",
    "pmid": "40593766",
    "journal": "Nature Communications",
    "status": "Peer-reviewed research",
    "authors": [
      "Mingxiu Cheng",
      "Meiqi Wang",
      "Liang Wang",
      "Fangfang Yin",
      "Jiayi Shen",
      "Xin Xing",
      "Yuyan Shi",
      "Zhiwei Liu",
      "Ping Wu",
      "Wenling Gao",
      "Yanyan Fan",
      "Peng Cao",
      "Cheng Zhan"
    ]
  },
  {
    "year": "2025",
    "question": 3,
    "team": "team-machado",
    "label": "Machado et al.",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/40437091/",
    "title": "Preoptic EP3R neurons constitute a two-way switch for fever and torpor",
    "citation": "Machado et al. Nature (2025).",
    "insight": "Identifies an EP3R population required for torpor and LPS fever, with prolonged responses to brief stimulation.",
    "note": "A brief stimulus produces a surprisingly long response. I am curious about what keeps these EP3R cells, or their downstream targets, in that state after the stimulus ends. Another useful comparison would be with the PACAP-, QRFP-, and TRPM2-marked populations. Some differences between papers may come from which overlapping cells were targeted, rather than entirely separate circuits.",
    "species": "Mice",
    "intervention": "Chemogenetic and optogenetic manipulation of MnPO EP3R neurons.",
    "caveat": "Fever and torpor share a marked population; this does not make every thermoregulatory response physiologically equivalent.",
    "topic": "Preoptic circuits",
    "doi": "10.1038/s41586-025-09056-1",
    "pmid": "40437091",
    "journal": "Nature",
    "status": "Peer-reviewed research",
    "authors": [
      "Natalia L S Machado",
      "Nicole Lynch",
      "Luis H A Costa",
      "David Melville",
      "Hakan Kucukdereli",
      "Satvinder Kaur",
      "Alexander S Banks",
      "Francesca Raffin",
      "Oscar D Ramirez-Plascencia",
      "Sydney Aten",
      "Janayna D Lima",
      "Sathyajit S Bandaru",
      "Richard D Palmiter",
      "Clifford B Saper"
    ]
  },
  {
    "year": "2025",
    "question": 4,
    "team": "team-wangtf",
    "label": "Shi et al.",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/40564488/",
    "title": "A Miniaturized Implantable Telemetry Biosensor for the Long-Term Dual-Modality Monitoring of Core Temperature and Locomotor Activity",
    "citation": "Shi et al. Bioengineering (2025).",
    "insight": "Reports sustained temperature and activity monitoring and agreement with video-based locomotion measurements.",
    "note": "Recording movement and core temperature together would help distinguish a short pause in activity from a sustained physiological change. Long recordings also make the return to normal easier to follow. For torpor, the missing piece is metabolism: these two signals need to be read alongside oxygen consumption and, ideally, cardiovascular measurements.",
    "species": "Small laboratory animals, including mice",
    "intervention": "Implantable wireless temperature sensor and accelerometer; bench and in vivo validation.",
    "caveat": "Instrumentation paper, not torpor induction. Temperature and movement alone cannot establish metabolic suppression.",
    "topic": "Measurement",
    "doi": "10.3390/bioengineering12060673",
    "pmid": "40564488",
    "journal": "Bioengineering",
    "status": "Peer-reviewed research",
    "authors": [
      "Wendi Shi",
      "Hao Huang",
      "Xueting Sun",
      "Qihui Jia",
      "Yu Zhou",
      "Maohua Zhu",
      "Mingqiang Tian",
      "Zhuofan Li",
      "Zepeng Zhang",
      "Tongfei A Wang",
      "Lei Zhang"
    ]
  },
  {
    "year": "2025",
    "question": 6,
    "team": "team-hrvatin",
    "label": "Jayne et al.",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/40055478/",
    "title": "A torpor-like state in mice slows blood epigenetic aging and prolongs healthspan",
    "citation": "Jayne et al. Nature Aging (2025).",
    "insight": "Reports slower epigenetic aging and improved measured healthspan; blood-clock effects were linked to reduced body temperature.",
    "note": "Temperature, feeding, and metabolic rate usually move together during torpor. The effort to separate them is the part I find most useful here. The blood-clock result points toward temperature in these experiments. I want to read that alongside the functional measurements, because a slower epigenetic clock and a longer life are different outcomes.",
    "species": "Mice",
    "intervention": "Prolonged induction of a preoptic-neuron-driven torpor-like state; comparison of temperature, calorie and metabolic effects.",
    "caveat": "Epigenetic clocks and healthspan measures do not by themselves establish lifespan extension or human benefit.",
    "topic": "Possible applications",
    "doi": "10.1038/s43587-025-00830-4",
    "pmid": "40055478",
    "journal": "Nature Aging",
    "status": "Peer-reviewed research",
    "authors": [
      "Lorna Jayne",
      "Aurora Lavin-Peter",
      "Julian Roessler",
      "Alexander Tyshkovskiy",
      "Mateusz Antoszewski",
      "Erika Ren",
      "Aleksandar Markovski",
      "Senmiao Sun",
      "Hanqi Yao",
      "Vijay G Sankaran",
      "Vadim N Gladyshev",
      "Robert T Brooke",
      "Steve Horvath",
      "Eric C Griffith",
      "Sinisa Hrvatin"
    ]
  },
  {
    "year": "2024",
    "question": 1,
    "team": "team-gracheva",
    "label": "Gibo et al.",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/41775915/",
    "title": "Frequency-modulated timer regulates torpor-arousal cycles during hibernation in distinct small mammalian hibernators",
    "citation": "Gibo et al. npj Biological Timing and Sleep (2024).",
    "insight": "A frequency-modulated model reproduces torpor-arousal patterns with short and long timescales.",
    "note": "Hibernation includes repeated returns to warmth, which makes it more puzzling than simply staying cold for a long time. This model gives a compact description of that timing. Predicting the next arousal in a new animal would be a useful test. Even a good prediction would leave open what biological process acts as the timer.",
    "species": "Syrian hamsters and thirteen-lined ground squirrels",
    "intervention": "Model selection and analysis of longitudinal body-temperature records.",
    "caveat": "A fitted timer does not identify the molecular process that generates the rhythm.",
    "topic": "Timing",
    "doi": "10.1038/s44323-024-00002-4",
    "pmid": "41775915",
    "journal": "npj Biological Timing and Sleep",
    "status": "Peer-reviewed research",
    "authors": [
      "Shingo Gibo",
      "Yoshifumi Yamaguchi",
      "Elena O Gracheva",
      "Sviatoslav N Bagriantsev",
      "Isao T Tokuda",
      "Gen Kurosawa"
    ]
  },
  {
    "year": "2024",
    "question": 2,
    "team": "team-gracheva",
    "label": "Junkins et al.",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/38325375/",
    "title": "Neural control of fluid homeostasis is engaged below 10°C in hibernation",
    "citation": "Junkins et al. Current Biology (2024).",
    "insight": "Antidiuretic neural and hormonal activity rises early during arousal, before body temperature reaches 10°C.",
    "note": "Fluid regulation is already active below 10°C, before the squirrel has finished warming up. The timing caught my attention because circulation is changing during arousal too. It raises a practical question for induced torpor: which water-conserving responses are already available in a non-hibernator, and which would need support?",
    "species": "Thirteen-lined ground squirrels",
    "intervention": "Hormone measurements, SON neural recording, RNA sequencing and pituitary-release assays across arousal.",
    "caveat": "Natural-hibernator adaptation; not evidence that non-hibernators retain the same signaling capacity in deep cold.",
    "topic": "Water balance",
    "doi": "10.1016/j.cub.2024.01.035",
    "pmid": "38325375",
    "journal": "Current Biology",
    "status": "Peer-reviewed research",
    "authors": [
      "Madeleine S Junkins",
      "Ni Y Feng",
      "Lyle A Murphy",
      "Genevieve Curtis",
      "Dana K Merriman",
      "Sviatoslav N Bagriantsev",
      "Elena O Gracheva"
    ]
  },
  {
    "team": "team-other",
    "question": 3,
    "label": "Uchino et al.",
    "year": "2024",
    "url": "https://pubmed.ncbi.nlm.nih.gov/38867187/",
    "title": "Identification of hypothermia-inducing neurons in the preoptic area and activation of them by isoflurane anesthesia and central injection of adenosine",
    "source": "PubMed",
    "insight": "Finds partial overlap between torpor-tagged preoptic neurons and cells activated by anesthesia or adenosine treatment.",
    "note": "The overlap between torpor-tagged cells and cells activated by anesthesia or adenosine is a starting point for a causal test. Inhibiting that overlapping population during each treatment could show which responses actually depend on it. Activity markers alone leave open whether the shared cells are important to the response or merely active alongside it.",
    "species": "Mice",
    "intervention": "Torpor activity-tagging, DREADD reactivation and comparison with isoflurane or central adenosine agonism.",
    "caveat": "Overlap measured with activity markers does not make anesthesia, drug hypothermia and torpor the same state.",
    "topic": "Shared preoptic responses",
    "doi": "10.1186/s12576-024-00927-2",
    "pmid": "38867187",
    "journal": "Journal of Physiological Sciences",
    "status": "Peer-reviewed research",
    "authors": [
      "Erika Uchino",
      "Ikue Kusumoto-Yoshida",
      "Hideki Kashiwadani",
      "Yuichi Kanmura",
      "Akira Matsunaga",
      "Tomoyuki Kuwaki"
    ],
    "citation": "Uchino et al. Journal of Physiological Sciences (2024)."
  },
  {
    "team": "team-other",
    "question": 6,
    "label": "Laughlin et al.",
    "year": "2024",
    "url": "https://pubmed.ncbi.nlm.nih.gov/39047808/",
    "title": "N6-cyclohexyladenosine is better than meperidine and buspirone at suppressing metabolism during TTM32 but does not improve outcome after cardiac arrest",
    "source": "PubMed",
    "insight": "Improves metabolic suppression and temperature management under the tested regimen but does not improve survival.",
    "note": "This belongs beside the positive protection studies. The treatment improves metabolic suppression during temperature management, yet survival does not improve after cardiac arrest. It makes the choice of outcome quite concrete. Temperature and metabolic rate tell us what the intervention changed; circulation, injury, and recovery tell us whether that change helped the animal.",
    "species": "Rats, including a cardiac-arrest model",
    "intervention": "CHA with peripheral adenosine blockade and atropine, compared with meperidine/buspirone during temperature management.",
    "caveat": "Preclinical negative outcome. Better control of temperature or metabolism is not sufficient evidence of therapeutic benefit.",
    "topic": "Testing benefit",
    "doi": "10.1016/j.expneurol.2024.114891",
    "pmid": "39047808",
    "journal": "Experimental Neurology",
    "status": "Peer-reviewed research",
    "authors": [
      "Bernard W Laughlin",
      "M Hoshi Sugiura",
      "Mackenzie Jenkins",
      "Chao-Yin Chen",
      "Kelly L Drew"
    ],
    "citation": "Laughlin et al. Experimental Neurology (2024)."
  },
  {
    "year": "2023",
    "question": 3,
    "team": "team-other",
    "label": "Yamaguchi et al.",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/37992720/",
    "title": "Dorsomedial and preoptic hypothalamic circuits control torpor",
    "citation": "Yamaguchi et al. Current Biology (2023).",
    "insight": "POA Trpm2-positive and DMH Vgat-positive populations are necessary for torpor entry in the tested paradigm.",
    "note": "I read the DMH result alongside Ambler's activity-tagging study, where inhibiting tagged cells did not block entry. The two experiments target populations defined in different ways, so I would compare the labels, timing, and feeding conditions first. A regional name such as DMH can hide quite different groups of neurons.",
    "species": "Mice",
    "intervention": "Whole-brain mapping, cell-type-specific silencing and viral tracing.",
    "caveat": "Results apply to the targeted populations and manipulation, not every neuron in each anatomical region.",
    "topic": "Preoptic circuits",
    "doi": "10.1016/j.cub.2023.10.076",
    "pmid": "37992720",
    "journal": "Current Biology",
    "status": "Peer-reviewed research",
    "authors": [
      "Hiroshi Yamaguchi",
      "Keith R Murphy",
      "Noriaki Fukatsu",
      "Kazuhide Sato",
      "Akihiro Yamanaka",
      "Luis de Lecea"
    ]
  },
  {
    "year": "2023",
    "question": 5,
    "team": "team-other",
    "label": "Yang et al.",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/37231250/",
    "title": "Induction of a torpor-like hypothermic and hypometabolic state in rodents by ultrasound",
    "citation": "Yang et al. Nature Metabolism (2023).",
    "insight": "Reports hypothermia and hypometabolism in mice, including prolonged feedback-controlled induction; rats showed a smaller cooling response.",
    "note": "The feedback control is the part that interests me most about this ultrasound approach. Reaching a low temperature once and holding a physiological state over time are different problems. The mouse experiments include much more information about metabolism than the rat result. Heart rate, oxygen consumption, and recovery all matter when comparing this state with natural torpor.",
    "species": "Mice; rats in a separate hypothermia demonstration",
    "intervention": "Transcranial ultrasound aimed at the POA, with closed-loop temperature feedback in mice.",
    "caveat": "The mouse evidence is more extensive than the rat evidence. TRPM2 involvement does not establish a sole mechanism or human feasibility.",
    "topic": "Ultrasound induction",
    "doi": "10.1038/s42255-023-00804-z",
    "pmid": "37231250",
    "journal": "Nature Metabolism",
    "status": "Peer-reviewed research",
    "authors": [
      "Yaoheng Yang",
      "Jinyun Yuan",
      "Rachael L Field",
      "Dezhuang Ye",
      "Zhongtao Hu",
      "Kevin Xu",
      "Lu Xu",
      "Yan Gong",
      "Yimei Yue",
      "Alexxai V Kravitz",
      "Michael R Bruchas",
      "Jianmin Cui",
      "Jonathan R Brestoff",
      "Hong Chen"
    ]
  },
  {
    "team": "team-other",
    "question": 7,
    "label": "Zhang et al.",
    "year": "2023",
    "url": "https://pubmed.ncbi.nlm.nih.gov/36583100/",
    "title": "Primate preoptic neurons drive hypothermia and cold defense",
    "source": "PubMed",
    "insight": "Produces hypothermia accompanied by increased heart rate, muscle activity and cold-defense behavior.",
    "note": "The monkeys cool down but also show cold-defense responses, including increased movement and heart rate. That is a major difference to resolve before calling the state energy-saving. Direct metabolic measurements would tell us more. This paper is useful precisely because the physiological response does not simply match the rodent result.",
    "species": "Macaques",
    "intervention": "Chemogenetic activation of excitatory preoptic neurons in anesthetized and freely moving animals.",
    "caveat": "Published online December 2022; 2023 issue. Hypothermia with active cold defense is not demonstrated torpor or coordinated hypometabolism.",
    "topic": "Primate limits",
    "doi": "10.1016/j.xinn.2022.100358",
    "pmid": "36583100",
    "journal": "The Innovation",
    "status": "Peer-reviewed research",
    "authors": [
      "Zhiting Zhang",
      "Liang Shan",
      "Yuyin Wang",
      "Wenfang Li",
      "Minqing Jiang",
      "Feng Liang",
      "Shijing Feng",
      "Zhonghua Lu",
      "Hong Wang",
      "Ji Dai"
    ],
    "citation": "Zhang et al. The Innovation (2023). Published online December 2022."
  },
  {
    "year": "2022",
    "question": 3,
    "team": "team-other",
    "label": "Ambler et al.",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/35440490/",
    "title": "Neurons in the Dorsomedial Hypothalamus Promote, Prolong, and Deepen Torpor in the Mouse",
    "citation": "Ambler et al. Journal of Neuroscience (2022).",
    "insight": "Reactivation promotes longer and deeper torpor in calorie-restricted mice; inhibition did not block entry.",
    "note": "Energy state changes what this manipulation can do. Reactivating the tagged DMH neurons promotes deeper and longer torpor in calorie-restricted mice, but does not provide an unrestricted entry switch in fed animals. That makes me curious about the fasting signals that allow the same cells to have a different effect.",
    "species": "Female mice",
    "intervention": "Reactivation or inhibition of DMH neurons tagged during natural torpor.",
    "caveat": "Activation alone was not sufficient to establish entry in fed mice; supports a modulatory role under the tested conditions.",
    "topic": "Circuit modulation",
    "doi": "10.1523/JNEUROSCI.2102-21.2022",
    "pmid": "35440490",
    "journal": "Journal of Neuroscience",
    "status": "Peer-reviewed research",
    "authors": [
      "Michael Ambler",
      "Timna Hitrec",
      "Andrew Wilson",
      "Matteo Cerri",
      "Anthony Pickering"
    ]
  },
  {
    "year": "2022",
    "question": 6,
    "team": "team-sunagawa",
    "label": "Kyo et al.",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/36590714/",
    "title": "Quiescence-inducing neurons-induced hypometabolism ameliorates acute kidney injury in a mouse model mimicking cardiovascular surgery requiring circulatory arrest",
    "citation": "Kyo et al. JTCVS Open (2022).",
    "insight": "QIH partly reduced early kidney-injury biomarkers at normothermia; cooling improved histologic injury scores.",
    "note": "The group kept at normal temperature asks a useful question: does neural suppression of metabolism help without cooling? Some early injury markers improved, while histology still favored the cooled group. With six animals per group, I would keep those outcomes separate. Later kidney function could help show what the early changes mean for recovery.",
    "species": "Transgenic mice; descending-aortic cross-clamp ischemia model",
    "intervention": "Q-neuron-induced hypometabolism tested at normothermic and hypothermic conditions.",
    "caveat": "There were six animals per group. Changes in early injury markers and tissue histology need to be considered separately.",
    "topic": "Possible applications",
    "doi": "10.1016/j.xjon.2022.11.001",
    "pmid": "36590714",
    "journal": "JTCVS Open",
    "status": "Peer-reviewed research",
    "authors": [
      "Shoichi Kyo",
      "Kozue Murata",
      "Masahide Kawatou",
      "Kenji Minatoya",
      "Genshiro A Sunagawa",
      "Hidetoshi Masumoto"
    ]
  },
  {
    "year": "2021",
    "question": 2,
    "team": "team-wangsq",
    "label": "Yang et al.",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/33785600/",
    "title": "Transcriptional regulation of intermolecular Ca2+ signaling in hibernating ground squirrel cardiomyocytes: The myocardin-junctophilin axis",
    "citation": "Yang et al. PNAS (2021).",
    "insight": "Myocardin-associated upregulation of JPH2/CAV3 tightens calcium-signaling junctions and supports excitation-contraction coupling.",
    "note": "This gives me a more concrete picture of what a hibernating heart has to maintain. The paper links gene regulation to the arrangement of calcium-signaling structures and then to cell function. How quickly can those structures adjust? Whether a non-hibernating heart can make a similar adjustment seems an important question before treating this as a transferable protective mechanism.",
    "species": "Hibernating ground squirrels; isolated cardiomyocytes",
    "intervention": "Comparison across physiological states, gene-expression manipulation, electron microscopy and calcium recording.",
    "caveat": "Cellular adaptation in a natural hibernator, not whole-animal torpor induction or an established heart-failure treatment.",
    "topic": "Organ adaptation",
    "doi": "10.1073/pnas.2025333118",
    "pmid": "33785600",
    "journal": "PNAS",
    "status": "Peer-reviewed research",
    "authors": [
      "Lei Yang",
      "Rong-Chang Li",
      "Bin Xiang",
      "Yi-Chen Li",
      "Li-Peng Wang",
      "Yun-Bo Guo",
      "Jing-Hui Liang",
      "Xiao-Ting Wang",
      "Tingting Hou",
      "Xin Xing",
      "Zeng-Quan Zhou",
      "Haihong Ye",
      "Ren-Qing Feng",
      "Edward G Lakatta",
      "Zhen Chai",
      "Shi-Qiang Wang"
    ]
  },
  {
    "year": "2021",
    "question": 3,
    "team": "team-wangtf",
    "label": "Wang et al.",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/33972431/",
    "title": "TMEM16C is involved in thermoregulation and protects rodent pups from febrile seizures",
    "citation": "Wang et al. PNAS (2021).",
    "insight": "Loss of TMEM16C impairs temperature regulation and increases susceptibility to hyperthermia-induced seizures.",
    "note": "I keep this in the background section because it studies temperature control and seizures in developing mice. The rate of warming deserves attention as well as the final temperature. It also shows why a thermoregulatory target needs to be considered in the context of neuronal excitability. It is not direct evidence for inducing torpor.",
    "species": "Rat and mouse pups",
    "intervention": "Global or cell-specific Tmem16c deletion with heat exposure.",
    "caveat": "This study concerns fever and seizures in developing animals; it does not test torpor induction.",
    "topic": "Thermoregulatory context",
    "doi": "10.1073/pnas.2023342118",
    "pmid": "33972431",
    "journal": "PNAS",
    "status": "Peer-reviewed research",
    "authors": [
      "Tongfei A Wang",
      "Chao Chen",
      "Fen Huang",
      "Shengjie Feng",
      "Jason Tien",
      "João M Braz",
      "Allan I Basbaum",
      "Yuh Nung Jan",
      "Lily Yeh Jan"
    ]
  },
  {
    "year": "2020",
    "question": 3,
    "team": "team-other",
    "label": "Zhang et al.",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/33311503/",
    "title": "Estrogen-sensitive medial preoptic area neurons coordinate torpor in mice",
    "citation": "Zhang et al. Nature Communications (2020).",
    "insight": "Activation coordinates torpor-like changes; ablation weakens fasting torpor, with sex-dependent aspects.",
    "note": "The temperature, calorimetry, heart-rate, and brain-activity measurements make it possible to judge more than cooling alone. The sex differences are also worth following up. Estrogen-sensitive cells contribute in males too, so the marker does not imply a female-only circuit. I wonder how hormonal state changes the threshold for entry.",
    "species": "Female and male mice",
    "intervention": "Activation and ablation of estrogen-sensitive medial preoptic neurons; physiological monitoring.",
    "caveat": "Estrogen sensitivity does not imply a female-only mechanism. Different effects on initiation and thermoregulation require separate interpretation.",
    "topic": "Preoptic circuits",
    "doi": "10.1038/s41467-020-20050-1",
    "pmid": "33311503",
    "journal": "Nature Communications",
    "status": "Peer-reviewed research",
    "authors": [
      "Zhi Zhang",
      "Fernando M C V Reis",
      "Yanlin He",
      "Jae W Park",
      "Johnathon R DiVittorio",
      "Nilla Sivakumar",
      "J Edward van Veen",
      "Sandra Maesta-Pereira",
      "Michael Shum",
      "India Nichols",
      "Megan G Massa",
      "Shawn Anderson",
      "Ketema Paul",
      "Marc Liesa",
      "Olujimi A Ajijola",
      "Yong Xu",
      "Avishek Adhikari",
      "Stephanie M Correa"
    ]
  },
  {
    "year": "2020",
    "question": 5,
    "team": "team-sunagawa",
    "label": "Takahashi et al.",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/32528181/",
    "title": "A discrete neuronal circuit induces a hibernation-like state in rodents",
    "citation": "Takahashi et al. Nature (2020).",
    "insight": "Induces prolonged hypothermia and hypometabolism while retaining metabolic regulation; recovery assays found no obvious abnormalities.",
    "note": "Metabolism remains regulated at the lower temperature, which is what makes this result stand out to me. The recovery measurements are another important part of the paper. I still want to know which organ-level adaptations accompany Q-neuron activation and which belong specifically to natural hibernators. Successful entry cannot answer that on its own.",
    "species": "Mice and rats",
    "intervention": "Activation of hypothalamic QRFP-expressing Q neurons.",
    "caveat": "Q-neuron-induced state is hibernation-like; mice naturally use daily torpor and are not equivalent to rats or humans.",
    "topic": "Genetic induction",
    "doi": "10.1038/s41586-020-2163-6",
    "pmid": "32528181",
    "journal": "Nature",
    "status": "Peer-reviewed research",
    "authors": [
      "Tohru M Takahashi",
      "Genshiro A Sunagawa",
      "Shingo Soya",
      "Manabu Abe",
      "Katsuyasu Sakurai",
      "Kiyomi Ishikawa",
      "Masashi Yanagisawa",
      "Hiroshi Hama",
      "Emi Hasegawa",
      "Atsushi Miyawaki",
      "Kenji Sakimura",
      "Masayo Takahashi",
      "Takeshi Sakurai"
    ]
  },
  {
    "year": "2020",
    "question": 5,
    "team": "team-hrvatin",
    "label": "Hrvatin et al.",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/32528180/",
    "title": "Neurons that regulate mouse torpor",
    "citation": "Hrvatin et al. Nature (2020).",
    "insight": "Torpor-active preoptic neurons can recreate core features in fed mice; inhibition disrupts natural torpor dynamics.",
    "note": "Starting with cells active during the animal's own torpor is an appealing strategy. Reactivation tests what they can do, while inhibition asks a different question about their normal contribution. I am curious about how much of the tagged population overlaps with cells involved in sleep, feeding, or other temperature responses.",
    "species": "Mice",
    "intervention": "Activity-dependent tagging, neuronal reactivation, recordings and inhibition of preoptic Adcyap1-positive neurons.",
    "caveat": "A defined experimental entry point into mouse torpor, not proof of a universal mammalian torpor switch.",
    "topic": "Natural torpor circuits",
    "doi": "10.1038/s41586-020-2387-5",
    "pmid": "32528180",
    "journal": "Nature",
    "status": "Peer-reviewed research",
    "authors": [
      "Sinisa Hrvatin",
      "Senmiao Sun",
      "Oren F Wilcox",
      "Hanqi Yao",
      "Aurora J Lavin-Peter",
      "Marcelo Cicconet",
      "Elena G Assad",
      "Michaela E Palmer",
      "Sage Aronson",
      "Alexander S Banks",
      "Eric C Griffith",
      "Michael E Greenberg"
    ]
  },
  {
    "year": "2019",
    "question": 0,
    "team": "team-other",
    "label": "Hitrec et al.",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/31664081/",
    "title": "Neural control of fasting-induced torpor in mice",
    "citation": "Hitrec et al. Scientific Reports (2019).",
    "insight": "Identifies a candidate torpor-associated DMH-to-raphe pallidus projection.",
    "note": "This is a useful place to start before reading the later DMH manipulation studies. Activity mapping and anatomy point to a route toward the raphe pallidus, but do not establish whether it is required for entry. Projection-specific inhibition, with metabolism recorded alongside temperature, seems a direct next test.",
    "species": "Mice",
    "intervention": "c-Fos mapping at torpor onset and retrograde tracing from raphe pallidus.",
    "caveat": "Activity and anatomy nominate a pathway; this study does not itself establish that the projection causes torpor entry.",
    "topic": "Circuit mapping",
    "doi": "10.1038/s41598-019-51841-2",
    "pmid": "31664081",
    "journal": "Scientific Reports",
    "status": "Peer-reviewed research",
    "authors": [
      "Timna Hitrec",
      "Marco Luppi",
      "Stefano Bastianini",
      "Fabio Squarcio",
      "Chiara Berteotti",
      "Viviana Lo Martire",
      "Davide Martelli",
      "Alessandra Occhinegro",
      "Domenico Tupone",
      "Giovanna Zoccoli",
      "Roberto Amici",
      "Matteo Cerri"
    ]
  },
  {
    "year": "2019",
    "question": 2,
    "team": "team-gracheva",
    "label": "Feng et al.",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/31495581/",
    "title": "Osmolyte Depletion and Thirst Suppression Allow Hibernators to Survive for Months without Water",
    "citation": "Feng et al. Current Biology (2019).",
    "insight": "Extracellular osmolytes fall in torpor; thirst stays suppressed during arousal while water-conserving responses return.",
    "note": "The separation between thirst and water retention is the part I find surprising. During arousal, the squirrels can conserve water without being driven to leave the burrow and drink. The osmotic challenge suggests that the thirst circuit still works. This makes me think that prolonged torpor requires coordinated choices about behavior and fluid balance, not just a reduction in energy use.",
    "species": "Thirteen-lined ground squirrels",
    "intervention": "Hydration, osmolyte and hormone measurements, with an osmotic challenge.",
    "caveat": "Does not mean water is never lost, or that drinking and renal conservation are controlled by a single switch.",
    "topic": "Water balance",
    "doi": "10.1016/j.cub.2019.07.038",
    "pmid": "31495581",
    "journal": "Current Biology",
    "status": "Peer-reviewed research",
    "authors": [
      "Ni Y Feng",
      "Madeleine S Junkins",
      "Dana K Merriman",
      "Sviatoslav N Bagriantsev",
      "Elena O Gracheva"
    ]
  },
  {
    "year": "2019",
    "question": 3,
    "team": "team-wangtf",
    "label": "Wang et al.",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/31151773/",
    "title": "Thermoregulation via Temperature-Dependent PGD2 Production in Mouse Preoptic Area",
    "citation": "Wang et al. Neuron (2019).",
    "insight": "Links temperature-sensitive Ptgds neurons to PGD2/DP1-mediated negative feedback that lowers body temperature.",
    "note": "I like the sequence of experiments: measure temperature sensitivity, identify a molecular marker, and then perturb the pathway. PGD2 offers a possible local feedback signal. The part still unclear to me is whether this pathway helps initiate a different physiological state or mainly corrects a rise in temperature. The paper studies heat defense rather than fasting torpor.",
    "species": "Mice",
    "intervention": "Single-cell profiling with patch-clamp recording, chemogenetic manipulation and prostaglandin assays.",
    "caveat": "Heat-defense feedback does not by itself show how fasting-induced torpor starts.",
    "topic": "Thermoregulatory context",
    "doi": "10.1016/j.neuron.2019.04.035",
    "pmid": "31151773",
    "journal": "Neuron",
    "status": "Peer-reviewed research",
    "authors": [
      "Tongfei A Wang",
      "Chin Fen Teo",
      "Malin Åkerblom",
      "Chao Chen",
      "Marena Tynan-La Fontaine",
      "Vanille Juliette Greiner",
      "Aaron Diaz",
      "Michael T McManus",
      "Yuh Nung Jan",
      "Lily Y Jan"
    ]
  },
  {
    "team": "team-other",
    "question": 5,
    "label": "Carlin et al.",
    "year": "2017",
    "url": "https://pubmed.ncbi.nlm.nih.gov/27914963/",
    "title": "Hypothermia in mouse is caused by adenosine A1 and A3 receptor agonists and AMP via three distinct mechanisms",
    "source": "PubMed",
    "insight": "Separates three routes to regulated hypothermia and shows that some nominally A1-selective drugs also engage A3 pathways.",
    "note": "The receptor-knockout comparisons make this worth reading alongside the adenosine induction papers. A drug can recruit more than its nominal target, depending on dose and route. Also, fasting torpor remains possible without A1 or A3 receptors. The ability to induce cooling through a receptor and its necessity for natural torpor need separate tests.",
    "species": "Wild-type and receptor-knockout mice",
    "intervention": "Systemic or central A1/A3 agonists and AMP; receptor knockout comparisons.",
    "caveat": "A1/A3 receptor knockout did not abolish fasting torpor; pharmacological cooling and endogenous necessity cannot be equated.",
    "topic": "Pharmacological specificity",
    "doi": "10.1016/j.neuropharm.2016.11.026",
    "pmid": "27914963",
    "journal": "Neuropharmacology",
    "status": "Peer-reviewed research",
    "authors": [
      "Jesse Lea Carlin",
      "Shalini Jain",
      "Elizabeth Gizewski",
      "Tina C Wan",
      "Dilip K Tosh",
      "Cuiying Xiao",
      "John A Auchampach",
      "Kenneth A Jacobson",
      "Oksana Gavrilova",
      "Marc L Reitman"
    ],
    "citation": "Carlin et al. Neuropharmacology (2017)."
  },
  {
    "year": "2016",
    "question": 0,
    "team": "team-sunagawa",
    "label": "Sunagawa & Takahashi",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/27845399/",
    "title": "Hypometabolism during Daily Torpor in Mice is Dominated by Reduction in the Sensitivity of the Thermoregulatory System",
    "citation": "Sunagawa, G. A. & Takahashi, M. Scientific Reports (2016).",
    "insight": "Daily torpor strongly reduces thermoregulatory sensitivity, with a smaller change in the estimated temperature threshold.",
    "note": "This changes how I read a body-temperature curve. Ambient temperature and the strength of thermoregulatory responses can produce different curves even when the underlying change is similar. Separating sensitivity from temperature threshold helps with that. Applying the model to induced states would be interesting, provided its assumptions still hold outside natural daily torpor.",
    "species": "Mice",
    "intervention": "Continuous metabolic measurements across ambient temperatures and model-based torpor detection.",
    "caveat": "Model parameters depend on assumptions and do not mean daily mouse torpor equals deep seasonal hibernation.",
    "topic": "Defining torpor",
    "doi": "10.1038/srep37011",
    "pmid": "27845399",
    "journal": "Scientific Reports",
    "status": "Peer-reviewed research",
    "authors": [
      "Genshiro A Sunagawa",
      "Masayo Takahashi"
    ]
  },
  {
    "team": "team-other",
    "question": 3,
    "label": "Song et al.",
    "year": "2016",
    "url": "https://pubmed.ncbi.nlm.nih.gov/27562954/",
    "title": "The TRPM2 channel is a hypothalamic heat sensor that limits fever and can drive hypothermia",
    "source": "PubMed",
    "insight": "Identifies a heat-sensitive channel that limits fever and a neuronal population capable of bidirectional temperature control.",
    "note": "I see two questions here: how TRPM2 senses heat, and what happens when TRPM2-marked neurons are activated. A result from the second experiment does not automatically answer the first. This distinction becomes especially useful in the later ultrasound papers. The strong cooling response still leaves open how the channel participates in natural torpor.",
    "species": "Mice",
    "intervention": "Trpm2 loss of function and chemogenetic activation/inhibition of TRPM2-expressing hypothalamic neurons.",
    "caveat": "Shows thermoregulation and induced hypothermia; does not establish that channel gating alone triggers natural torpor.",
    "topic": "Thermoregulatory foundations",
    "doi": "10.1126/science.aaf7537",
    "pmid": "27562954",
    "journal": "Science",
    "status": "Peer-reviewed research",
    "authors": [
      "Kun Song",
      "Hong Wang",
      "Gretel B Kamm",
      "Jörg Pohle",
      "Fernanda de Castro Reis",
      "Paul Heppenstall",
      "Hagen Wende",
      "Jan Siemens"
    ],
    "citation": "Song et al. Science (2016)."
  },
  {
    "team": "team-other",
    "question": 3,
    "label": "Tan et al.",
    "year": "2016",
    "url": "https://pubmed.ncbi.nlm.nih.gov/27616062/",
    "title": "Warm-Sensitive Neurons that Control Body Temperature",
    "source": "PubMed",
    "insight": "Warm-responsive neurons coordinate heat loss, reduced heat production and cold-seeking through distinct projections.",
    "note": "The stimulated mice seek colder places while reducing heat production. That coordination between behavior and physiology is what stands out to me. Comparing these cells with the PACAP population in later torpor studies could be useful, but the shared marker is only a starting point. Location, projections, and the conditions that recruit them also matter.",
    "species": "Mice",
    "intervention": "Activity-dependent molecular profiling, optical recording and stimulation of preoptic BDNF/PACAP neurons.",
    "caveat": "A heat-defense circuit study; PACAP expression overlaps later torpor work without establishing identical cell populations.",
    "topic": "Thermoregulatory foundations",
    "doi": "10.1016/j.cell.2016.08.028",
    "pmid": "27616062",
    "journal": "Cell",
    "status": "Peer-reviewed research",
    "authors": [
      "Chan Lek Tan",
      "Elizabeth K Cooke",
      "David E Leib",
      "Yen-Chu Lin",
      "Gwendolyn E Daly",
      "Christopher A Zimmerman",
      "Zachary A Knight"
    ],
    "citation": "Tan et al. Cell (2016)."
  },
  {
    "year": "2013",
    "question": 5,
    "team": "team-other",
    "label": "Tupone et al.",
    "source": "PubMed",
    "url": "https://pubmed.ncbi.nlm.nih.gov/24005302/",
    "title": "Central activation of the A1 adenosine receptor (A1AR) induces a hypothermic, torpor-like state in the rat",
    "citation": "Tupone et al. Journal of Neuroscience (2013).",
    "insight": "Suppresses thermogenesis and produces deep hypothermia, bradycardia and reduced EEG activity; animals recover with rewarming.",
    "note": "Rats provide a useful comparison because they do not normally enter daily torpor like mice. Suppressing brown-fat and shivering thermogenesis lets them cool, but the cardiovascular record needs attention too, including the skipped beats. For this invasive, temperature-dependent approach, I am as interested in circulation during rewarming as in the depth of cooling.",
    "species": "Rats",
    "intervention": "Central A1 adenosine receptor agonism with brainstem localization experiments in cool conditions.",
    "caveat": "Invasive central dosing and cool ambient conditions; skipped beats and transient bradycardias were observed. Not a human induction protocol.",
    "topic": "Pharmacological induction",
    "doi": "10.1523/JNEUROSCI.1980-13.2013",
    "pmid": "24005302",
    "journal": "Journal of Neuroscience",
    "status": "Peer-reviewed research",
    "authors": [
      "Domenico Tupone",
      "Christopher J Madden",
      "Shaun F Morrison"
    ]
  },
  {
    "team": "team-other",
    "question": 5,
    "label": "Cerri et al.",
    "year": "2013",
    "url": "https://pubmed.ncbi.nlm.nih.gov/23407956/",
    "title": "The inhibition of neurons in the central nervous pathways for thermoregulatory cold defense induces a suspended animation state in the rat",
    "source": "PubMed",
    "insight": "Produces deep hypothermia with reduced heart rate and EEG power; animals recover and show increased NREM delta power.",
    "note": "Here the intervention acts on the cold-defense output: medullary inhibition allows a rat to cool in a cold environment. That gives a useful comparison with preoptic activation. The increased NREM delta power during recovery also deserves attention. Separating the effects of inhibition, cooling, and rewarming would help explain that response.",
    "species": "Male rats",
    "intervention": "Repeated muscimol microinjections inhibiting rostral ventromedial medullary cold-defense pathways at 15°C.",
    "caveat": "Invasive pharmacological suppression with external cool conditions, not evidence of natural hibernation in rats or general safety.",
    "topic": "Brainstem induction",
    "doi": "10.1523/JNEUROSCI.3596-12.2013",
    "pmid": "23407956",
    "journal": "Journal of Neuroscience",
    "status": "Peer-reviewed research",
    "authors": [
      "Matteo Cerri",
      "Marco Mastrotto",
      "Domenico Tupone",
      "Davide Martelli",
      "Marco Luppi",
      "Emanuele Perez",
      "Giovanni Zamboni",
      "Roberto Amici"
    ],
    "citation": "Cerri et al. Journal of Neuroscience (2013)."
  },
  {
    "team": "team-other",
    "question": 0,
    "label": "Jinka et al.",
    "year": "2011",
    "url": "https://pubmed.ncbi.nlm.nih.gov/21795527/",
    "title": "Season primes the brain in an arctic hibernator to facilitate entrance into torpor mediated by adenosine A(1) receptors",
    "source": "PubMed",
    "insight": "A1 agonism induced torpor in 6/6 animals mid-season, 2/6 early-season and 0/6 off-season; antagonism reversed entry.",
    "note": "The seasonal difference is striking: the same agonist works in all six animals mid-season and none off-season. Receptor activation clearly depends on the state of the animal. I want to know what changes between those seasons, and which of those changes would have to be reproduced before expecting a similar response in a non-hibernator.",
    "species": "Arctic ground squirrels",
    "intervention": "Intracerebroventricular adenosine agonists/antagonists tested across seasons.",
    "caveat": "Small, season-dependent experiment in a natural hibernator. Cannot transfer the response directly to mice, rats or humans.",
    "topic": "Seasonal entry",
    "doi": "10.1523/JNEUROSCI.1240-11.2011",
    "pmid": "21795527",
    "journal": "Journal of Neuroscience",
    "status": "Peer-reviewed research",
    "authors": [
      "Tulasi R Jinka",
      "Øivind Tøien",
      "Kelly L Drew"
    ],
    "citation": "Jinka et al. Journal of Neuroscience (2011)."
  }
];

  const cognitionTopics = {
  "memory": [
    {
      "title": "Why can one episode of vomiting make a taste memorable for years?",
      "eyebrow": "Memory 01 / Taste aversion",
      "status": "Why one bad meal can matter for so long.",
      "origin": "As a child, I vomited after eating food with coriander in it. I then avoided coriander for years. I do not know whether it caused the illness, but my brain seemed to make the connection. I still wonder why one experience could change what I wanted to eat for so long.",
      "thesis": "A taste can become linked to illness even when the two are separated by a long delay. Mouse studies are beginning to show how a recent flavor is reactivated when the animal feels ill. What I find harder to explain is how an aversion then lasts for years.",
      "evidence": [
        {
          "certainty": "Behavior",
          "title": "Learning across a delay",
          "text": "In conditioned taste aversion, an animal can learn to avoid a flavor after it is followed by illness. The delay can be much longer than in many other learning tasks."
        },
        {
          "certainty": "Mouse experiments",
          "title": "A signal from the body",
          "text": "Parabrachial CGRP neurons carry signals related to bodily danger. Activating them can condition a taste aversion in mice; inhibiting them can impair learning or its expression. The outcome depends on when and how the cells are manipulated."
        },
        {
          "certainty": "Zimmerman et al., 2025",
          "title": "Illness brings back the recent flavor response",
          "text": "Delayed malaise reactivated responses to a recently consumed novel flavor in the mouse amygdala. More strongly reactivated cells tended to show greater strengthening of their flavor response at retrieval. The study helps explain the delay, but does not follow an aversion for years."
        },
        {
          "certainty": "Circuit studies",
          "title": "More than one brain region is involved",
          "text": "Insular cortex and amygdala experiments suggest that taste memory depends on interactions between regions. Counting activated cells alone would not tell me which ones are necessary for the memory."
        },
        {
          "certainty": "A question from a conversation",
          "title": "Could a few cells have a large effect?",
          "text": "A discussion with Dr. Tao Yang made me wonder whether a small number of cells could have an unusually large effect on memory formation or recall. Single-cell stimulation and holographic experiments in other tasks make this worth asking. They do not establish that one cell holds a whole taste memory."
        }
      ],
      "frontiers": [
        {
          "question": "Would changing a few cells change the aversion?",
          "note": "I would compare small groups of learning-related cells with equally sized control groups. A change in behavior would show an effect on the circuit, but would not by itself locate the entire memory."
        },
        {
          "question": "Which food gets associated with illness?",
          "note": "A meal contains several tastes. I want to know how novelty, timing, and how noticeable a flavor is affect which one is later avoided."
        },
        {
          "question": "What keeps the memory stable?",
          "note": "Following the same cells over longer periods could help connect early learning to later recall. The papers here do not explain a decades-long human aversion."
        },
        {
          "question": "What happens when the aversion weakens?",
          "note": "Does later safe experience change the original association, or add a competing one? I would want a test that can distinguish the two."
        }
      ],
      "sources": [
        {
          "label": "Zimmerman et al. Nature (2025) - delayed postingestive feedback",
          "url": "https://doi.org/10.1038/s41586-025-08828-z"
        },
        {
          "label": "Chen et al. Neuron (2018) - parabrachial CGRP neurons",
          "url": "https://doi.org/10.1016/j.neuron.2018.09.032"
        },
        {
          "label": "Lavi et al. Cell Reports (2018) - cortico-amygdala coding",
          "url": "https://doi.org/10.1016/j.celrep.2018.06.053"
        },
        {
          "label": "Abe et al. Molecular Brain (2020) - retrieval allocation",
          "url": "https://doi.org/10.1186/s13041-020-00646-w"
        },
        {
          "label": "Houweling & Brecht. Nature (2008) - single-neuron stimulation",
          "url": "https://doi.org/10.1038/nature06447"
        },
        {
          "label": "Packer et al. Nature Methods (2015) - all-optical circuit control",
          "url": "https://doi.org/10.1038/nmeth.3217"
        },
        {
          "label": "Carrillo-Reid et al. Cell (2019) - holographic ensemble recall",
          "url": "https://doi.org/10.1016/j.cell.2019.05.045"
        }
      ]
    },
    {
      "title": "Where does a verification code stay while I type it?",
      "eyebrow": "Memory 02 / Working memory",
      "status": "A short memory need not use a single form of storage.",
      "origin": "I can look at a verification code, close the message, and type it a few seconds later. During that gap, the numbers are no longer on the screen. Where is the information, and what changes when I repeat the code silently to myself?",
      "thesis": "The papers point to several possibilities, including continuing activity, brief bursts, and changes that make information easier to reactivate. I do not think the evidence requires every working-memory task to use exactly the same mechanism.",
      "evidence": [
        {
          "certainty": "Primate recordings",
          "title": "Activity after the stimulus disappears",
          "text": "Classic delay-period recordings found neurons that remained active while an animal waited to respond. This gave a direct way to look for a short-term memory in neural activity."
        },
        {
          "certainty": "Human experiments",
          "title": "Visual cortex contributes",
          "text": "Remembered orientations can be decoded from early visual cortex. In a 2025 study, TMS targeting V1 during a delay reduced the precision of remembered locations in the affected part of the visual field. This supports a role in that task, rather than every kind of working memory."
        },
        {
          "certainty": "Primate recordings",
          "title": "The activity can come in bursts",
          "text": "Lundqvist and colleagues found brief gamma and beta bursts during a working-memory task. A smooth average across trials can hide this timing."
        },
        {
          "certainty": "An ongoing debate",
          "title": "What does an undetectable signal mean?",
          "text": "Some EEG and TMS experiments have been interpreted as evidence for a latent memory state. A reanalysis of visual-pinging data recovered sustained information from alpha-band activity. Failure to decode something from one signal does not establish complete neural silence."
        },
        {
          "certainty": "My reading note",
          "title": "The strategy may matter",
          "text": "Remembering the shape of a symbol and silently repeating a string of digits feel different. I would like to see experiments that measure how people use these strategies, rather than assume that a verification code stays in one format."
        }
      ],
      "frontiers": [
        {
          "question": "Does the same information change format?",
          "note": "A visual code may be recoded into speech. How quickly can we track that change, and what happens if rehearsal is interrupted?"
        },
        {
          "question": "What would count as evidence for silent storage?",
          "note": "I would want to know which forms of activity a measurement can detect before treating an absent signal as evidence for silence."
        },
        {
          "question": "What limits how much we can hold?",
          "note": "Storage, attention, interference, and strategy all seem relevant. Comparing tasks may be more useful than looking for one capacity number."
        }
      ],
      "sources": [
        {
          "label": "Fuster & Alexander. Science (1971) - delay-period activity",
          "url": "https://doi.org/10.1126/science.173.3997.652"
        },
        {
          "label": "Harrison & Tong. Nature (2009) - decoding visual working memory",
          "url": "https://doi.org/10.1038/nature07832"
        },
        {
          "label": "Rose et al. Science (2016) - TMS reactivation of latent memory",
          "url": "https://doi.org/10.1126/science.aah7011"
        },
        {
          "label": "Wolff et al. Nature Neuroscience (2017) - dynamic hidden states",
          "url": "https://doi.org/10.1038/nn.4546"
        },
        {
          "label": "Lundqvist et al. Neuron (2016) - gamma and beta bursts",
          "url": "https://doi.org/10.1016/j.neuron.2016.02.028"
        },
        {
          "label": "Barbosa et al. PLOS Biology (2021) - active versus silent memory",
          "url": "https://doi.org/10.1371/journal.pbio.3001436"
        },
        {
          "label": "Dake & Curtis. Nature Communications (2025) - causal role of V1",
          "url": "https://doi.org/10.1038/s41467-025-57882-8"
        }
      ]
    },
    {
      "title": "Why can a dream place high-school friends inside a university scene?",
      "eyebrow": "Memory 03 / Dream recombination",
      "status": "Familiar people and places can appear in unfamiliar combinations.",
      "origin": "A dream can put high-school friends in a university setting without the mismatch seeming strange until I wake up. I am interested in why memories from different periods become mixed together, and why a dream picks those particular pieces.",
      "thesis": "Dream reports often contain fragments from more than one waking experience. The studies below describe this mixing and some of its neural correlates. They leave open whether the dream itself helps memory, or reflects other processes happening during sleep.",
      "evidence": [
        {
          "certainty": "Dream reports",
          "title": "One dream, several sources",
          "text": "Diary studies find recent and remote experiences in the same dream. Wamsley also found reports that combined past memories with anticipated future events. Participants identify many of these sources themselves, which is useful but also a limitation."
        },
        {
          "certainty": "Brain imaging",
          "title": "Some imagery can be linked to brain activity",
          "text": "Horikawa and colleagues used waking visual responses to predict broad categories reported during sleep-onset imagery. Siclari and colleagues linked dream reports to posterior cortical activity in REM and NREM sleep. Neither method reads a complete dream."
        },
        {
          "certainty": "Memory performance",
          "title": "Task-related dreams correlate with later improvement",
          "text": "In an overnight maze-learning study, people who clearly reported task-related dream content showed better next-morning performance. This association does not establish that having the dream caused the improvement."
        },
        {
          "certainty": "My reading note",
          "title": "Why these particular fragments?",
          "text": "Shared people, emotions, or current concerns might link memories from different years. I find that plausible, but I have not found a rule that reliably predicts which pieces will enter a particular dream."
        }
      ],
      "frontiers": [
        {
          "question": "What selects the pieces of a dream?",
          "note": "I would like to compare the effects of recency, emotional importance, and shared meaning rather than assume that one explains everything."
        },
        {
          "question": "Do REM and NREM dreams mix memories differently?",
          "note": "Both stages can contain dreams. Repeated reports within the same person might help separate stage effects from differences between people."
        },
        {
          "question": "Can a sleep cue change the combination?",
          "note": "Cueing one learned item during sleep could help test which later dream elements, if any, are related to that item."
        },
        {
          "question": "Does the mixing change waking memory?",
          "note": "A convincing test would need to connect a specific change in dream content to a later memory outcome, while accounting for sleep itself."
        }
      ],
      "sources": [
        {
          "label": "Horikawa et al. Science (2013) - decoding sleep imagery",
          "url": "https://doi.org/10.1126/science.1234330"
        },
        {
          "label": "Siclari et al. Nature Neuroscience (2017) - neural correlates of dreaming",
          "url": "https://doi.org/10.1038/nn.4545"
        },
        {
          "label": "Vallat et al. PLOS ONE (2017) - memory sources of dreams",
          "url": "https://doi.org/10.1371/journal.pone.0185262"
        },
        {
          "label": "Wamsley. PLOS ONE (2022) - constructive episodic simulation",
          "url": "https://doi.org/10.1371/journal.pone.0264574"
        },
        {
          "label": "Wamsley & Stickgold. Journal of Sleep Research (2019) - task dreaming and consolidation",
          "url": "https://doi.org/10.1111/jsr.12749"
        }
      ]
    },
    {
      "title": "Are some people simply born with better memory?",
      "eyebrow": "Memory 04 / Individual differences",
      "status": "Being good at one memory task does not mean being good at all of them.",
      "origin": "Some people seem to remember names, numbers, or places with very little effort. But the same person can be good at one and struggle with another. I wonder what remains different when attention, practice, sleep, and strategy are taken into account.",
      "thesis": "There are measurable brain correlates of memory performance. I am cautious about calling them inborn advantages: experience can also change the brain, and different tasks ask for different kinds of memory.",
      "evidence": [
        {
          "certainty": "EEG",
          "title": "A signal related to visual memory capacity",
          "text": "Vogel and Machizawa found that an EEG measure during visual short-term memory tracked how many items a person could hold. It is a useful marker for that task, not a general score for all memory."
        },
        {
          "certainty": "fMRI in 1,498 adults",
          "title": "Encoding responses vary with performance",
          "text": "Geissmann and colleagues related visual episodic-memory performance to responses in the hippocampus, orbitofrontal cortex, posterior cingulate, and several networks. These are associations; the study does not identify what caused each person's performance."
        },
        {
          "certainty": "A useful distinction",
          "title": "Doing a task and explaining differences are separate questions",
          "text": "A region may contribute to memory in most people without its activity explaining why one person remembers more than another. This is a distinction I want to keep in mind when comparing studies."
        },
        {
          "certainty": "Longitudinal MRI",
          "title": "Experience can change structure",
          "text": "London taxi-driver research first linked navigation expertise to hippocampal structure. A later longitudinal study found structural changes in trainees who qualified. A difference observed after years of practice cannot simply be assumed to have been present at the start."
        }
      ],
      "frontiers": [
        {
          "question": "What predicts performance before training?",
          "note": "Repeated measurements before, during, and after learning could help separate an initial difference from the effects of practice."
        },
        {
          "question": "Which improvements carry over to another task?",
          "note": "I am more interested in an improvement that generalizes than in becoming faster at one repeatedly practiced test."
        },
        {
          "question": "How do cellular changes relate to human measurements?",
          "note": "MRI and EEG are useful, but they leave a gap between a measured brain signal and the synaptic processes I would like to understand."
        }
      ],
      "sources": [
        {
          "label": "Vogel & Machizawa. Nature (2004) - individual working-memory capacity",
          "url": "https://doi.org/10.1038/nature02447"
        },
        {
          "label": "Geissmann et al. Nature Communications (2023) - episodic-memory differences",
          "url": "https://doi.org/10.1038/s41467-023-41380-w"
        },
        {
          "label": "Maguire et al. PNAS (2000) - taxi-driver hippocampi",
          "url": "https://doi.org/10.1073/pnas.070039597"
        },
        {
          "label": "Woollett & Maguire. Current Biology (2011) - longitudinal structural change",
          "url": "https://doi.org/10.1016/j.cub.2011.11.018"
        }
      ]
    }
  ],
  "emotion": [
    {
      "title": "Why do some people wake up irritable rather than merely sleepy?",
      "eyebrow": "Emotion 01 / Sleep inertia",
      "status": "Sleepiness and irritability overlap, but they are different things to explain.",
      "origin": "Why does waking up leave one person quiet and sleepy, but another impatient or easily annoyed? I started with sleep inertia, the period of reduced alertness after waking. It seems relevant, but slower reactions alone do not explain irritability.",
      "thesis": "Alertness recovers gradually after waking. Sleep history and time of day can affect that recovery, but I have not found a clear mechanism connecting it to anger. For now, I treat that connection as a question rather than an explanation.",
      "evidence": [
        {
          "certainty": "Chen et al., 2026",
          "title": "Alertness recovers over time",
          "text": "In 26 adults studied with EEG and fMRI, thalamic and cingulo-opercular task responses were reduced just after awakening and recovered over time. The work links these changes to vigilance performance. It did not directly explain irritability."
        },
        {
          "certainty": "A related sleep-loss study",
          "title": "Sleep deprivation affects responses to negative images",
          "text": "Yoo and colleagues found stronger amygdala responses and altered prefrontal coupling after a night without sleep. This is useful context for sleep and emotion, but total sleep deprivation is different from the first minutes after waking."
        },
        {
          "certainty": "Repeated daily measurements",
          "title": "Morning alertness varies with daily habits",
          "text": "A study of 833 adults related morning alertness to sleep, prior physical activity, and breakfast-related measures. It measured alertness, so I would not use it as direct evidence about anger."
        },
        {
          "certainty": "Questionnaire research",
          "title": "The labels can be misleading",
          "text": "Carciofo found substantial overlap between questionnaire measures of morning affect and sleep inertia. In these questionnaires, “morning affect” often refers to feeling awake rather than specifically to irritability. The wording of a measure matters."
        }
      ],
      "frontiers": [
        {
          "question": "Do alertness and mood recover at the same speed?",
          "note": "I would measure both repeatedly after waking, instead of using a reaction-time test as a substitute for mood."
        },
        {
          "question": "Does the way we wake up matter?",
          "note": "An alarm, an interruption, and spontaneous waking may produce different responses. The demand placed on someone immediately afterward could matter too."
        },
        {
          "question": "Why are some people more affected?",
          "note": "Sleep duration, sleep stage, circadian timing, and stress are possible contributors. A repeated-measures study could help separate a temporary state from a stable difference."
        },
        {
          "question": "Can a gentler awakening improve mood?",
          "note": "This needs a test with a direct mood measure. Feeling more alert would not automatically mean feeling less irritable."
        }
      ],
      "sources": [
        {
          "label": "Chen et al. Communications Biology (2026) - thalamic recovery during sleep inertia",
          "url": "https://doi.org/10.1038/s42003-026-09839-w"
        },
        {
          "label": "Vallat et al. Nature Communications (2022) - determinants of morning alertness",
          "url": "https://doi.org/10.1038/s41467-022-34503-2"
        },
        {
          "label": "Yoo et al. Current Biology (2007) - prefrontal-amygdala disconnection after sleep loss",
          "url": "https://doi.org/10.1016/j.cub.2007.08.007"
        },
        {
          "label": "Carciofo. Chronobiology International (2023) - morning affect and sleep inertia measures",
          "url": "https://doi.org/10.1080/07420528.2023.2187211"
        }
      ]
    }
  ]
};
