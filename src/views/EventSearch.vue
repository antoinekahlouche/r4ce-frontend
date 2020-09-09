<template>
	<Simple title="search">
		<form action="/event/map" method="GET">
			<!-- <div class="border rounded-lg p-3 p-lg-5"> -->
				<div class="m-auto container-sm">
					<div class="form-group">
						<Label text="sport" required />
						<select id="sport" name="sport" class="form-control">
							<option value="" selected>{{$t("text.all")}}</option>
							{{selectSports}}
						</select>
					</div>
					<div class="form-group">
						<Label text="discipline" required />
						<select id="discipline" name="discipline" class="form-control" disabled>
							<option value="" selected>{{$t("text.all")}}</option>
							{{selectDisciplines}}
						</select>
					</div>
					<div class="form-group">
						<Label text="distance" required />   
						<select id="distance" name="distance" class="form-control" disabled>
							<option value="" selected>{{$t("text.all")}}</option>
							{{selectDistances}}
						</select>
					</div>
					<div class="form-group">
						<Label text="format" required />  
						<select id="format" name="format" class="form-control">
							<option value="" selected>{{$t("text.all")}}</option>
							{{selectFormats}}
						</select>
					</div>
					<div class="form-group">
						<Label text="in" required /> 
						<input type="text" class="form-control" name="where" value="France" disabled />
					</div>
					<div class="form-row">
						<div class="form-group col-sm-6">
							<Label text="from" required />   
							<input id="from" type="date" class="form-control" name="from" value="" required />
						</div>
						<div class="form-group col-sm-6">
							<Label text="to" required />  
							<input id="to" type="date" class="form-control" name="to" value="" required />
						</div>
					</div>
				</div>
			<!-- </div> -->
			<br />
			<div class="text-center mt-3">
				<button type="submit" class="btn btn-primary">{{$t("title.search")}}</button>
			</div>
		</form>
		<br />
		<div class="text-center">
			<a href="/event/add">{{$t("title.event_add")}}</a>
		</div>
	</Simple>
</template>

<script>
import Button from "@/components/Label.vue"
import Label from "@/components/Label.vue"
import Simple from "@/layouts/Simple.vue"

export default {
	name: "EventSearch",
	components: {
		Button,
		Label,
		Simple
	}
}
</script>

<style scoped>
</style>
