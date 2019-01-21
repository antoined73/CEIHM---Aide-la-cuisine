export default class RecipeFollower {
    currentRecipeFollowed = null;
    currentStep = null;
    currentStepIndex = -1;
    onStepChangeCallbacks = [];
    chronoLaunched = false;
    chronoAvailable = false;
    showTooltip = true;

    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.updateRecipeAndStep();
    }

    startRecipe(recipe){
        this.currentRecipeFollowed = recipe;
        this.currentStepIndex = -1;
        this.router.push('recipe/'+this.currentRecipeFollowed.id);
    }

    updateRecipeAndStep(){
        this.currentRecipeFollowed = this.store.getters.getRecipeById(this.router.currentRoute.params.recipeID);
        this.currentStepIndex = -1;

        if(this.currentRecipeFollowed){
            this.updateCurrentStep();
            if(this.router.currentRoute.params.stepID){
                this.currentStepIndex = parseInt(this.router.currentRoute.params.stepID);
            }
        }
    }

    disableToolTip() {
        this.showTooltip = false;
    }

    goNextStep(){
        if(this.canGoNextStep()){
            this.currentStepIndex++;
            this.updateCurrentStep();
            this.changeRoute();
        }
    }

    goPreviousStep(){
        if(this.canGoPreviousStep()){
            this.currentStepIndex--;
            this.updateCurrentStep();
            this.changeRoute();
        }
    }

    canGoNextStep(){
        return this.currentRecipeFollowed 
        && this.currentRecipeFollowed.steps && (this.currentStepIndex+1 < this.currentRecipeFollowed.steps.length);
    }

    canGoPreviousStep(){
        return this.currentRecipeFollowed 
        && this.currentRecipeFollowed.steps && (this.currentStepIndex-1 >= -1);
    }

    updateCurrentStep(){
        this.currentStep = null;
        if(this.currentRecipeFollowed.steps &&
        (this.currentStepIndex >= -1 
        && this.currentStepIndex < this.currentRecipeFollowed.steps.length))
        {
            this.currentStep = this.currentRecipeFollowed.steps[this.currentStepIndex];
            if(this.currentStep) this.chronoAvailable = this.currentStep.chrono!=null;
        }
        this.notify();
    }

    notify(){
        this.onStepChangeCallbacks.forEach(callback => {
            if(callback) callback(this.currentStep);
        });
    }

    changeRoute(){
        if(this.currentStepIndex==-1){
            this.router.push('/recipe/'+this.currentRecipeFollowed.id);
        }else{
            this.router.push('/recipe/'+this.currentRecipeFollowed.id+'/step/'+this.currentStep.number);
        }
    }

    goToHomeRecipe(){
        this.router.push("/recipe/"+this.currentRecipeFollowed.id);
    }

    goToVideo(){
        this.router.push(this.currentStep.number+"/video");
    }

    quitVideo(){
         this.router.go(-1);
    }

    stopFollowingRecipe(){
        this.currentRecipeFollowed = null;
        this.currentStep = null;
        this.currentStepIndex = -1;
        this.router.push("/home");
    }

    subscribeOnStepChangeCallback(callback){
        this.onStepChangeCallbacks.push(callback);
    }

    goToChrono(){
        this.router.push(this.currentStep.number+"/chrono");
    }

    quitChrono(){
         this.router.go(-1);
    }
}