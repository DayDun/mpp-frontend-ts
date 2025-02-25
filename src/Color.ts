class Color {
	static map: Record<string, Color> = {};
	/*static addToMap(hexa: string, name: string) {
		Color.map[name] = new Color(hexa);
	}*/
	
	r: number;
	g: number;
	b: number;
	
	constructor(...args: [string] | [number, number, number]) {
		if (args.length === 1) {
			let hexa = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(args[0]);
			if (hexa && hexa.length === 4) {
				this.r = parseInt(hexa[1], 16);
				this.g = parseInt(hexa[2], 16);
				this.b = parseInt(hexa[3], 16);
			} else {
				// throw new Error("Invalid hex color: " + args);
				this.r = 0;
				this.g = 0;
				this.b = 0;
			}
		} else {
			this.r = args[0];
			this.g = args[1];
			this.b = args[2];
		}
	}

	distance(color: Color): number {
		return Math.sqrt(
			(this.r - color.r) ** 2 +
			(this.g - color.g) ** 2 +
			(this.b - color.b) ** 2
		);
	}

	add(r: number, g: number, b: number) {
		this.r = Math.min(Math.max(this.r + r, 0), 255);
		this.g = Math.min(Math.max(this.g + g, 0), 255);
		this.b = Math.min(Math.max(this.b + b, 0), 255);
	}

	toHexa(): string {
		// TODO: Can probably be done in a nicer way
		let r = this.r.toString(16), g = this.g.toString(16), b = this.b.toString(16);
		if (r.length === 1) r = "0" + r;
		if (g.length === 1) g = "0" + g;
		if (b.length === 1) b = "0" + b;
		return "#" + r + g + b;
	}

	getName(): string {
		let low = 256;
		let name = "";
		for (let n in Color.map) {
			if (!Color.map.hasOwnProperty(n)) continue;
			
			let color = Color.map[n];
			if (color.r === this.r && color.g === this.g && color.b === this.b) {
				return n;
			}
			let dist = this.distance(color);
			if (dist < low) {
				low = dist;
				name = n;
			}
		}
		if (!name)
			name = this.toHexa();
		else
			name = "A shade of " + name;
		return name;
	}
}

Color.map = {
	"Aero": new Color("#7CB9E8"),
	"Aero blue": new Color("#C9FFE5"),
	"African purple": new Color("#B284BE"),
	"Air Force blue (RAF)": new Color("#5D8AA8"),
	"Air Force blue (USAF)": new Color("#00308F"),
	"Air superiority blue": new Color("#72A0C1"),
	"Alabama Crimson": new Color("#AF002A"),
	"Alice blue": new Color("#F0F8FF"),
	"Alizarin crimson": new Color("#E32636"),
	"Alloy orange": new Color("#C46210"),
	"Almond": new Color("#EFDECD"),
	"Amaranth": new Color("#E52B50"),
	"Amaranth pink": new Color("#F19CBB"),
	"Dark amaranth": new Color("#AB274F"),
	"Amazon": new Color("#3B7A57"),
	"Amber": new Color("#FF7E00"),
	"American rose": new Color("#FF033E"),
	"Amethyst": new Color("#9966CC"),
	"Android green": new Color("#A4C639"),
	"Anti-flash white": new Color("#F2F3F4"),
	"Antique brass": new Color("#CD9575"),
	"Antique bronze": new Color("#665D1E"),
	"Antique fuchsia": new Color("#915C83"),
	"Antique ruby": new Color("#841B2D"),
	"Antique white": new Color("#FAEBD7"),
	"Apple green": new Color("#8DB600"),
	"Apricot": new Color("#FBCEB1"),
	"Aqua": new Color("#00FFFF"),
	"Aquamarine": new Color("#7FFFD4"),
	"Army green": new Color("#4B5320"),
	"Arsenic": new Color("#3B444B"),
	"Artichoke": new Color("#8F9779"),
	"Ash grey": new Color("#B2BEB5"),
	"Asparagus": new Color("#87A96B"),
	"Aureolin": new Color("#FDEE00"),
	"AuroMetalSaurus": new Color("#6E7F80"),
	"Avocado": new Color("#568203"),
	"Azure": new Color("#007FFF"),
	"Azure mist/web": new Color("#F0FFFF"),
	"Baby blue": new Color("#89CFF0"),
	"Baby blue eyes": new Color("#A1CAF1"),
	"Baby powder": new Color("#FEFEFA"),
	"Baker-Miller pink": new Color("#FF91AF"),
	"Ball blue": new Color("#21ABCD"),
	"Banana Mania": new Color("#FAE7B5"),
	"Banana yellow": new Color("#FFE135"),
	"Barbie pink": new Color("#E0218A"),
	"Barn red": new Color("#7C0A02"),
	"Battleship grey": new Color("#848482"),
	"Bazaar": new Color("#98777B"),
	"Beaver": new Color("#9F8170"),
	"Beige": new Color("#F5F5DC"),
	"B'dazzled blue": new Color("#2E5894"),
	"Big dip o’ruby": new Color("#9C2542"),
	"Bisque": new Color("#FFE4C4"),
	"Bistre": new Color("#3D2B1F"),
	"Bistre brown": new Color("#967117"),
	"Bitter lemon": new Color("#CAE00D"),
	"Bitter lime": new Color("#648C11"),
	"Bittersweet": new Color("#FE6F5E"),
	"Bittersweet shimmer": new Color("#BF4F51"),
	"Black": new Color("#000000"),
	"Black bean": new Color("#3D0C02"),
	"Black leather jacket": new Color("#253529"),
	"Black olive": new Color("#3B3C36"),
	"Blanched almond": new Color("#FFEBCD"),
	"Blast-off bronze": new Color("#A57164"),
	"Bleu de France": new Color("#318CE7"),
	"Blizzard Blue": new Color("#ACE5EE"),
	"Blond": new Color("#FAF0BE"),
	"Blue": new Color("#0000FF"),
	"Blue (Crayola)": new Color("#1F75FE"),
	"Blue (Munsell)": new Color("#0093AF"),
	"Blue (NCS)": new Color("#0087BD"),
	"Blue (pigment)": new Color("#333399"),
	"Blue (RYB)": new Color("#0247FE"),
	"Blue Bell": new Color("#A2A2D0"),
	"Blue-gray": new Color("#6699CC"),
	"Blue-green": new Color("#0D98BA"),
	"Blue sapphire": new Color("#126180"),
	"Blue-violet": new Color("#8A2BE2"),
	"Blue yonder": new Color("#5072A7"),
	"Blueberry": new Color("#4F86F7"),
	"Bluebonnet": new Color("#1C1CF0"),
	"Blush": new Color("#DE5D83"),
	"Bole Brown": new Color("#79443B"),
	"Bondi blue": new Color("#0095B6"),
	"Bone": new Color("#E3DAC9"),
	"Boston University Red": new Color("#CC0000"),
	"Bottle green": new Color("#006A4E"),
	"Boysenberry": new Color("#873260"),
	"Brandeis blue": new Color("#0070FF"),
	"Brass": new Color("#B5A642"),
	"Brick red": new Color("#CB4154"),
	"Bright cerulean": new Color("#1DACD6"),
	"Bright green": new Color("#66FF00"),
	"Bright lavender": new Color("#BF94E4"),
	"Bright lilac": new Color("#D891EF"),
	"Bright maroon": new Color("#C32148"),
	"Bright navy blue": new Color("#1974D2"),
	"Bright pink": new Color("#FF007F"),
	"Bright turquoise": new Color("#08E8DE"),
	"Bright ube": new Color("#D19FE8"),
	"Brilliant lavender": new Color("#F4BBFF"),
	"Brilliant rose": new Color("#FF55A3"),
	"Brink pink": new Color("#FB607F"),
	"British racing green": new Color("#004225"),
	"Bronze": new Color("#CD7F32"),
	"Bronze Yellow": new Color("#737000"),
	"Brown": new Color("#964B00"),
	"Brown-nose": new Color("#6B4423"),
	"Bubble gum": new Color("#FFC1CC"),
	"Bubbles": new Color("#E7FEFF"),
	"Buff": new Color("#F0DC82"),
	"Bud green": new Color("#7BB661"),
	"Bulgarian rose": new Color("#480607"),
	"Burgundy": new Color("#800020"),
	"Burlywood": new Color("#DEB887"),
	"Burnt orange": new Color("#CC5500"),
	"Burnt umber": new Color("#8A3324"),
	"Byzantine": new Color("#BD33A4"),
	"Byzantium": new Color("#702963"),
	"Cadet": new Color("#536872"),
	"Cadet blue": new Color("#5F9EA0"),
	"Cadet grey": new Color("#91A3B0"),
	"Cadmium green": new Color("#006B3C"),
	"Cadmium orange": new Color("#ED872D"),
	"Cadmium red": new Color("#E30022"),
	"Cadmium yellow": new Color("#FFF600"),
	"Cafe au lait": new Color("#A67B5B"),
	"Cafe noir": new Color("#4B3621"),
	"Cal Poly green": new Color("#1E4D2B"),
	"Cambridge Blue": new Color("#A3C1AD"),
	"Cameo pink": new Color("#EFBBCC"),
	"Camouflage green": new Color("#78866B"),
	"Canary yellow": new Color("#FFEF00"),
	"Candy apple red": new Color("#FF0800"),
	"Candy pink": new Color("#E4717A"),
	"Caput mortuum": new Color("#592720"),
	"Cardinal": new Color("#C41E3A"),
	"Caribbean green": new Color("#00CC99"),
	"Carmine": new Color("#960018"),
	"Carmine pink": new Color("#EB4C42"),
	"Carmine red": new Color("#FF0038"),
	"Carnation pink": new Color("#FFA6C9"),
	"Carolina blue": new Color("#99BADD"),
	"Carrot orange": new Color("#ED9121"),
	"Castleton green": new Color("#00563F"),
	"Catalina blue": new Color("#062A78"),
	"Catawba": new Color("#703642"),
	"Cedar Chest": new Color("#C95A49"),
	"Ceil": new Color("#92A1CF"),
	"Celadon": new Color("#ACE1AF"),
	"Celadon blue": new Color("#007BA7"),
	"Celadon green": new Color("#2F847C"),
	"Celestial blue": new Color("#4997D0"),
	"Cerise pink": new Color("#EC3B83"),
	"Cerulean blue": new Color("#2A52BE"),
	"Cerulean frost": new Color("#6D9BC3"),
	"CG Blue": new Color("#007AA5"),
	"CG Red": new Color("#E03C31"),
	"Chamoisee": new Color("#A0785A"),
	"Champagne": new Color("#F7E7CE"),
	"Charcoal": new Color("#36454F"),
	"Charleston green": new Color("#232B2B"),
	"Charm pink": new Color("#E68FAC"),
	"Chartreuse": new Color("#DFFF00"),
	"Chartreuse (web)": new Color("#7FFF00"),
	"Cherry": new Color("#DE3163"),
	"Cherry blossom pink": new Color("#FFB7C5"),
	"Chestnut": new Color("#954535"),
	"China rose": new Color("#A8516E"),
	"Chinese red": new Color("#AA381E"),
	"Chinese violet": new Color("#856088"),
	"Chocolate": new Color("#7B3F00"),
	"Chrome yellow": new Color("#FFA700"),
	"Cinereous": new Color("#98817B"),
	"Citrine": new Color("#E4D00A"),
	"Citron": new Color("#9FA91F"),
	"Claret": new Color("#7F1734"),
	"Classic rose": new Color("#FBCCE7"),
	"Cobalt": new Color("#0047AB"),
	"Cocoa brown": new Color("#D2691E"),
	"Coconut": new Color("#965A3E"),
	"Coffee Brown": new Color("#6F4E37"),
	"Columbia blue": new Color("#9BDDFF"),
	"Cool black": new Color("#002E63"),
	"Cool grey": new Color("#8C92AC"),
	"Copper": new Color("#B87333"),
	"Copper penny": new Color("#AD6F69"),
	"Copper red": new Color("#CB6D51"),
	"Copper rose": new Color("#996666"),
	"Coquelicot": new Color("#FF3800"),
	"Coral": new Color("#FF7F50"),
	"Coral pink": new Color("#F88379"),
	"Coral red": new Color("#FF4040"),
	"Cordovan": new Color("#893F45"),
	"Corn Yellow": new Color("#FBEC5D"),
	"Cornell Red": new Color("#B31B1B"),
	"Cornflower blue": new Color("#6495ED"),
	"Cornsilk": new Color("#FFF8DC"),
	"Cosmic latte": new Color("#FFF8E7"),
	"Cotton candy": new Color("#FFBCD9"),
	"Cream": new Color("#FFFDD0"),
	"Crimson": new Color("#DC143C"),
	"Crimson glory": new Color("#BE0032"),
	"Cyan": new Color("#00B7EB"),
	"Cyber grape": new Color("#58427C"),
	"Cyber yellow": new Color("#FFD300"),
	"Daffodil": new Color("#FFFF31"),
	"Dandelion": new Color("#F0E130"),
	"Dark blue": new Color("#00008B"),
	"Dark blue-gray": new Color("#666699"),
	"Dark brown": new Color("#654321"),
	"Dark byzantium": new Color("#5D3954"),
	"Dark candy apple red": new Color("#A40000"),
	"Dark cerulean": new Color("#08457E"),
	"Dark chestnut": new Color("#986960"),
	"Dark coral": new Color("#CD5B45"),
	"Dark cyan": new Color("#008B8B"),
	"Dark electric blue": new Color("#536878"),
	"Dark goldenrod": new Color("#B8860B"),
	"Dark gray": new Color("#A9A9A9"),
	"Dark green": new Color("#013220"),
	"Dark imperial blue": new Color("#00416A"),
	"Dark jungle green": new Color("#1A2421"),
	"Dark khaki": new Color("#BDB76B"),
	"Dark lavender": new Color("#734F96"),
	"Dark liver": new Color("#534B4F"),
	"Dark liver (horses)": new Color("#543D37"),
	"Dark magenta": new Color("#8B008B"),
	"Dark midnight blue": new Color("#003366"),
	"Dark moss green": new Color("#4A5D23"),
	"Dark olive green": new Color("#556B2F"),
	"Dark orange": new Color("#FF8C00"),
	"Dark orchid": new Color("#9932CC"),
	"Dark pastel blue": new Color("#779ECB"),
	"Dark pastel green": new Color("#03C03C"),
	"Dark pastel purple": new Color("#966FD6"),
	"Dark pastel red": new Color("#C23B22"),
	"Dark pink": new Color("#E75480"),
	"Dark powder blue": new Color("#003399"),
	"Dark puce": new Color("#4F3A3C"),
	"Dark raspberry": new Color("#872657"),
	"Dark red": new Color("#8B0000"),
	"Dark salmon": new Color("#E9967A"),
	"Dark scarlet": new Color("#560319"),
	"Dark sea green": new Color("#8FBC8F"),
	"Dark sienna": new Color("#3C1414"),
	"Dark sky blue": new Color("#8CBED6"),
	"Dark slate blue": new Color("#483D8B"),
	"Dark slate gray": new Color("#2F4F4F"),
	"Dark spring green": new Color("#177245"),
	"Dark tan": new Color("#918151"),
	"Dark tangerine": new Color("#FFA812"),
	"Dark terra cotta": new Color("#CC4E5C"),
	"Dark turquoise": new Color("#00CED1"),
	"Dark vanilla": new Color("#D1BEA8"),
	"Dark violet": new Color("#9400D3"),
	"Dark yellow": new Color("#9B870C"),
	"Dartmouth green": new Color("#00703C"),
	"Davy's grey": new Color("#555555"),
	"Debian red": new Color("#D70A53"),
	"Deep carmine": new Color("#A9203E"),
	"Deep carmine pink": new Color("#EF3038"),
	"Deep carrot orange": new Color("#E9692C"),
	"Deep cerise": new Color("#DA3287"),
	"Deep chestnut": new Color("#B94E48"),
	"Deep fuchsia": new Color("#C154C1"),
	"Deep jungle green": new Color("#004B49"),
	"Deep lemon": new Color("#F5C71A"),
	"Deep lilac": new Color("#9955BB"),
	"Deep magenta": new Color("#CC00CC"),
	"Deep mauve": new Color("#D473D4"),
	"Deep moss green": new Color("#355E3B"),
	"Deep peach": new Color("#FFCBA4"),
	"Deep puce": new Color("#A95C68"),
	"Deep ruby": new Color("#843F5B"),
	"Deep saffron": new Color("#FF9933"),
	"Deep sky blue": new Color("#00BFFF"),
	"Deep Space Sparkle": new Color("#4A646C"),
	"Deep Taupe": new Color("#7E5E60"),
	"Deep Tuscan red": new Color("#66424D"),
	"Deer": new Color("#BA8759"),
	"Denim": new Color("#1560BD"),
	"Desert sand": new Color("#EDC9AF"),
	"Desire": new Color("#EA3C53"),
	"Diamond": new Color("#B9F2FF"),
	"Dim gray": new Color("#696969"),
	"Dirt": new Color("#9B7653"),
	"Dodger blue": new Color("#1E90FF"),
	"Dogwood rose": new Color("#D71868"),
	"Dollar bill": new Color("#85BB65"),
	"Donkey Brown": new Color("#664C28"),
	"Duke blue": new Color("#00009C"),
	"Dust storm": new Color("#E5CCC9"),
	"Dutch white": new Color("#EFDFBB"),
	"Earth yellow": new Color("#E1A95F"),
	"Ebony": new Color("#555D50"),
	"Eerie black": new Color("#1B1B1B"),
	"Eggplant": new Color("#614051"),
	"Eggshell": new Color("#F0EAD6"),
	"Egyptian blue": new Color("#1034A6"),
	"Electric blue": new Color("#7DF9FF"),
	"Electric crimson": new Color("#FF003F"),
	"Electric green": new Color("#00FF00"),
	"Electric indigo": new Color("#6F00FF"),
	"Electric lime": new Color("#CCFF00"),
	"Electric purple": new Color("#BF00FF"),
	"Electric ultramarine": new Color("#3F00FF"),
	"Electric yellow": new Color("#FFFF00"),
	"Emerald": new Color("#50C878"),
	"Eminence": new Color("#6C3082"),
	"English green": new Color("#1B4D3E"),
	"English lavender": new Color("#B48395"),
	"English red": new Color("#AB4B52"),
	"English violet": new Color("#563C5C"),
	"Eton blue": new Color("#96C8A2"),
	"Eucalyptus": new Color("#44D7A8"),
	"Falu red": new Color("#801818"),
	"Fandango": new Color("#B53389"),
	"Fandango pink": new Color("#DE5285"),
	"Fashion fuchsia": new Color("#F400A1"),
	"Fawn": new Color("#E5AA70"),
	"Feldgrau": new Color("#4D5D53"),
	"Fern green": new Color("#4F7942"),
	"Ferrari Red": new Color("#FF2800"),
	"Field drab": new Color("#6C541E"),
	"Firebrick": new Color("#B22222"),
	"Fire engine red": new Color("#CE2029"),
	"Flame": new Color("#E25822"),
	"Flamingo pink": new Color("#FC8EAC"),
	"Flavescent": new Color("#F7E98E"),
	"Flax": new Color("#EEDC82"),
	"Flirt": new Color("#A2006D"),
	"Floral white": new Color("#FFFAF0"),
	"Fluorescent orange": new Color("#FFBF00"),
	"Fluorescent pink": new Color("#FF1493"),
	"Folly": new Color("#FF004F"),
	"Forest green": new Color("#014421"),
	"Forest green (web)": new Color("#228B22"),
	"French bistre": new Color("#856D4D"),
	"French blue": new Color("#0072BB"),
	"French fuchsia": new Color("#FD3F92"),
	"French lilac": new Color("#86608E"),
	"French lime": new Color("#9EFD38"),
	"French pink": new Color("#FD6C9E"),
	"French puce": new Color("#4E1609"),
	"French raspberry": new Color("#C72C48"),
	"French rose": new Color("#F64A8A"),
	"French sky blue": new Color("#77B5FE"),
	"French violet": new Color("#8806CE"),
	"French wine": new Color("#AC1E44"),
	"Fresh Air": new Color("#A6E7FF"),
	"Fuchsia pink": new Color("#FF77FF"),
	"Fuchsia purple": new Color("#CC397B"),
	"Fuchsia rose": new Color("#C74375"),
	"Fulvous": new Color("#E48400"),
	"Fuzzy Wuzzy": new Color("#CC6666"),
	"Gainsboro": new Color("#DCDCDC"),
	"Gamboge": new Color("#E49B0F"),
	"Generic viridian": new Color("#007F66"),
	"Ghost white": new Color("#F8F8FF"),
	"Giants orange": new Color("#FE5A1D"),
	"Ginger": new Color("#B06500"),
	"Glaucous": new Color("#6082B6"),
	"Glitter": new Color("#E6E8FA"),
	"GO green": new Color("#00AB66"),
	"Gold (metallic)": new Color("#D4AF37"),
	"Gold (web) (Golden)": new Color("#FFD700"),
	"Gold Fusion": new Color("#85754E"),
	"Golden brown": new Color("#996515"),
	"Golden poppy": new Color("#FCC200"),
	"Golden yellow": new Color("#FFDF00"),
	"Goldenrod": new Color("#DAA520"),
	"Granny Smith Apple": new Color("#A8E4A0"),
	"Grape": new Color("#6F2DA8"),
	"Gray": new Color("#808080"),
	"Gray (X11 gray)": new Color("#BEBEBE"),
	"Gray-asparagus": new Color("#465945"),
	"Green (Crayola)": new Color("#1CAC78"),
	"Green": new Color("#008000"),
	"Green (Munsell)": new Color("#00A877"),
	"Green (NCS)": new Color("#009F6B"),
	"Green (pigment)": new Color("#00A550"),
	"Green (RYB)": new Color("#66B032"),
	"Green-yellow": new Color("#ADFF2F"),
	"Grullo": new Color("#A99A86"),
	"Halaya ube": new Color("#663854"),
	"Han blue": new Color("#446CCF"),
	"Han purple": new Color("#5218FA"),
	"Hansa yellow": new Color("#E9D66B"),
	"Harlequin": new Color("#3FFF00"),
	"Harvard crimson": new Color("#C90016"),
	"Harvest gold": new Color("#DA9100"),
	"Heliotrope": new Color("#DF73FF"),
	"Heliotrope gray": new Color("#AA98A9"),
	"Honeydew": new Color("#F0FFF0"),
	"Honolulu blue": new Color("#006DB0"),
	"Hooker's green": new Color("#49796B"),
	"Hot magenta": new Color("#FF1DCE"),
	"Hot pink": new Color("#FF69B4"),
	"Iceberg": new Color("#71A6D2"),
	"Icterine": new Color("#FCF75E"),
	"Illuminating Emerald": new Color("#319177"),
	"Imperial": new Color("#602F6B"),
	"Imperial blue": new Color("#002395"),
	"Imperial purple": new Color("#66023C"),
	"Imperial red": new Color("#ED2939"),
	"Inchworm": new Color("#B2EC5D"),
	"Independence": new Color("#4C516D"),
	"India green": new Color("#138808"),
	"Indian red": new Color("#CD5C5C"),
	"Indian yellow": new Color("#E3A857"),
	"Indigo": new Color("#4B0082"),
	"International Klein Blue": new Color("#002FA7"),
	"International orange (aerospace)": new Color("#FF4F00"),
	"International orange (engineering)": new Color("#BA160C"),
	"International orange (Golden Gate Bridge)": new Color("#C0362C"),
	"Iris": new Color("#5A4FCF"),
	"Isabelline": new Color("#F4F0EC"),
	"Islamic green": new Color("#009000"),
	"Italian sky blue": new Color("#B2FFFF"),
	"Ivory": new Color("#FFFFF0"),
	"Jade": new Color("#00A86B"),
	"Japanese carmine": new Color("#9D2933"),
	"Japanese indigo": new Color("#264348"),
	"Japanese violet": new Color("#5B3256"),
	"Jasper": new Color("#D73B3E"),
	"Jazzberry jam": new Color("#A50B5E"),
	"Jelly Bean": new Color("#DA614E"),
	"Jet": new Color("#343434"),
	"Jonquil": new Color("#F4CA16"),
	"Jordy blue": new Color("#8AB9F1"),
	"June bud": new Color("#BDDA57"),
	"Jungle green": new Color("#29AB87"),
	"Kelly green": new Color("#4CBB17"),
	"Kenyan copper": new Color("#7C1C05"),
	"Keppel": new Color("#3AB09E"),
	"Khaki": new Color("#C3B091"),
	"Kobi": new Color("#E79FC4"),
	"Kombu green": new Color("#354230"),
	"KU Crimson": new Color("#E8000D"),
	"La Salle Green": new Color("#087830"),
	"Languid lavender": new Color("#D6CADD"),
	"Lapis lazuli": new Color("#26619C"),
	"Laurel green": new Color("#A9BA9D"),
	"Lava": new Color("#CF1020"),
	"Lavender (floral)": new Color("#B57EDC"),
	"Lavender blue": new Color("#CCCCFF"),
	"Lavender blush": new Color("#FFF0F5"),
	"Lavender gray": new Color("#C4C3D0"),
	"Lavender indigo": new Color("#9457EB"),
	"Lavender magenta": new Color("#EE82EE"),
	"Lavender mist": new Color("#E6E6FA"),
	"Lavender pink": new Color("#FBAED2"),
	"Lavender purple": new Color("#967BB6"),
	"Lavender rose": new Color("#FBA0E3"),
	"Lawn green": new Color("#7CFC00"),
	"Lemon": new Color("#FFF700"),
	"Lemon chiffon": new Color("#FFFACD"),
	"Lemon curry": new Color("#CCA01D"),
	"Lemon glacier": new Color("#FDFF00"),
	"Lemon lime": new Color("#E3FF00"),
	"Lemon meringue": new Color("#F6EABE"),
	"Lemon yellow": new Color("#FFF44F"),
	"Licorice": new Color("#1A1110"),
	"Liberty": new Color("#545AA7"),
	"Light apricot": new Color("#FDD5B1"),
	"Light blue": new Color("#ADD8E6"),
	"Light brown": new Color("#B5651D"),
	"Light carmine pink": new Color("#E66771"),
	"Light coral": new Color("#F08080"),
	"Light cornflower blue": new Color("#93CCEA"),
	"Light crimson": new Color("#F56991"),
	"Light cyan": new Color("#E0FFFF"),
	"Light deep pink": new Color("#FF5CCD"),
	"Light French beige": new Color("#C8AD7F"),
	"Light fuchsia pink": new Color("#F984EF"),
	"Light goldenrod yellow": new Color("#FAFAD2"),
	"Light gray": new Color("#D3D3D3"),
	"Light green": new Color("#90EE90"),
	"Light hot pink": new Color("#FFB3DE"),
	"Light khaki": new Color("#F0E68C"),
	"Light medium orchid": new Color("#D39BCB"),
	"Light moss green": new Color("#ADDFAD"),
	"Light orchid": new Color("#E6A8D7"),
	"Light pastel purple": new Color("#B19CD9"),
	"Light pink": new Color("#FFB6C1"),
	"Light red ochre": new Color("#E97451"),
	"Light salmon": new Color("#FFA07A"),
	"Light salmon pink": new Color("#FF9999"),
	"Light sea green": new Color("#20B2AA"),
	"Light sky blue": new Color("#87CEFA"),
	"Light slate gray": new Color("#778899"),
	"Light steel blue": new Color("#B0C4DE"),
	"Light taupe": new Color("#B38B6D"),
	"Light yellow": new Color("#FFFFE0"),
	"Lilac": new Color("#C8A2C8"),
	"Lime": new Color("#BFFF00"),
	"Lime green": new Color("#32CD32"),
	"Limerick": new Color("#9DC209"),
	"Lincoln green": new Color("#195905"),
	"Linen": new Color("#FAF0E6"),
	"Little boy blue": new Color("#6CA0DC"),
	"Liver (dogs)": new Color("#B86D29"),
	"Liver": new Color("#6C2E1F"),
	"Liver chestnut": new Color("#987456"),
	"Lumber": new Color("#FFE4CD"),
	"Lust": new Color("#E62020"),
	"Magenta": new Color("#FF00FF"),
	"Magenta (dye)": new Color("#CA1F7B"),
	"Magenta (Pantone)": new Color("#D0417E"),
	"Magenta (process)": new Color("#FF0090"),
	"Magenta haze": new Color("#9F4576"),
	"Magic mint": new Color("#AAF0D1"),
	"Magnolia": new Color("#F8F4FF"),
	"Mahogany": new Color("#C04000"),
	"Majorelle Blue": new Color("#6050DC"),
	"Malachite": new Color("#0BDA51"),
	"Manatee": new Color("#979AAA"),
	"Mango Tango": new Color("#FF8243"),
	"Mantis": new Color("#74C365"),
	"Mardi Gras": new Color("#880085"),
	"Maroon": new Color("#800000"),
	"Mauve": new Color("#E0B0FF"),
	"Mauve taupe": new Color("#915F6D"),
	"Mauvelous": new Color("#EF98AA"),
	"May green": new Color("#4C9141"),
	"Maya blue": new Color("#73C2FB"),
	"Meat brown": new Color("#E5B73B"),
	"Medium aquamarine": new Color("#66DDAA"),
	"Medium blue": new Color("#0000CD"),
	"Medium candy apple red": new Color("#E2062C"),
	"Medium carmine": new Color("#AF4035"),
	"Medium electric blue": new Color("#035096"),
	"Medium jungle green": new Color("#1C352D"),
	"Medium orchid": new Color("#BA55D3"),
	"Medium purple": new Color("#9370DB"),
	"Medium red-violet": new Color("#BB3385"),
	"Medium ruby": new Color("#AA4069"),
	"Medium sea green": new Color("#3CB371"),
	"Medium sky blue": new Color("#80DAEB"),
	"Medium slate blue": new Color("#7B68EE"),
	"Medium spring bud": new Color("#C9DC87"),
	"Medium spring green": new Color("#00FA9A"),
	"Medium taupe": new Color("#674C47"),
	"Medium turquoise": new Color("#48D1CC"),
	"Pale vermilion": new Color("#D9603B"),
	"Mellow apricot": new Color("#F8B878"),
	"Mellow yellow": new Color("#F8DE7E"),
	"Melon": new Color("#FDBCB4"),
	"Metallic Seaweed": new Color("#0A7E8C"),
	"Metallic Sunburst": new Color("#9C7C38"),
	"Mexican pink": new Color("#E4007C"),
	"Midnight blue": new Color("#191970"),
	"Midnight green (eagle green)": new Color("#004953"),
	"Mikado yellow": new Color("#FFC40C"),
	"Mindaro": new Color("#E3F988"),
	"Mint": new Color("#3EB489"),
	"Mint cream": new Color("#F5FFFA"),
	"Mint green": new Color("#98FF98"),
	"Misty rose": new Color("#FFE4E1"),
	"Moonstone blue": new Color("#73A9C2"),
	"Mordant red 19": new Color("#AE0C00"),
	"Moss green": new Color("#8A9A5B"),
	"Mountain Meadow": new Color("#30BA8F"),
	"Mountbatten pink": new Color("#997A8D"),
	"MSU Green": new Color("#18453B"),
	"Mughal green": new Color("#306030"),
	"Mulberry": new Color("#C54B8C"),
	"Mustard": new Color("#FFDB58"),
	"Myrtle green": new Color("#317873"),
	"Nadeshiko pink": new Color("#F6ADC6"),
	"Napier green": new Color("#2A8000"),
	"Navajo white": new Color("#FFDEAD"),
	"Navy": new Color("#000080"),
	"Neon Carrot": new Color("#FFA343"),
	"Neon fuchsia": new Color("#FE4164"),
	"Neon green": new Color("#39FF14"),
	"New Car": new Color("#214FC6"),
	"New York pink": new Color("#D7837F"),
	"Non-photo blue": new Color("#A4DDED"),
	"North Texas Green": new Color("#059033"),
	"Nyanza": new Color("#E9FFDB"),
	"Ocean Boat Blue": new Color("#0077BE"),
	"Ochre": new Color("#CC7722"),
	"Old burgundy": new Color("#43302E"),
	"Old gold": new Color("#CFB53B"),
	"Old lace": new Color("#FDF5E6"),
	"Old lavender": new Color("#796878"),
	"Old mauve": new Color("#673147"),
	"Old moss green": new Color("#867E36"),
	"Old rose": new Color("#C08081"),
	"Olive": new Color("#808000"),
	"Olive Drab #3": new Color("#6B8E23"),
	"Olive Drab #7": new Color("#3C341F"),
	"Olivine": new Color("#9AB973"),
	"Onyx": new Color("#353839"),
	"Opera mauve": new Color("#B784A7"),
	"Orange": new Color("#FF7F00"),
	"Orange (Crayola)": new Color("#FF7538"),
	"Orange (Pantone)": new Color("#FF5800"),
	"Orange (RYB)": new Color("#FB9902"),
	"Orange (web)": new Color("#FFA500"),
	"Orange peel": new Color("#FF9F00"),
	"Orange-red": new Color("#FF4500"),
	"Orchid": new Color("#DA70D6"),
	"Orchid pink": new Color("#F2BDCD"),
	"Orioles orange": new Color("#FB4F14"),
	"Outer Space": new Color("#414A4C"),
	"Outrageous Orange": new Color("#FF6E4A"),
	"Oxford Blue": new Color("#002147"),
	"Crimson Red": new Color("#990000"),
	"Pakistan green": new Color("#006600"),
	"Palatinate blue": new Color("#273BE2"),
	"Palatinate purple": new Color("#682860"),
	"Pale aqua": new Color("#BCD4E6"),
	"Pale blue": new Color("#AFEEEE"),
	"Pale brown": new Color("#987654"),
	"Pale cerulean": new Color("#9BC4E2"),
	"Pale chestnut": new Color("#DDADAF"),
	"Pale copper": new Color("#DA8A67"),
	"Pale cornflower blue": new Color("#ABCDEF"),
	"Pale gold": new Color("#E6BE8A"),
	"Pale goldenrod": new Color("#EEE8AA"),
	"Pale green": new Color("#98FB98"),
	"Pale lavender": new Color("#DCD0FF"),
	"Pale magenta": new Color("#F984E5"),
	"Pale pink": new Color("#FADADD"),
	"Pale plum": new Color("#DDA0DD"),
	"Pale red-violet": new Color("#DB7093"),
	"Pale robin egg blue": new Color("#96DED1"),
	"Pale silver": new Color("#C9C0BB"),
	"Pale spring bud": new Color("#ECEBBD"),
	"Pale taupe": new Color("#BC987E"),
	"Pansy purple": new Color("#78184A"),
	"Paolo Veronese green": new Color("#009B7D"),
	"Papaya whip": new Color("#FFEFD5"),
	"Paradise pink": new Color("#E63E62"),
	"Pastel blue": new Color("#AEC6CF"),
	"Pastel brown": new Color("#836953"),
	"Pastel gray": new Color("#CFCFC4"),
	"Pastel green": new Color("#77DD77"),
	"Pastel magenta": new Color("#F49AC2"),
	"Pastel orange": new Color("#FFB347"),
	"Pastel pink": new Color("#DEA5A4"),
	"Pastel purple": new Color("#B39EB5"),
	"Pastel red": new Color("#FF6961"),
	"Pastel violet": new Color("#CB99C9"),
	"Pastel yellow": new Color("#FDFD96"),
	"Peach": new Color("#FFE5B4"),
	"Peach-orange": new Color("#FFCC99"),
	"Peach puff": new Color("#FFDAB9"),
	"Peach-yellow": new Color("#FADFAD"),
	"Pear": new Color("#D1E231"),
	"Pearl": new Color("#EAE0C8"),
	"Pearl Aqua": new Color("#88D8C0"),
	"Pearly purple": new Color("#B768A2"),
	"Peridot": new Color("#E6E200"),
	"Persian blue": new Color("#1C39BB"),
	"Persian green": new Color("#00A693"),
	"Persian indigo": new Color("#32127A"),
	"Persian orange": new Color("#D99058"),
	"Persian pink": new Color("#F77FBE"),
	"Persian plum": new Color("#701C1C"),
	"Persian red": new Color("#CC3333"),
	"Persian rose": new Color("#FE28A2"),
	"Persimmon": new Color("#EC5800"),
	"Peru": new Color("#CD853F"),
	"Phthalo blue": new Color("#000F89"),
	"Phthalo green": new Color("#123524"),
	"Picton blue": new Color("#45B1E8"),
	"Pictorial carmine": new Color("#C30B4E"),
	"Piggy pink": new Color("#FDDDE6"),
	"Pine green": new Color("#01796F"),
	"Pink": new Color("#FFC0CB"),
	"Pink (Pantone)": new Color("#D74894"),
	"Pink lace": new Color("#FFDDF4"),
	"Pink lavender": new Color("#D8B2D1"),
	"Pink-orange": new Color("#FF9966"),
	"Pink pearl": new Color("#E7ACCF"),
	"Pink Sherbet": new Color("#F78FA7"),
	"Pistachio": new Color("#93C572"),
	"Platinum": new Color("#E5E4E2"),
	"Plum": new Color("#8E4585"),
	"Popstar": new Color("#BE4F62"),
	"Portland Orange": new Color("#FF5A36"),
	"Powder blue": new Color("#B0E0E6"),
	"Princeton orange": new Color("#FF8F00"),
	"Prussian blue": new Color("#003153"),
	"Psychedelic purple": new Color("#DF00FF"),
	"Puce": new Color("#CC8899"),
	"Pullman Brown (UPS Brown)": new Color("#644117"),
	"Pumpkin": new Color("#FF7518"),
	"Deep purple": new Color("#800080"),
	"Purple (Munsell)": new Color("#9F00C5"),
	"Purple": new Color("#A020F0"),
	"Purple Heart": new Color("#69359C"),
	"Purple mountain majesty": new Color("#9678B6"),
	"Purple navy": new Color("#4E5180"),
	"Purple pizzazz": new Color("#FE4EDA"),
	"Purple taupe": new Color("#50404D"),
	"Purpureus": new Color("#9A4EAE"),
	"Quartz": new Color("#51484F"),
	"Queen blue": new Color("#436B95"),
	"Queen pink": new Color("#E8CCD7"),
	"Quinacridone magenta": new Color("#8E3A59"),
	"Radical Red": new Color("#FF355E"),
	"Rajah": new Color("#FBAB60"),
	"Raspberry": new Color("#E30B5D"),
	"Raspberry pink": new Color("#E25098"),
	"Raspberry rose": new Color("#B3446C"),
	"Raw umber": new Color("#826644"),
	"Razzle dazzle rose": new Color("#FF33CC"),
	"Razzmatazz": new Color("#E3256B"),
	"Razzmic Berry": new Color("#8D4E85"),
	"Red": new Color("#FF0000"),
	"Red (Crayola)": new Color("#EE204D"),
	"Red (Munsell)": new Color("#F2003C"),
	"Red (NCS)": new Color("#C40233"),
	"Red (pigment)": new Color("#ED1C24"),
	"Red (RYB)": new Color("#FE2712"),
	"Red-brown": new Color("#A52A2A"),
	"Red devil": new Color("#860111"),
	"Red-orange": new Color("#FF5349"),
	"Red-purple": new Color("#E40078"),
	"Red-violet": new Color("#C71585"),
	"Redwood": new Color("#A45A52"),
	"Regalia": new Color("#522D80"),
	"Resolution blue": new Color("#002387"),
	"Rhythm": new Color("#777696"),
	"Rich black": new Color("#004040"),
	"Rich brilliant lavender": new Color("#F1A7FE"),
	"Rich carmine": new Color("#D70040"),
	"Rich electric blue": new Color("#0892D0"),
	"Rich lavender": new Color("#A76BCF"),
	"Rich lilac": new Color("#B666D2"),
	"Rich maroon": new Color("#B03060"),
	"Rifle green": new Color("#444C38"),
	"Deep Roast coffee": new Color("#704241"),
	"Robin egg blue": new Color("#00CCCC"),
	"Rocket metallic": new Color("#8A7F80"),
	"Roman silver": new Color("#838996"),
	"Rose bonbon": new Color("#F9429E"),
	"Rose ebony": new Color("#674846"),
	"Rose gold": new Color("#B76E79"),
	"Rose pink": new Color("#FF66CC"),
	"Rose red": new Color("#C21E56"),
	"Rose taupe": new Color("#905D5D"),
	"Rose vale": new Color("#AB4E52"),
	"Rosewood": new Color("#65000B"),
	"Rosso corsa": new Color("#D40000"),
	"Rosy brown": new Color("#BC8F8F"),
	"Royal azure": new Color("#0038A8"),
	"Royal blue": new Color("#002366"),
	"Royal light blue": new Color("#4169E1"),
	"Royal fuchsia": new Color("#CA2C92"),
	"Royal purple": new Color("#7851A9"),
	"Royal yellow": new Color("#FADA5E"),
	"Ruber": new Color("#CE4676"),
	"Rubine red": new Color("#D10056"),
	"Ruby": new Color("#E0115F"),
	"Ruby red": new Color("#9B111E"),
	"Ruddy": new Color("#FF0028"),
	"Ruddy brown": new Color("#BB6528"),
	"Ruddy pink": new Color("#E18E96"),
	"Rufous": new Color("#A81C07"),
	"Russet": new Color("#80461B"),
	"Russian green": new Color("#679267"),
	"Russian violet": new Color("#32174D"),
	"Rust": new Color("#B7410E"),
	"Rusty red": new Color("#DA2C43"),
	"Saddle brown": new Color("#8B4513"),
	"Safety orange (blaze orange)": new Color("#FF6700"),
	"Safety yellow": new Color("#EED202"),
	"Saffron": new Color("#F4C430"),
	"Sage": new Color("#BCB88A"),
	"St. Patrick's blue": new Color("#23297A"),
	"Salmon": new Color("#FA8072"),
	"Salmon pink": new Color("#FF91A4"),
	"Sand": new Color("#C2B280"),
	"Sandstorm": new Color("#ECD540"),
	"Sandy brown": new Color("#F4A460"),
	"Sangria": new Color("#92000A"),
	"Sap green": new Color("#507D2A"),
	"Sapphire": new Color("#0F52BA"),
	"Sapphire blue": new Color("#0067A5"),
	"Satin sheen gold": new Color("#CBA135"),
	"Scarlet": new Color("#FF2400"),
	"School bus yellow": new Color("#FFD800"),
	"Screamin' Green": new Color("#76FF7A"),
	"Sea blue": new Color("#006994"),
	"Sea green": new Color("#2E8B57"),
	"Seal brown": new Color("#321414"),
	"Seashell": new Color("#FFF5EE"),
	"Selective yellow": new Color("#FFBA00"),
	"Sepia": new Color("#704214"),
	"Shadow": new Color("#8A795D"),
	"Shadow blue": new Color("#778BA5"),
	"Shampoo": new Color("#FFCFF1"),
	"Shamrock green": new Color("#009E60"),
	"Sheen Green": new Color("#8FD400"),
	"Shimmering Blush": new Color("#D98695"),
	"Shocking pink": new Color("#FC0FC0"),
	"Sienna": new Color("#882D17"),
	"Silver": new Color("#C0C0C0"),
	"Silver chalice": new Color("#ACACAC"),
	"Silver Lake blue": new Color("#5D89BA"),
	"Silver pink": new Color("#C4AEAD"),
	"Silver sand": new Color("#BFC1C2"),
	"Sinopia": new Color("#CB410B"),
	"Skobeloff": new Color("#007474"),
	"Sky blue": new Color("#87CEEB"),
	"Sky magenta": new Color("#CF71AF"),
	"Slate blue": new Color("#6A5ACD"),
	"Slate gray": new Color("#708090"),
	"Smitten": new Color("#C84186"),
	"Smoke": new Color("#738276"),
	"Smokey topaz": new Color("#933D41"),
	"Smoky black": new Color("#100C08"),
	"Snow": new Color("#FFFAFA"),
	"Soap": new Color("#CEC8EF"),
	"Solid pink": new Color("#893843"),
	"Sonic silver": new Color("#757575"),
	"Spartan Crimson": new Color("#9E1316"),
	"Space cadet": new Color("#1D2951"),
	"Spanish bistre": new Color("#807532"),
	"Spanish blue": new Color("#0070B8"),
	"Spanish carmine": new Color("#D10047"),
	"Spanish crimson": new Color("#E51A4C"),
	"Spanish gray": new Color("#989898"),
	"Spanish green": new Color("#009150"),
	"Spanish orange": new Color("#E86100"),
	"Spanish pink": new Color("#F7BFBE"),
	"Spanish red": new Color("#E60026"),
	"Spanish violet": new Color("#4C2882"),
	"Spanish viridian": new Color("#007F5C"),
	"Spiro Disco Ball": new Color("#0FC0FC"),
	"Spring bud": new Color("#A7FC00"),
	"Spring green": new Color("#00FF7F"),
	"Star command blue": new Color("#007BB8"),
	"Steel blue": new Color("#4682B4"),
	"Steel pink": new Color("#CC33CC"),
	"Stormcloud": new Color("#4F666A"),
	"Straw": new Color("#E4D96F"),
	"Strawberry": new Color("#FC5A8D"),
	"Sunglow": new Color("#FFCC33"),
	"Sunray": new Color("#E3AB57"),
	"Sunset": new Color("#FAD6A5"),
	"Sunset orange": new Color("#FD5E53"),
	"Super pink": new Color("#CF6BA9"),
	"Tan": new Color("#D2B48C"),
	"Tangelo": new Color("#F94D00"),
	"Tangerine": new Color("#F28500"),
	"Tangerine yellow": new Color("#FFCC00"),
	"Dark Grayish Brown": new Color("#483C32"),
	"Taupe gray": new Color("#8B8589"),
	"Tea green": new Color("#D0F0C0"),
	"Tea rose": new Color("#F4C2C2"),
	"Teal": new Color("#008080"),
	"Teal blue": new Color("#367588"),
	"Teal deer": new Color("#99E6B3"),
	"Teal green": new Color("#00827F"),
	"Telemagenta": new Color("#CF3476"),
	"Tenne": new Color("#CD5700"),
	"Terra cotta": new Color("#E2725B"),
	"Thistle": new Color("#D8BFD8"),
	"Thulian pink": new Color("#DE6FA1"),
	"Tickle Me Pink": new Color("#FC89AC"),
	"Tiffany Blue": new Color("#0ABAB5"),
	"Tiger's eye": new Color("#E08D3C"),
	"Timberwolf": new Color("#DBD7D2"),
	"Titanium yellow": new Color("#EEE600"),
	"Tomato": new Color("#FF6347"),
	"Toolbox": new Color("#746CC0"),
	"Toothpaste advert green": new Color("#42B72A"),
	"Topaz": new Color("#FFC87C"),
	"Tractor red": new Color("#FD0E35"),
	"Tropical rain forest": new Color("#00755E"),
	"True Blue": new Color("#0073CF"),
	"Tufts Blue": new Color("#417DC1"),
	"Tulip": new Color("#FF878D"),
	"Tumbleweed": new Color("#DEAA88"),
	"Turkish rose": new Color("#B57281"),
	"Turquoise": new Color("#40E0D0"),
	"Turquoise blue": new Color("#00FFEF"),
	"Turquoise green": new Color("#A0D6B4"),
	"Tuscan red": new Color("#7C4848"),
	"Tuscany": new Color("#C09999"),
	"Twilight lavender": new Color("#8A496B"),
	"UA blue": new Color("#0033AA"),
	"UA red": new Color("#D9004C"),
	"Ube": new Color("#8878C3"),
	"UCLA Blue": new Color("#536895"),
	"UCLA Gold": new Color("#FFB300"),
	"UFO Green": new Color("#3CD070"),
	"Ultramarine": new Color("#120A8F"),
	"Ultramarine blue": new Color("#4166F5"),
	"Ultra pink": new Color("#FF6FFF"),
	"Umber": new Color("#635147"),
	"Unbleached silk": new Color("#FFDDCA"),
	"United Nations blue": new Color("#5B92E5"),
	"University of California Gold": new Color("#B78727"),
	"Unmellow yellow": new Color("#FFFF66"),
	"UP Maroon": new Color("#7B1113"),
	"Upsdell red": new Color("#AE2029"),
	"Urobilin": new Color("#E1AD21"),
	"USAFA blue": new Color("#004F98"),
	"University of Tennessee Orange": new Color("#F77F00"),
	"Utah Crimson": new Color("#D3003F"),
	"Vanilla": new Color("#F3E5AB"),
	"Vanilla ice": new Color("#F38FA9"),
	"Vegas gold": new Color("#C5B358"),
	"Venetian red": new Color("#C80815"),
	"Verdigris": new Color("#43B3AE"),
	"Medium vermilion": new Color("#E34234"),
	"Vermilion": new Color("#D9381E"),
	"Violet": new Color("#8F00FF"),
	"Violet (color wheel)": new Color("#7F00FF"),
	"Violet (RYB)": new Color("#8601AF"),
	"Violet-blue": new Color("#324AB2"),
	"Violet-red": new Color("#F75394"),
	"Viridian": new Color("#40826D"),
	"Viridian green": new Color("#009698"),
	"Vivid auburn": new Color("#922724"),
	"Vivid burgundy": new Color("#9F1D35"),
	"Vivid cerise": new Color("#DA1D81"),
	"Vivid orchid": new Color("#CC00FF"),
	"Vivid sky blue": new Color("#00CCFF"),
	"Vivid tangerine": new Color("#FFA089"),
	"Vivid violet": new Color("#9F00FF"),
	"Warm black": new Color("#004242"),
	"Waterspout": new Color("#A4F4F9"),
	"Wenge": new Color("#645452"),
	"Wheat": new Color("#F5DEB3"),
	"White": new Color("#FFFFFF"),
	"White smoke": new Color("#F5F5F5"),
	"Wild blue yonder": new Color("#A2ADD0"),
	"Wild orchid": new Color("#D470A2"),
	"Wild Strawberry": new Color("#FF43A4"),
	"Wild watermelon": new Color("#FC6C85"),
	"Willpower orange": new Color("#FD5800"),
	"Windsor tan": new Color("#A75502"),
	"Wine": new Color("#722F37"),
	"Wisteria": new Color("#C9A0DC"),
	"Wood brown": new Color("#C19A6B"),
	"Xanadu": new Color("#738678"),
	"Yale Blue": new Color("#0F4D92"),
	"Yankees blue": new Color("#1C2841"),
	"Yellow (Crayola)": new Color("#FCE883"),
	"Yellow (Munsell)": new Color("#EFCC00"),
	"Yellow (Pantone)": new Color("#FEDF00"),
	"Yellow": new Color("#FEFE33"),
	"Yellow Green": new Color("#9ACD32"),
	"Yellow Orange": new Color("#FFAE42"),
	"Yellow rose": new Color("#FFF000"),
	"Zaffre": new Color("#0014A8"),
	"Zinnwaldite brown": new Color("#2C1608"),
	"Zomp": new Color("#39A78E")
};

(window as any).Color = Color; //* Moved global "export" to bottom - Hri7566
