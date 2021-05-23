var completed = '[]';
var progress = '[{"platform":"PlayStation 3","title":"ICO & Shadow of the Colossus: Classics HD","url":"https://youtube.com/playlist?list=PLRtZ--09lf6e99Gq7Xv87kgJh1iiN7FNS"}]';
var todo = '[{"platform":"PC","title":"Rayman 3: Hoodlum Havoc"},{"platform":"PC","title":"The Witcher 3: Wild Hunt"},{"platform":"PlayStation 4","title":"Fallout 4"},{"platform":"PlayStation 3","title":"KINGDOM HEARTS HD 2.5 ReMIX - Limited Edition"},{"platform":"PlayStation 3","title":"KINGDOM HEARTS HD 1.5 ReMIX  - Limited Edition"},{"platform":"PlayStation 3","title":"Uncharted 3: L’Illusion de Drake - Special Edition"},{"platform":"PlayStation 4","title":"The Last Guardian - Steelbook"},{"platform":"PlayStation 3","title":"The Last of Us"},{"platform":"PlayStation 3","title":"God of War 3"},{"platform":"PlayStation 3","title":"God of War Collection - God of War I + God of War II"},{"platform":"PlayStation 3","title":"Assassin\'s Creed: Revelations - Special Edition"},{"platform":"PlayStation 3","title":"Uncharted 2: Among Thieves"},{"platform":"PlayStation 3","title":"Uncharted: Drake\'s Fortune"},{"platform":"PlayStation 3","title":"SoulCalibur IV"},{"platform":"PlayStation 3","title":"Assassin\'s Creed"},{"platform":"PlayStation 4","title":"Horizon: Zero Dawn - Complete Edition"},{"platform":"PlayStation 3","title":"Assassin\'s Creed IV : Black Flag"},{"platform":"PlayStation 3","title":"Assassin\'s Creed III"},{"platform":"PlayStation 3","title":"Assassin\'s Creed Brotherhood"},{"platform":"PlayStation 3","title":"Assassin\'s Creed II"},{"platform":"PlayStation 3","title":"SoulCalibur V"},{"platform":"PlayStation 3","title":"Ni no Kuni : La Vengeance de la Sorcière Céleste"},{"platform":"PlayStation 3","title":"Tomb Raider - Combat Strike Edition"},{"platform":"PlayStation 3","title":"The Elder Scrolls V : Skyrim"},{"platform":"PlayStation 4","title":"Heavy Rain & BEYOND: Two Souls Collection"},{"platform":"PlayStation 4","title":"Order: 1886"},{"platform":"PlayStation 4","title":"Deus Ex : Mankind Divided - Day One Edition"},{"platform":"PlayStation 4","title":"Kingdom Hearts : The Story So Far"},{"platform":"PlayStation 4","title":"Kingdom Hearts III"},{"platform":"PlayStation 4","title":"Doom"},{"platform":"PlayStation 4","title":"NieR: Automata - Game of The YoRHa Edition"},{"platform":"PlayStation 4","title":"Syberia 3"},{"platform":"PlayStation 4","title":"Ni no Kuni II: Revenant Kingdom"},{"platform":"PlayStation 4","title":"Rise of the Tomb Raider : 20th Anniversary"},{"platform":"PlayStation 4","title":"God Of War"},{"platform":"PlayStation 4","title":"Bloodborne"},{"platform":"PlayStation Portable","title":"The 3rd Birthday - Twisted Edition"},{"platform":"PlayStation Portable","title":"Dissidia 012 [duodecim] Final Fantasy - Legacy Edition"},{"platform":"PlayStation 2","title":"Dragon Quest : L\'Odyssée du Roi Maudit"},{"platform":"PlayStation 2","title":"Tomb Raider: Underworld"},{"platform":"PlayStation 2","title":"Lara Croft: Tomb Raider - Legend"},{"platform":"PlayStation 2","title":"Kya : Dark Lineage"},{"platform":"PlayStation 2","title":"Kingdom Hearts II"},{"platform":"PlayStation 2","title":"Lara Croft: Tomb Raider - Anniversary"},{"platform":"PlayStation 2","title":"Kingdom Hearts"},{"platform":"PlayStation 2","title":"Jak 3"},{"platform":"PlayStation 2","title":"Shadow of the Colossus"},{"platform":"PlayStation Portable","title":"Kingdom Hearts : Birth by Sleep"},{"platform":"PlayStation Portable","title":"Dissidia : Final Fantasy"},{"platform":"PlayStation Portable","title":"Jak and Daxter : The Lost Frontier"},{"platform":"PlayStation Portable","title":"Prince of Persia : Les Sables Oubliés"},{"platform":"PlayStation Portable","title":"God of War : Ghost of Sparta"},{"platform":"PlayStation Portable","title":"Crisis Core : Final Fantasy VII"},{"platform":"PlayStation Portable","title":"God of War : Chains of Olympus"},{"platform":"Game Boy Advance","title":"The Legend of Zelda: A Link to the Past & Four Swords"}]';

completed = JSON.parse(completed);
progress = JSON.parse(progress);
todo = JSON.parse(todo);

todo.sort(function(a, b){
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
});