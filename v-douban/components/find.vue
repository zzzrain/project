<template>
	<div>
		<footer>
			<mu-paper>
				<mu-bottom-nav :value="bottomNav" @change="handleChange">
					<mu-bottom-nav-item value="hots" title="热映" href="/#/hots" icon="event seat" />
					<mu-bottom-nav-item value="find" title="找片" href="/#/find" icon="visibility" />
					<mu-bottom-nav-item value="user" title="我的" href="/#/user" icon="face" />
				</mu-bottom-nav>
			</mu-paper>
		</footer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bottomNav: 'find'
			}
		},
		methods: {
			handleChange(val) {
				this.bottomNav = val
			}
		}
	}
</script>

<style>
	footer {
		position: fixed;
		bottom: 0px;
		width: 100%;
	}
</style>