var tags = [];
  tags[0] = ["Other", "#D5D5D0", "#000000"];
  tags[1] = ["Math", "#00FF80", "#000000"];
  tags[2] = ["Combinatorics", "#F79F81", "#000000"];
  tags[3] = ["Dynamic programming", "#A9F5BC", "#000000"];
  tags[4] = ["Graph", "#F7FE2E", "#000000"];
  tags[5] = ["Simulation", "#DF0101", "#ffffff"];
  tags[6] = ["Sorting", "#EFFBFB", "#000000"];
  tags[7] = ["Data structure", "#BFFF00", "#000000"];
  tags[8] = ["Implementation", "#BCA9F5", "#000000"];
  tags[9] = ["Tree", "#4B610B", "#ffffff"];
  tags[10] = ["Binary indexed tree", "#298A08", "#ffffff"];
  tags[11] = ["Segment tree", "#088A85", "#ffffff"];
  tags[12] = ["Depth first search", "#ADCFBD", "#000000"];
  tags[13] = ["Breadth first search", "#91C7B9", "#000000"];
  tags[14] = ["Subsequence", "#6E1892", "#ffffff"];
  tags[15] = ["Two pointers", "#E4F045", "#000000"];
  tags[16] = ["Geometry", "#24EF1E", "#000000"];
  tags[17] = ["Connected component", "#D5C28A", "#000000"];
  tags[18] = ["Set", "#DFAFFA", "#000000"];
  tags[19] = ["Queue", "#EA8D9A", "#000000"];
  tags[20] = ["Probability", "#6E958D", "#ffffff"];
  tags[21] = ["Greedy", "#3C063B", "#ffffff"];
  tags[22] = ["Divide and conquer", "#1E7460", "#ffffff"];
  tags[23] = ["String", "#8E4328", "#ffffff"];
  tags[24] = ["Binary search", "#F32BE9", "#ffffff"];
  tags[25] = ["Brute force", "#D2F10F", "#000000"];
  tags[26] = ["Shortest path", "#C6ABF0", "#000000"];
  tags[27] = ["Hash", "#3941AE", "#ffffff"];
  tags[28] = ["Stack", "#39AE88", "#ffffff"];
  tags[29] = ["Convex hull", "#049060", "#ffffff"];
  tags[30] = ["Bitmasking", "#646765", "#ffffff"];
  tags[31] = ["Backtracking", "#568ADE", "#ffffff"];
  tags[32] = ["Disjoint set union", "#FDD2A4", "#000000"];
  tags[33] = ["Heap", "#AAE1EE", "#000000"];
var sols = [
  {"name": "ABCD.cpp", "fname": "Colours A, B, C, D", "tags": [0, 22]},
  {"name": "ABCPATH.cpp", "fname": "ABC Path", "tags": [4, 12]},
  {"name": "ABSP1.cpp", "fname": "abs(a-b) I", "tags": [1, 2]},
  {"name": "ACODE.cpp", "fname": "Alphacode", "tags": [1, 2, 3]},
  {"name": "ACPC10D.cpp", "fname": "Tri graphs", "tags": [3, 4]},
  {"name": "ACPC11B.cpp", "fname": "Between the Mountains", "tags": [6, 15]},
  {"name": "ACS.cpp", "fname": "A concrete simulation", "tags": [5]},
  {"name": "ADACOINS.cpp", "fname": "Ada and Coins", "tags": [2, 3]},
  {"name": "ADAFRIEN.cpp", "fname": "Ada and Friends", "tags": [6, 7]},
  {"name": "ADASEQEN.cpp", "fname": "Ada and Subsequence", "tags": [3]},
  {"name": "ADDREV.py", "fname": "Adding Reversed Numbers", "tags": [8]},
  {"name": "ADFRUITS.cpp", "fname": "Advanced Fruits", "tags": [3, 14, 15]},
  {"name": "AE00.cpp", "fname": "Rectangles", "tags": [1]},
  {"name": "AE2A.cpp", "fname": "Dice", "tags": [1, 3, 20]},
  {"name": "AGGRCOW.cpp", "fname": "Aggressive cows", "tags": [24]},
  {"name": "AIBOHP.cpp", "fname": "Aibohphobia", "tags": [3]},
  {"name": "AKVQLD03.cpp", "fname": "How to Handle the Fans", "tags": [7, 9, 10]},
  {"name": "ALCATRAZ2.cpp", "fname": "GO GOA GONE", "tags": [30]},
  {"name": "ALCATRAZ3.cpp", "fname": "THE HONEYCOMB MAZE", "tags": [4, 12, 31]},
  {"name": "ALLIZWEL.cpp", "fname": "ALL IZZ WELL", "tags": [4, 12, 31]},
  {"name": "ALTSEQ.cpp", "fname": "Alternating Sequences", "tags": [3, 14]},
  {"name": "AMBM.cpp", "fname": "Ambitious Manager", "tags": [21]},
  {"name": "ANARC05B.cpp", "fname": "The Double HeLiX", "tags": [0, 15]},
  {"name": "ANARC05H.cpp", "fname": "Chop Ahoy! Revisited!", "tags": [2, 3]},
  {"name": "ANTTT.cpp", "fname": "The Ant", "tags": [16, 17]},
  {"name": "ARMY.cpp", "fname": "Army Strength", "tags": [7, 18]},
  {"name": "ARRAYSUB.cpp", "fname": "Subarrays", "tags": [7, 19]},
  {"name": "ASHMHF.cpp", "fname": "Meet Her Fast!", "tags": [6, 22]},
  {"name": "ASSIST.cpp", "fname": "Assistance Required", "tags": [5]},
  {"name": "BABY.cpp", "fname": "Baby", "tags": [3, 30]},
  {"name": "BAISED.c", "fname": "Biased Standings", "tags": [1, 6]},
  {"name": "BALIFE.cpp", "fname": "Load Balancing", "tags": [0, 1]},
  {"name": "BALLSUM.cpp", "fname": "Ball Sum", "tags": [1, 20]},
  {"name": "BEHAPPY.cpp", "fname": "Be Awesome As Barney Stinson", "tags": [2, 3]},
  {"name": "BGIRL.cpp", "fname": "Beautiful Girl", "tags": [1, 12]},
  {"name": "BILLIARD.cpp", "fname": "Billiard", "tags": [1]},
  {"name": "BLKEK.cpp", "fname": "Emoticon", "tags": [2]},
  {"name": "BLMIRINA.cpp", "fname": "Archery Training", "tags": [1, 16]},
  {"name": "BOMARBLE.cpp", "fname": "Playing with Marbles", "tags": [1]},
  {"name": "BPM.cpp", "fname": "Bipartite Permutation", "tags": [1]},
  {"name": "BREAK.cpp", "fname": "Breaking in", "tags": [4, 12, 17]},
  {"name": "BROKEN.cpp", "fname": "Broken Keyboard", "tags": [0]},
  {"name": "BUSYMAN.cpp", "fname": "I AM VERY BUSY", "tags": [21]},
  {"name": "BVAAN.cpp", "fname": "Balika Vadhu and Alok Nath", "tags": [3, 14]},
  {"name": "BYTESM2.cpp", "fname": "Philosophers Stone", "tags": [3]},
  {"name": "CAMP5.cpp", "fname": "prayatna PR", "tags": [4, 12]},
  {"name": "CCHESS.cpp", "fname": "COSTLY CHESS", "tags": [4, 26, 33]},
  {"name": "CDOWN.cpp", "fname": "Countdown", "tags": [0, 9]},
  {"name": "CFRAC2.cpp", "fname": "Continuous Fractions Again", "tags": [1, 8]},
  {"name": "CHARGY.cpp", "fname": "The World of Charges", "tags": [7, 28]},
  {"name": "CHASE.cpp", "fname": "A Chase In WonderLand", "tags": [6, 16, 21]},
  {"name": "CLAW.cpp", "fname": "Captain Claw", "tags": [7, 33]},
  {"name": "CLONE.cpp", "fname": "Find the Clones", "tags": [6]},
  {"name": "CMPSSTR.cpp", "fname": "Compare Substring", "tags": [3]},
  {"name": "CNTDO.cpp", "fname": "Count Doubles", "tags": [6]},
  {"name": "CODEM4.cpp", "fname": "Problem4", "tags": [3]},
  {"name": "CODERE3.cpp", "fname": "Coder Express 3!!", "tags": [3, 14]},
  {"name": "COINS.cpp", "fname": "Bytelandian gold coins", "tags": [3]},
  {"name": "CORNET.cpp", "fname": "Corporative Network", "tags": [7, 32]},
  {"name": "COUNT1IT.cpp", "fname": "Ghost Town", "tags": [7, 8, 9]},
  {"name": "CRAN02.cpp", "fname": "Roommate Agreement", "tags": [1, 2]},
  {"name": "CRDS.cpp", "fname": "Cards", "tags": [1]},
  {"name": "CRSCNTRY.cpp", "fname": "Cross-country", "tags": [3, 14]},
  {"name": "CRZYSMKR.cpp", "fname": "Crazy Smoker", "tags": [1]},
  {"name": "CSHOWB.cpp", "fname": "Sir and the Guitar", "tags": [7, 28]},
  {"name": "CTTC.cpp", "fname": "Counting Child", "tags": [9, 12, 28]},
  {"name": "CURDPROD.cpp", "fname": "CURD PRODUCERS", "tags": [24]},
  {"name": "CWC2015.cpp", "fname": "CWC-2015", "tags": [5]},
  {"name": "DALTSUM.cpp", "fname": "Descending Alternating Sums", "tags": [1]},
  {"name": "DBALLZ.cpp", "fname": "Help the Heroes", "tags": [3]},
  {"name": "DCEPC12E.cpp", "fname": "End of Fun", "tags": [1, 8]},
  {"name": "DCEPC207.cpp", "fname": "Finally a Treat", "tags": [21, 23]},
  {"name": "DEPEND.cpp", "fname": "Dependency Problems", "tags": [4, 6, 19]},
  {"name": "DIGNUM.cpp", "fname": "Digital LED Number", "tags": [0, 8]},
  {"name": "DIVSTR.cpp", "fname": "Divisible Strings", "tags": [0]},
  {"name": "DP.cpp", "fname": "Deliver pizza", "tags": [4, 13, 26, 30]},
  {"name": "DRAWIT.cpp", "fname": "Can you draw it or not?", "tags": [4, 12, 17]},
  {"name": "DSUBSEQ.cpp", "fname": "Distinct Subsequences", "tags": [2, 3, 14]},
  {"name": "DYZIO.cpp", "fname": "Dyzio", "tags": [0, 12]},
  {"name": "EC_CONB.cpp", "fname": "Even Numbers", "tags": [0]},
  {"name": "EC_ESTA.cpp", "fname": "Statistics Applied", "tags": [7, 9, 33]},
  {"name": "EDIST.cpp", "fname": "Edit distance", "tags": [3]},
  {"name": "EDIT.cpp", "fname": "Edit Distance Again", "tags": [0]},
  {"name": "EKO.cpp", "fname": "Eko", "tags": [6, 24]},
  {"name": "ELEVTRBL.cpp", "fname": "Elevator Trouble", "tags": [5]},
  {"name": "ELPESUM.cpp", "fname": "Elegant Permuted Sum", "tags": [1, 15, 21]},
  {"name": "EMTY2.cpp", "fname": "Can You Make It Empty 2", "tags": [0]},
  {"name": "ENCONDIN.cpp", "fname": "Run Length Encoding", "tags": [8]},
  {"name": "ENIGMATH.cpp", "fname": "PLAY WITH MATH", "tags": [1]},
  {"name": "ESYRCRTN.cpp", "fname": "Why Always Recursion", "tags": [1]},
  {"name": "EXPEDI.cpp", "fname": "Expedition", "tags": [6, 7, 21, 33]},
  {"name": "FARIDA.cpp", "fname": "Princess Farida", "tags": [3]},
  {"name": "FARMER.cpp", "fname": "Farmer", "tags": [3, 21]},
  {"name": "FENCE1.cpp", "fname": "Build a Fence", "tags": [1]},
  {"name": "FINDSR.cpp", "fname": "Find String Roots", "tags": [23]},
  {"name": "FRONT.cpp", "fname": "Front", "tags": [6, 16, 21]},
  {"name": "GCDEASY.cpp", "fname": "Easy GCD", "tags": [1]},
  {"name": "GCJ101BB.cpp", "fname": "Picking Up Chicks", "tags": [1, 21]},
  {"name": "GCPC11J.cpp", "fname": "Time to live", "tags": [4, 12]},
  {"name": "GDCOFTI.py", "fname": "Greatest Common Divisor Of Three Integers", "tags": [1]},
  {"name": "GEMS.cpp", "fname": "LAZY FRIENDS", "tags": [3, 8]},
  {"name": "GERGOVIA.cpp", "fname": "Wine trading in Gergovia", "tags": [15, 21]},
  {"name": "GIRLSNBS.cpp", "fname": "Girls and Boys", "tags": [1]},
  {"name": "GMSTRE.cpp", "fname": "Game Store", "tags": [6]},
  {"name": "GNY07C.cpp", "fname": "Encoding", "tags": [8]},
  {"name": "GNY07D.cpp", "fname": "Decoding", "tags": [8]},
  {"name": "GNY07E.cpp", "fname": "Flipping Burned Pancakes", "tags": [5, 15, 21]},
  {"name": "GOC11A.cpp", "fname": "Appending String", "tags": [5]},
  {"name": "GONE.cpp", "fname": "G-One Numbers", "tags": [1, 2, 3]},
  {"name": "GSS1.cpp", "fname": "Can you answer these queries I", "tags": [7, 9, 11]},
  {"name": "GSS3.cpp", "fname": "Can you answer these queries III", "tags": [7, 9, 11]},
  {"name": "GSS4.cpp", "fname": "Can you answer these queries IV", "tags": [7, 9, 11]},
  {"name": "HACKRNDM.c", "fname": "Hacking the random number generator", "tags": [2, 6, 24]},
  {"name": "HANGOVER.cpp", "fname": "Hangover", "tags": [1, 24]},
  {"name": "HAROWS.cpp", "fname": "A - Crazy Rows", "tags": [0]},
  {"name": "HASHIT.cpp", "fname": "Hash it!", "tags": [7, 8, 27]},
  {"name": "HERDING.cpp", "fname": "Herding", "tags": [4, 12]},
  {"name": "HMRO.cpp", "fname": "Help the Military Recruitment Office!", "tags": [7, 32]},
  {"name": "IITKWPCA.cpp", "fname": "Niceness of the string", "tags": [18, 23]},
  {"name": "IITKWPCO.cpp", "fname": "Create Collections", "tags": [0]},
  {"name": "IMAGE.cpp", "fname": "Image Perimeters", "tags": [4, 12]},
  {"name": "INS14A.cpp", "fname": "BSTRING", "tags": [0]},
  {"name": "INS14C.cpp", "fname": "Digo plays with Numbers", "tags": [21]},
  {"name": "IWGBS.py", "fname": "0110SS", "tags": [2, 3]},
  {"name": "JC15A.cpp", "fname": "Windy Cannon", "tags": [1]},
  {"name": "JGTLE.py", "fname": "Jalil Got TLE", "tags": [1]},
  {"name": "KNAPSACK.cpp", "fname": "The Knapsack Problem", "tags": [3]},
  {"name": "KOIREP.cpp", "fname": "Representatives", "tags": [5, 15, 21]},
  {"name": "KOPC12A.cpp", "fname": "K12 - Building Construction", "tags": [22, 24]},
  {"name": "KOZE.cpp", "fname": "Sheep", "tags": [4, 12]},
  {"name": "KROW.cpp", "fname": "K-In-A-Row", "tags": [5, 25]},
  {"name": "LASTSHOT.cpp", "fname": "THE LAST SHOT", "tags": [4, 12]},
  {"name": "LISA.cpp", "fname": "Pocket Money", "tags": [3]},
  {"name": "LOCKER.cpp", "fname": "Magic of the locker", "tags": [1]},
  {"name": "LPIS.cpp", "fname": "Longest Perfect Increasing Subsequence", "tags": [3, 14]},
  {"name": "LUCKYNUM.cpp", "fname": "Lucky Numbers", "tags": [4, 13, 19]},
  {"name": "MAJSTOR.cpp", "fname": "Majstor", "tags": [0, 21]},
  {"name": "MAKEMAZE.cpp", "fname": "VALIDATE THE MAZE", "tags": [4, 13, 19]},
  {"name": "MARYBMW.cpp", "fname": "BMW", "tags": [4, 19]},
  {"name": "MAXI.cpp", "fname": "Get higher and higher", "tags": [3]},
  {"name": "MAXLN.cpp", "fname": "THE MAX LINES", "tags": [1]},
  {"name": "MBLAST.cpp", "fname": "BLAST", "tags": [3]},
  {"name": "MCOINS.cpp", "fname": "Coins Game", "tags": [3]},
  {"name": "MISERMAN.py", "fname": "Wise And Miser", "tags": [3]},
  {"name": "MKJUMPS.cpp", "fname": "Making Jumps", "tags": [4, 12, 31]},
  {"name": "MKPALS.cpp", "fname": "Making Pals", "tags": [15, 22]},
  {"name": "MMAXPER.cpp", "fname": "Rectangles Perimeter", "tags": [3]},
  {"name": "MOHIB.cpp", "fname": "Mohib and series", "tags": [1]},
  {"name": "MONKK.cpp", "fname": "Monkey King", "tags": [3]},
  {"name": "MOZPWS.cpp", "fname": "Playing With Subarray", "tags": [9, 11, 15]},
  {"name": "MSCHED.cpp", "fname": "Milk Scheduling", "tags": [21]},
  {"name": "MSTRING.cpp", "fname": "String problem", "tags": [3, 14]},
  {"name": "MTWALK.cpp", "fname": "Mountain Walking", "tags": [4, 13, 24]},
  {"name": "NABILISU.cpp", "fname": "Billing Issue", "tags": [0]},
  {"name": "NAJPF.cpp", "fname": "Pattern Find", "tags": [23]},
  {"name": "NICEBTRE.cpp", "fname": "Nice Binary Trees", "tags": [9, 12]},
  {"name": "NINJA2.cpp", "fname": "PATHETIC STRINGS", "tags": [21, 23]},
  {"name": "NINJA7.cpp", "fname": "TWO SEQUENCES PROBLEM", "tags": [6, 21]},
  {"name": "NITK06.cpp", "fname": "MODIFY SEQUENCE", "tags": [0, 22]},
  {"name": "NITTROAD.cpp", "fname": "Roads of NITT", "tags": [9, 32]},
  {"name": "NNUM.cpp", "fname": "One of the Simpsons symbols", "tags": [1]},
  {"name": "NOCHANGE.cpp", "fname": "No Change", "tags": [3]},
  {"name": "NOTATRI.cpp", "fname": "Not a Triangle", "tags": [1, 2, 24]},
  {"name": "NOVICE43.cpp", "fname": "Problem 3", "tags": [2, 3]},
  {"name": "NPC2014E.cpp", "fname": "Tresi and Girls", "tags": [0, 22]},
  {"name": "NPC2015A.cpp", "fname": "Eefun Guessing Words", "tags": [0]},
  {"name": "NSTEPS.cpp", "fname": "Number Steps", "tags": [1]},
  {"name": "NSYSTEM.py", "fname": "Numeral System", "tags": [8]},
  {"name": "OEN.cpp", "fname": "One Eight_Nine", "tags": [1, 25]},
  {"name": "OFFSIDE.cpp", "fname": "He is offside!", "tags": [0, 6]},
  {"name": "OMWG.cpp", "fname": "One more weird game", "tags": [1]},
  {"name": "ONEZERO.cpp", "fname": "Ones and zeros", "tags": [4, 13, 19]},
  {"name": "ONP.cpp", "fname": "Transform the Expression", "tags": [7, 28]},
  {"name": "OPCPIZZA.cpp", "fname": "OPCPIZZA.cpp", "tags": [6, 24]},
  {"name": "ORDSUM23", "fname": "Sums of 2 and 3", "tags": [1, 2, 3]},
  {"name": "ORGNZ.cpp", "fname": "Organizator", "tags": [1]},
  {"name": "PARTY.cpp", "fname": "Party Schedule", "tags": [3]},
  {"name": "PFDEP.cpp", "fname": "Project File Dependencies", "tags": [4, 6, 33]},
  {"name": "PIZZALOC.cpp", "fname": "Pizza Location", "tags": [30]},
  {"name": "PL.cpp", "fname": "Palindrome Lover", "tags": [0]},
  {"name": "PLNDROME.cpp", "fname": "Palindrome Or Not", "tags": [0, 23]},
  {"name": "PLSEARCH.cpp", "fname": "Polygonal Line Search", "tags": [16]},
  {"name": "PLYGRND.cpp", "fname": "Playground", "tags": [6]},
  {"name": "POLICEMEN.cpp", "fname": "Police Men", "tags": [9, 12]},
  {"name": "POTATOPL.cpp", "fname": "Plant the potatoes", "tags": [6, 21]},
  {"name": "PRO.cpp", "fname": "Promotion", "tags": [7, 18]},
  {"name": "PT07Z.cpp", "fname": "Longest path in a tree", "tags": [7, 9, 12]},
  {"name": "QCJ1.cpp", "fname": "Mountain Walking", "tags": [0, 8]},
  {"name": "QUEST5.cpp", "fname": "Nail Them", "tags": [21]},
  {"name": "RAIN3.cpp", "fname": "Rain", "tags": [24]},
  {"name": "RANDG.cpp", "fname": "Red And Green", "tags": [0, 22]},
  {"name": "RANGESUM.cpp", "fname": "Range Sum", "tags": [0]},
  {"name": "REAYZCODETST.cpp", "fname": "Coding Test", "tags": [27]},
  {"name": "REDRONESIA.cpp", "fname": "Counting Words", "tags": [2, 3]},
  {"name": "RENT.cpp", "fname": "Rent your airplane and make money", "tags": [3, 6, 24]},
  {"name": "REPROAD.cpp", "fname": "Repair road", "tags": [15, 25]},
  {"name": "RIOI_2_3.cpp", "fname": "Path of the righteous man", "tags": [13, 30]},
  {"name": "RMID.cpp", "fname": "Running Median", "tags": [7, 19, 28]},
  {"name": "ROADNET.cpp", "fname": "Road net", "tags": [4, 17, 25]},
  {"name": "ROCK.cpp", "fname": "Sweet and Sour Rock", "tags": [3]},
  {"name": "ROMANRDS.cpp", "fname": "Roman Roads", "tags": [4, 9, 12, 17]},
  {"name": "RPLD.cpp", "fname": "Database", "tags": [7, 18]},
  {"name": "SAMER08A.cpp", "fname": "Almost Shortest Path", "tags": [4, 13, 26, 33]},
  {"name": "SAMER08E.cpp", "fname": "Electricity", "tags": [0, 1, 8]},
  {"name": "SAMER08F.cpp", "fname": "Feynman", "tags": [1]},
  {"name": "SCPC11B.cpp", "fname": "Alaska", "tags": [5, 6, 25]},
  {"name": "SERGRID.cpp", "fname": "Grid", "tags": [4, 13, 19, 26]},
  {"name": "SEUG.cpp", "fname": "Seetha��s Unique Game", "tags": [21]},
  {"name": "SHINCARD.cpp", "fname": "Shinchan and Magic Card", "tags": [0, 21]},
  {"name": "SHPATH.cpp", "fname": "The Shortest Path", "tags": [4, 7, 13, 26, 33]},
  {"name": "SHUB1307.cpp", "fname": "Gupta ji Birthday !!", "tags": [3]},
  {"name": "SIGNPOST.cpp", "fname": "Signpost reading", "tags": [8, 23]},
  {"name": "SMILEY1807.cpp", "fname": "1807", "tags": [3, 14]},
  {"name": "SNGINT.cpp", "fname": "Encode Integer", "tags": [1, 21]},
  {"name": "SOCNETC.cpp", "fname": "Social Network Community", "tags": [7, 32]},
  {"name": "SPCU.cpp", "fname": "Gopu and Validity of Arrangement", "tags": [0]},
  {"name": "SSHUFFLE.cpp", "fname": "String Shuffle", "tags": [2, 3]},
  {"name": "STAVATAR.cpp", "fname": "The Last String Bender", "tags": [0, 23]},
  {"name": "STPAR.cpp", "fname": "Street Parade", "tags": [5, 28]},
  {"name": "SUBSEQ.cpp", "fname": "Counting Subsequences", "tags": [7]},
  {"name": "SVADA.cpp", "fname": "Svada", "tags": [24]},
  {"name": "SVAREA11.cpp", "fname": "Save Area 11", "tags": [21, 33]},
  {"name": "SWAPDIFF1.cpp", "fname": "Difference One Swaps", "tags": [9, 10]},
  {"name": "TAKIN.cpp", "fname": "Taskin and apple tree", "tags": [30]},
  {"name": "TESSER.cpp", "fname": "Finding the Tesserect", "tags": [23]},
  {"name": "TFOSS.cpp", "fname": "Fossil in the Ice", "tags": [16, 29]},
  {"name": "THECODE.cpp", "fname": "Subset with all Digits", "tags": [3, 30]},
  {"name": "THRSUM.cpp", "fname": "ZERO TRIPLET", "tags": [6, 15, 21]},
  {"name": "TMSUM.cpp", "fname": "The Maximize Sum", "tags": [1, 21]},
  {"name": "TRAVERSE.cpp", "fname": "Traverse through the board", "tags": [3]},
  {"name": "TREEDEGREE.cpp", "fname": "Degree of a Tree", "tags": [7, 9]},
  {"name": "TRIKA.cpp", "fname": "Training for final", "tags": [3]},
  {"name": "TRIP.cpp", "fname": "Trip", "tags": [2, 3, 14, 23]},
  {"name": "TRITILE.cpp", "fname": "Triangle Tiling", "tags": [0]},
  {"name": "TRT.cpp", "fname": "Treats for the Cows", "tags": [3]},
  {"name": "TTRGRAPH.cpp", "fname": "Tetrahedrons in the country", "tags": [4, 17]},
  {"name": "TWENDS.cpp", "fname": "Two Ends", "tags": [3, 21]},
  {"name": "UCBINTB.cpp", "fname": "Car Game", "tags": [8, 23]},
  {"name": "UCBINTG.cpp", "fname": "Archipelago", "tags": [4, 5, 12]},
  {"name": "UCV2013H.cpp", "fname": "Slick", "tags": [4, 12]},
  {"name": "UFPR14D.cpp", "fname": "Inquire", "tags": [8]},
  {"name": "UOFTCE.cpp", "fname": "A Brief Expedition", "tags": [4, 13, 19]},
  {"name": "UPSUB.cpp", "fname": "Up Subsequence", "tags": [2, 3, 6, 12, 14, 23]},
  {"name": "URD.cpp", "fname": "Tiryag Bhyam", "tags": [1, 8]},
  {"name": "URJC2_A.cpp", "fname": "TV Schedule", "tags": [8]},
  {"name": "URJC2_E.cpp", "fname": "Stressful Activities", "tags": [0]},
  {"name": "VACATION.cpp", "fname": "Vacation Planning", "tags": [4, 26]},
  {"name": "VECTAR10.cpp", "fname": "Card Game", "tags": [0]},
  {"name": "VISIBLEBOX.cpp", "fname": "Decreasing Number of Visible Box", "tags": [21]},
  {"name": "VMILI.cpp", "fname": "Military Story", "tags": [16, 29]},
  {"name": "VZLA2019E.cpp", "fname": "Empanadas", "tags": [3]},
  {"name": "VZLA2019K.cpp", "fname": "Koala Fan", "tags": [2, 6, 21, 24]},
  {"name": "WOWSUBSTR.cpp", "fname": "Counting WOW-Substrings", "tags": [1, 3]},
  {"name": "WOWSUBSTR2.cpp", "fname": "Counting WOW-Substrings2", "tags": [1, 3]},
  {"name": "WPC5E.cpp", "fname": "Galaxy distances", "tags": [16, 29]},
  {"name": "XMEN.cpp", "fname": "X-MEN", "tags": [3, 14]},
  {"name": "ZCR.cpp", "fname": "Zen And His Crush	", "tags": [1, 3, 20]}
];
var probs = [
  {"name": "ACRYM", "fname": "Acronym"},
  {"name": "KTRANS", "fname": "K-transfer Journey"},
  {"name": "MACHCOOL2", "fname": "Machine Cooling II"},
  {"name": "MACHCOOL", "fname": "Machine Cooling"},
  {"name": "TLPNGEM", "fname": "Teleporters and Gems"},
  {"name": "LNTILING", "fname": "Long Tiling"},
  {"name": "GIFTARNG", "fname": "Gift Arrangement"},
  {"name": "TRIBT", "fname": "Triangle on Binary Tree"},
  {"name": "SMTOILET", "fname": "Smelly Toilet"},
  {"name": "MAPEXC", "fname": "Map Exploration"},
  {"name": "TRFPLN", "fname": "Traffic Planning"}
];
var recoms = [
  probs[0],
  probs[2],
  probs[6],
  probs[1],
  probs[5]
]