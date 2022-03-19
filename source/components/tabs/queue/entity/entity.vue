<script>
	import Multiselect from '@vueform/multiselect';

	import Item from './item.vue';

	// https://github.com/SortableJS/vue.draggable.next
	import Draggable from 'vuedraggable';

	export default {
		props: ['data'],
		components: {
			Multiselect,
			Draggable,
			Item
		},
		data() {
			return {
				isExpanded: true, // temp
				isDead: false,
				testSkillsDb: {
					5: 'Siema'
				},
				testSkills: [{
					valueProp: 1,
					label: 'v1',
					disabled: false
				}]
			}
		},
		mounted() {
			this.setRandomInitiative();
			this.data.stats.tempW = this.data.stats.w;

			// let thisTest = this;

			// setInterval(() => {
			// 	console.log(thisTest.data.inventory);
			// }, 5000);
		},
		methods: {
			handleNameInput(e) {
				this.data.name = e.target.innerHTML.replace(/(?:^(?:&nbsp;)+)|(?:(?:&nbsp;)+$)/g, '');
				console.log(this.data.name);
			},
			handleRaceInput(e) {
				this.data.race = e.target.innerHTML.replace(/(?:^(?:&nbsp;)+)|(?:(?:&nbsp;)+$)/g, '');
				console.log(this.data.race);
			},
			async setRandomInitiative() {
				this.data.stats.initiative = this.data.stats.ag + parseInt(await randomizer.getRandomNumber(1, 10));
			}
		}
	}
</script>


<template>
	<div class="tile box is-parent box is-white is-vertical" :style="{'border': '2px solid' + data.color}">
		<div class="tile is-child ">
			<nav class="level">
				<!-- Left side -->
				<div class="level-left">
					<div class="level-item">
						<p class="icon is-large title">
							<i v-if="isDead" class="fa-solid fa-user-slash"></i>
							<i v-else-if="data.stats.tempW == 0" class="fa-solid fa-user-injured"></i>
							<i v-else class="fa-solid fa-user"></i>
						</p>
					</div>
					<div class="level-item">
						<p class="title is-half" contenteditable @input="handleNameInput">{{data.name}}</p>
					</div>
					<div class="level-item">
						<div class="icon is-size-5 pt-1" style="color: black;">
							<i class="fas fa-fingerprint"></i>
						</div>
					</div>
					<div class="level-item">
						<p class="title is-half" contenteditable @input="handleRaceInput">{{data.race}}</p>
					</div>
				</div>

				<!-- Right side -->
				<div class="level-right">
					<p class="level-item" v-if="!isDead">
						<button class="button" @click="isExpanded = !isExpanded">
							<span class="icon is-small">
								<i v-if="!isExpanded" class="fa-solid fa-up-right-and-down-left-from-center"></i>
								<i v-else class="fa-solid fa-down-left-and-up-right-to-center"></i>
							</span>
						</button>
					</p>
					<p class="level-item">
						<button class="button" :class="{'is-black': isDead}" @click="isDead = !isDead">
							<span class="icon is-small">
								<i class="fas fa-skull"></i>
							</span>
						</button>
					</p>
					<p class="level-item">
						<button class="button is-danger">
							<span class="icon is-small">
								<i class="fas fa-trash"></i>
							</span>
						</button>
					</p>
					<p class="level-item" v-if="!isDead">
						<div class="dropdown is-right">
							<div class="dropdown-trigger">
								<button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
									<span class="icon is-small">
										<i class="fa-solid fa-ellipsis-vertical"></i>
									</span>
								</button>
							</div>
							<div class="dropdown-menu" id="dropdown-menu3" role="menu">
								<div class="dropdown-content p-2">
									<p>
										<button class="button is-success is-fullwidth">
											<span class="icon is-small">
												<i class="fas fa-save"></i>
											</span>
											<span>Zapisz byt</span>
										</button>
									</p>
									<p>
										<button class="button is-fullwidth">
											<span class="icon is-small">
												<i class="fa-solid fa-paint-roller"></i>
											</span>
											<span>Zmień kolor</span>
										</button>
									</p>
								</div>
							</div>
						</div>
					</p>
				</div>
			</nav>
		</div>
		<div class="tile is-child" v-if="!isDead">
			<div class="tile is-parent is-vertical p-0">
				<div class="box tile has-background-dark is-child p-3 is-horizontal">
					<div class="columns">
						<div class="column">
							<p class="control has-icons-left">
								<input class="input" type="number" v-model="data.stats.ws" placeholder="WW">
								<span class="icon is-left has-text-dark">
									<i class="fa-solid fa-hand-back-fist"></i>
								</span>
							</p>
						</div>
						<div class="column">
							<p class="control has-icons-left">
								<input class="input" type="number" v-model="data.stats.bs" placeholder="US">
								<span class="icon is-left has-text-dark">
									<i class="fa-solid fa-eye"></i>
								</span>
							</p>
						</div>
						<div class="column">
							<p class="control has-icons-left">
								<input class="input" type="number" v-model="data.stats.s" placeholder="K">
								<span class="icon is-left has-text-dark">
									<i class="fa-solid fa-dumbbell"></i>
								</span>
							</p>
						</div>
						<div class="column">
							<p class="control has-icons-left">
								<input class="input" type="number" v-model="data.stats.t" placeholder="Odp">
								<span class="icon is-left has-text-dark">
									<i class="fa-solid fa-shield"></i>
								</span>
							</p>
						</div>
						<div class="column">
							<p class="control has-icons-left">
								<input class="input" type="number" v-model="data.stats.ag" placeholder="Zr">
								<span class="icon is-left has-text-dark">
									<i class="fa-solid fa-person-running"></i>
								</span>
							</p>
						</div>
						<div class="column">
							<p class="control has-icons-left">
								<input class="input" type="number" v-model="data.stats.int" placeholder="Int">
								<span class="icon is-left has-text-dark">
									<i class="fa-solid fa-brain"></i>
								</span>
							</p>
						</div>
						<div class="column">
							<p class="control has-icons-left">
								<input class="input" type="number" v-model="data.stats.wp" placeholder="SW">
								<span class="icon is-left has-text-dark">
									<i class="fa-solid fa-face-meh"></i>
								</span>
							</p>
						</div>
						<div class="column">
							<p class="control has-icons-left">
								<input class="input" type="number" v-model="data.stats.fel" placeholder="Ogd">
								<span class="icon is-left has-text-dark">
									<i class="fa-solid fa-comment-dots"></i>
								</span>
							</p>
						</div>
						<div class="column is-2">
							<p class="control has-icons-left">
								<input class="input is-primary" type="number" v-model="data.stats.initiative"
									placeholder="Inicjatywa">
								<span class="icon is-left has-text-dark">
									<i class="fa-solid fa-arrow-down-short-wide"></i>
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="tile is-child" v-if="!isDead">
			<div class="tile is-parent box has-background-dark">
				<div class="tile is-child">
					<div class="columns">
						<div class="column">
							<p class="control">
								<button class="button">
									<span class="icon is-small">
										<i class="fa-solid fa-crosshairs"></i>
									</span>
									<span>Strzał</span>
								</button>
							</p>
						</div>
						<div class="column">
							<p class="control">
								<button class="button">
									<span class="icon is-small">
										<i class="fa-solid fa-user-shield"></i>
									</span>
									<span>Parowanie</span>
								</button>
							</p>
						</div>
						<div class="column">
							<p class="control">
								<button class="button">
									<span class="icon is-small">
										<i class="fa-solid fa-fire-flame-curved"></i>
									</span>
									<span>Atak</span>
								</button>
							</p>
						</div>
						<div class="column">
							<p class="control">
								<button class="button">
									<span class="icon is-small">
										<i class="fa-solid fa-person-running"></i>
									</span>
									<span>Unik</span>
								</button>
							</p>
						</div>
						<div class="column">
							<p class="control">
								<button class="button">
									<span class="icon is-small">
										<i class="fa-solid fa-droplet"></i>
									</span>
									<span>Zrań</span>
								</button>
							</p>
						</div>
						<div class="column">
							<div class="field has-addons">
								<div class="control has-icons-left">
									<div class="select">
										<select>
											<option selected>Miecz</option>
											<option>Topór</option>
											<option>Łuk</option>
										</select>
									</div>
									<div class="icon is-small is-left has-text-black">
										<i class="fa-solid fa-gavel"></i>
									</div>
								</div>
								<div class="control">
									<a class="button is-link">
										<div class="icon is-small">
											<i class="fa-solid fa-gears"></i>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div class="column is-2">
							<div class="field is-grouped wounds-input">
								<div class="field has-addons">
									<p class="control has-icons-left">
										<input class="input no-border" v-model="data.stats.tempW" type="number">
										<span class="icon is-small is-left has-text-dark">
											<i v-if="data.stats.tempW == 0" class="fa-solid fa-heart-crack"></i>
											<i v-else-if="data.stats.tempW <= (data.stats.w / 2)"
												class="fa-solid fa-heart-pulse"></i>
											<i v-else class="fa-solid fa-heart"></i>
										</span>
									</p>
									<p class="control has-icons-left no-border">
										<input class="input no-border" type="number" v-model="data.stats.w"
											placeholder="Żywotność">
										<span class="icon is-small is-left has-text-dark no-border">
											<i class="fa-solid">/</i>
										</span>
									</p>
								</div>
							</div>
						</div>
						<div class="column">
							<div class="control has-icons-left">
								<input class="input" type="number" v-model="data.stats.a" placeholder="A">
								<span class="icon is-left has-text-dark">
									<i class="fa-solid fa-angles-right"></i>
								</span>
							</div>
						</div>
						<div class="column">
							<div class="control has-icons-left">
								<input class="input" type="number" v-model="data.stats.m" placeholder="Sz">
								<span class="icon is-left has-text-dark">
									<i class="fa-solid fa-gauge-high"></i>
								</span>
							</div>
						</div>
						<div class="column">
							<div class="control has-icons-left">
								<input class="input" type="number" v-model="data.stats.mag" placeholder="Mag">
								<span class="icon is-left has-text-dark">
									<i class="fa-solid fa-hat-wizard"></i>
								</span>
							</div>
						</div>
						<div class="column">
							<div class="control has-icons-left">
								<input class="input" type="number" v-model="data.stats.ip" placeholder="PO">
								<span class="icon is-left has-text-dark">
									<i class="fa-solid fa-head-side-virus"></i>
								</span>
							</div>
						</div>
						<div class="column">
							<div class="control has-icons-left">
								<input class="input" type="number" v-model="data.stats.fp" placeholder="PP">
								<span class="icon is-left has-text-dark">
									<i class="fa-solid fa-clover"></i>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="tile is-child" v-if="isExpanded && !isDead">
			<div class="tile box has-background-dark">
				<div class="tile is-parent box is-horizontal">
					<div class="tile is-child is-2 p-2">
						<table class="table is-striped is-narrow">
							<thead>
								<tr>
									<th class="attribute-name">Głowa</th>
									<th class="attribute-name">Korpus</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th class="is-marginless is-paddingless">
										<input type="number" class="input attribute-number" value="0">
									</th>
									<th class="is-marginless is-paddingless">
										<input type="number" class="input attribute-number" value="0">
									</th>
								</tr>
							</tbody>
						</table>
						<table class="table is-striped is-narrow">
							<thead>
								<tr>
									<th class="attribute-name">L.&nbsp;Ręka</th>
									<th class="attribute-name">P.&nbsp;Ręka</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th class="is-marginless is-paddingless">
										<input type="number" class="input attribute-number" value="0">
									</th>
									<th class="is-marginless is-paddingless">
										<input type="number" class="input attribute-number" value="0">
									</th>
								</tr>
							</tbody>
						</table>
						<table class="table is-striped is-narrow">
							<thead>
								<tr>
									<th class="attribute-name">L.&nbsp;Noga</th>
									<th class="attribute-name">P.&nbsp;Noga</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th class="is-marginless is-paddingless">
										<input type="number" class="input attribute-number" value="0">
									</th>
									<th class="is-marginless is-paddingless">
										<input type="number" class="input attribute-number" value="0">
									</th>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="tile is-child is-4 p-2">
						<div class="level mb-3">
							<div class="level-left">
								<div class="level-item">
									<button class="button is-small is-link">
										<span class="icon is-small">
											<i class="fa-solid fa-plus"></i>
										</span>
									</button>
								</div>
								<div class="level-item">
									<p class="subtitle">Umiejętności</p>
								</div>
							</div>
						</div>
						<div class="field is-grouped-multiline is-grouped mb-2">
							<div class="control" v-for="(skill, index) in data.skills" :key="index">
								<div class="tags has-addons">
									<span class="tag is-white has-text-weight-bold is-light is-small">
										{{skill.name}} {{skill.level == 2 ? "+20" : skill.level == 1 ? "+10" : "+0"}}
									</span>
									<span class="is-delete tag is-danger"></span>
								</div>
							</div>
						</div>
						<div class="notification is-info is-light" v-if="data.skills.length == 0">
							Ta postać nie ma umiejętności.
						</div>
						<!-- <Multiselect mode="multiple" v-model="testSkills" :options="testSkillsDb"
							:close-on-select="false" placeholder="Wybierz umiejętności" class="mb-4">
						</Multiselect> -->
						<div class="level mb-3">
							<div class="level-left">
								<div class="level-item">
									<button class="button is-small is-link">
										<span class="icon is-small">
											<i class="fa-solid fa-plus"></i>
										</span>
									</button>
								</div>
								<div class="level-item">
									<p class="subtitle">Zdolności</p>
								</div>
							</div>
						</div>
						<div class="control" v-for="(talent, index) in data.talents" :key="index">
							<div class="tags has-addons">
								<span class="tag is-white has-text-weight-bold is-light is-small">
									{{talent}}
								</span>
								<span class="is-delete tag is-danger"></span>
							</div>
						</div>
						<div class="notification is-info is-light" v-if="data.talents.length == 0">
							Ta postać nie ma zdolności.
						</div>
					</div>
					<div class="tile is-child p-2" v-if="data.stats.mag > 0">
						<div class="level mb-2">
							<div class="level-left">
								<div class="level-item">
									<button class="button is-small is-link">
										<span class="icon is-small">
											<i class="fa-solid fa-plus"></i>
										</span>
									</button>
								</div>
								<div class="level-item">
									<p class="subtitle">Księga Zaklęć</p>
								</div>
							</div>
						</div>
						<div class="box scrollable" style="height: 275px; resize: vertical">
							<Draggable v-model="data.spells" group="inventory" @start="drag=true" @end="drag=false"
								item-key="id">
								<template #item="{element}">
									<Item :data="element" icon="fa-solid fa-wand-magic"></Item>
								</template>
							</Draggable>
						</div>
						<div class="box scrollable is-hidden" style="height: 230px; resize: vertical">
							<div class="box is-fullwidth m-1" v-for="(item, index) in data.inventory" :key="index">
								<!-- Main container -->
								<nav class="level mb-0" style="white-space: wrap">
									<!-- Left side -->
									<div class="level-left">
										<div class="level-item">
											<span class="icon has-text-link">
												<i class="fa-solid fa-suitcase"></i>
											</span>
										</div>
										<div class="level-item" style="white-space: wrap">
											<span class="has-text-weight-bold ml-1">{{item.name}}</span>
										</div>
									</div>

									<!-- Right side -->
									<div class="level-right">
										<p class="level-item">
											<button class="delete is-small has-background-danger"></button>
										</p>
									</div>
								</nav>
								<p v-if="item.description != ''">
									{{item.description}}
								</p>
							</div>
						</div>
						<!-- <textarea class="textarea is-small" rows="10" ref="output" v-model="data.equipment"></textarea> -->
					</div>
					<div class="tile is-child p-2">
						<div class="level mb-2">
							<div class="level-left">
								<div class="level-item">
									<button class="button is-small is-link">
										<span class="icon is-small">
											<i class="fa-solid fa-plus"></i>
										</span>
									</button>
								</div>
								<div class="level-item">
									<p class="subtitle">Ekwipunek</p>
								</div>
							</div>
						</div>
						<div class="box scrollable" style="height: 275px; resize: vertical">
							<Draggable v-model="data.inventory" group="inventory" @start="drag=true" @end="drag=false"
								item-key="id">
								<template #item="{element}">
									<Item :data="element" icon="fa-solid fa-suitcase"></Item>
								</template>
							</Draggable>
						</div>
						<div class="box scrollable is-hidden" style="height: 230px; resize: vertical">
							<div class="box is-fullwidth m-1" v-for="(item, index) in data.inventory" :key="index">
								<!-- Main container -->
								<nav class="level mb-0" style="white-space: wrap">
									<!-- Left side -->
									<div class="level-left">
										<div class="level-item">
											<span class="icon has-text-link">
												<i class="fa-solid fa-suitcase"></i>
											</span>
										</div>
										<div class="level-item" style="white-space: wrap">
											<span class="has-text-weight-bold ml-1">{{item.name}}</span>
										</div>
									</div>

									<!-- Right side -->
									<div class="level-right">
										<p class="level-item">
											<button class="delete is-small has-background-danger"></button>
										</p>
									</div>
								</nav>
								<p v-if="item.description != ''">
									{{item.description}}
								</p>
							</div>
						</div>
						<!-- <textarea class="textarea is-small" rows="10" ref="output" v-model="data.equipment"></textarea> -->
					</div>
					<div class="tile is-child p-2 block">
						<!-- <textarea class="textarea is-small" rows="10" ref="output"
							v-model="data.description"></textarea> -->
						<!-- Main container -->
						<nav class="level mb-1">
							<!-- Left side -->
							<div class="level-left">
								<div class="level-item">
									<p class="subtitle mb-2">Opis</p>
								</div>
							</div>

							<!-- Right side -->
							<div class="level-right">
								<p class="level-item">
									<span class="has-tooltip-arrow has-tooltip-left"
										data-tooltip="Możesz dodać nowy opis przyciskiem + lub ctrl+enter&#10;Wprowadzony tekst do pierwszego złamania linii jest tytułem opisu">
										<span class="icon is-small has-text-info">
											<i class="fa-solid fa-circle-info"></i>
										</span>
									</span>
								</p>
							</div>
						</nav>
						<div class="field has-addons">
							<div class="control is-expanded">
								<textarea class="input is-fullwidth" type="text" placeholder="Dodaj opis"
									style="resize: vertical"></textarea>
							</div>
							<div class="control">
								<a class="button is-link">
									<span class="icon is-small">
										<i class="fa-solid fa-plus"></i>
									</span>
								</a>
							</div>
						</div>
						<div class="box scrollable" style="height: 230px; resize: vertical">
							<draggable v-model="data.description" tag="description" item-key="id">
								<template #item="{element}">
									<Item :data="element" icon="fa-solid fa-circle-info"></Item>
								</template>
							</draggable>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>