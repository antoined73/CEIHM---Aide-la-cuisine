export default class RecipeFollower {
    currentRecipeFollowed = null;
    currentStep = null;
    currentStepIndex = -1;

    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.updateRecipeAndStep();
    }

    startRecipe(recipe){
        this.currentRecipeFollowed = recipe;
        this.currentStepIndex = -1;
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

    goNextStep(){
        if(this.canGoNextStep()){
            this.currentStepIndex++;
            this.updateCurrentStep();
            this.router.push('/recipe/'+this.currentRecipeFollowed.id+'/step/'+this.currentStep.number);
        }
    }

    goPreviousStep(){
        if(this.canGoPreviousStep()){
            this.currentStepIndex--;
            if(this.currentStepIndex==-1){
                this.currentStep = null;
                this.router.push('/recipe/'+this.currentRecipeFollowed.id);
            }else{
                this.updateCurrentStep();
                this.router.push('/recipe/'+this.currentRecipeFollowed.id+'/step/'+this.currentStep.number);
            }
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
        }
    }
}