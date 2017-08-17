<template>
    <div class="card-container">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    {{name}}
                </p>
                <div class="card-industry">
                    {{industry}}
                </div>
            </header>
            <div class="card-content">
                <div class="content">
                    <h1 class="is-text-centered">{{rate}}</h1>
                    <br>
                    <h4 class="is-text-centered">{{platform}}</h4>
                    <br>
                    <small><strong>Study Date: </strong></small>
                    <small class="is-pulled-right"> {{transformDateFrom}} - {{transformDateTo}}</small>
                </div>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item" :href="sourceUrl" target="_blank">Go To Source Of Study</a>
            </footer>
        </div>
    </div>

</template>

<script>
    export default {
        props: ['metric'],

        data() {
            return {
                name: this.metric.metricName,
                rate: this.metric.metricRate,
                sourceName: this.metric.sourceName,
                sourceUrl: this.metric.sourceUrl,
                sourceDateFrom: this.metric.sourceDateTo,
                sourceDateTo: this.metric.sourceDateFrom,
                updatedDate: this.metric.updatedDate,
                platform: this.metric.platform,
                industry: this.metric.industry
            }
        },

        computed: {
            transformDateFrom: function () {
                let dateArr = this.sourceDateFrom.split('-');
                switch(dateArr[1]) {
                    case "01":
                        return "January " + dateArr[0];
                        break;
                    case "02":
                        return "February " + dateArr[0];
                        break;
                    case "03":
                        return "March " + dateArr[0];
                        break;
                    case "04":
                        return "April " + dateArr[0];
                        break;
                    case "05":
                        return "May " + dateArr[0];
                        break;
                    case "06":
                        return "June " + dateArr[0];
                        break;
                    case "07":
                        return "July " + dateArr[0];
                        break;
                    case "08":
                        return "August " + dateArr[0];
                        break;
                    case "09":
                        return "September " + dateArr[0];
                        break;
                    case "10":
                        return "October " + dateArr[0];
                        break;
                    case "11":
                        return "November " + dateArr[0];
                        break;
                    case "12":
                        return "December " + dateArr[0];
                }
            },
            transformDateTo: function () {
                let dateArr = this.sourceDateTo.split('-');
                switch(dateArr[1]) {
                    case "01":
                        return "January " + dateArr[0];
                        break;
                    case "02":
                        return "February " + dateArr[0];
                        break;
                    case "03":
                        return "March " + dateArr[0];
                        break;
                    case "04":
                        return "April " + dateArr[0];
                        break;
                    case "05":
                        return "May " + dateArr[0];
                        break;
                    case "06":
                        return "June " + dateArr[0];
                        break;
                    case "07":
                        return "July " + dateArr[0];
                        break;
                    case "08":
                        return "August " + dateArr[0];
                        break;
                    case "09":
                        return "September " + dateArr[0];
                        break;
                    case "10":
                        return "October " + dateArr[0];
                        break;
                    case "11":
                        return "November " + dateArr[0];
                        break;
                    case "12":
                        return "December " + dateArr[0];
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

    .card-industry{
        align-items: center;
        color: #363636;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: .75rem;
    }

</style>